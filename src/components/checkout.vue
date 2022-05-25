<template>
    <div class="container mt-5 w-50">
        <div v-if="!paidFor">
            <h1 class="pb-3 text-center titre-principal">{{ $i18n.t('payment') }}</h1>
            <p class="text-center"><img :src="`http://rsfbackend.test/images/${estimate.training.thumbnail}`" class="card-img-top img-thumbnail w-50" alt=""></p>
            <h3 class="pb-2">{{ estimate.training.title }}</h3>
            <p>{{ estimate.training.description }}</p>
            <p>{{ estimate.training.total_duration }} {{ $i18n.t('hour') }}</p>
            <p>{{ $i18n.t('by') }} : {{estimate.training.user.first_name}} {{estimate.training.user.last_name}}</p>
            <p>{{ $i18n.t('price') }} : <b>{{estimate.estimate.price}} {{ $i18n.t('cad') }}</b></p>
        </div>

        <div v-if="paidFor">
            <h3 class="text-center mt-5 pt-5"> 🎉✨{{ $i18n.t('congrat') }} ✨🎉</h3>
        </div>
        <div ref="paypal" v-if="!paidFor"></div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Alert from "@/libraries/Alert";

export default {
    name: "checkout",
    data() {
        return {
            loaded: false,
            paidFor: false,
        }
    },
    computed: {
        ...mapState('core/estimate', ['estimate']),
    },
    methods: {
        ...mapActions('core/order', ['saveOrder']),
        setLoaded: function() {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: this.estimate.training.description,
                                    amount: {
                                        currency_code: "CAD",
                                        value: this.estimate.estimate.price
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        if(order) {
                            this.paidFor = true;
                            // Save order on the backend side :
                            let dataToSend = {
                                "training_id": this.estimate.training.id,
                                "estimate_id": this.estimate.estimate.id,
                                "price": this.estimate.estimate.price,
                                "status": 'paid'
                            }
                            this.saveOrder(dataToSend)
                                .then(() => {
                                    Alert.success("Votre achat a bien été enregistré !")
                                })
                                .catch((e) => {
                                    let errorMessage = (Object.values(e.response.data.errors)).join('<br/>');
                                    Alert.fail(errorMessage);
                                })
                        }
                    },
                    onError: err => {
                        Alert.fail(err);
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    },
    mounted: function() {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AQHOpTIo7p5-lDXgz9S-bE81DQ76mfItl9yyOj1h-BXopRWjqFvYOk4zTgfepKBUfyqghIF4C_8UF72p&currency=CAD";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    }
}
</script>

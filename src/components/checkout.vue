<template>
    <div class="container mt-5 w-50">
        <h1 class="pb-3 text-center titre-principal">Paiement</h1>
        <div v-if="!paidFor">
            <p class="text-center"><img :src="`http://rsfbackend.test/images/${estimate.training.thumbnail}`" class="card-img-top img-thumbnail w-50" alt=""></p>
            <h3 class="pb-2">{{ estimate.training.title }}</h3>
            <p>{{ estimate.training.description }}</p>
            <p>{{ estimate.training.total_duration }} heures</p>
            <p>Par : {{estimate.training.user.first_name}} {{estimate.training.user.last_name}}</p>
            <p>Prix : <b>{{estimate.estimate.price}} CAD</b></p>
        </div>

        <div v-if="paidFor">
            <h3>Félicitations ! Bon choix de formation !!!</h3>
        </div>
        <div ref="paypal" v-if="!paidFor"></div>
    </div>
</template>

<script>
import {mapState} from "vuex";
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
                        this.paidFor = true;
                        console.log(order);
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

<template>
    <div class="container mt-5 w-50">
        <h1 class="pb-3 text-center titre-principal">Paiement</h1>
        <div v-if="!paidFor">
            <h3>{{ estimate.training.title }}</h3>
            <p>{{ estimate.training.description }}</p>
            <p>{{ estimate.training.total_duration }} heures</p>
            <p>Par : {{estimate.training.user.first_name}} {{estimate.training.user.last_name}}</p>
        </div>

        <div v-if="paidFor">
            <h3>Félicitations ! Bon choix de formation !!!</h3>
        </div>
        <div ref="paypal"></div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "checkout",
    data() {
        return {
            loaded: false,
            paidFor: false,
            product: {
                price: 777.77,
                description: "leg lamp from that one movie",
                img: "./assets/lamp.jpg"
            }
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
                                    description: this.product.description,
                                    amount: {
                                        currency_code: "USD",
                                        value: this.product.price
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
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    },
    mounted: function() {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AQHOpTIo7p5-lDXgz9S-bE81DQ76mfItl9yyOj1h-BXopRWjqFvYOk4zTgfepKBUfyqghIF4C_8UF72p";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    }
}
</script>

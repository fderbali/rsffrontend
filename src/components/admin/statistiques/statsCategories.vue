<template>
    <div class="container w-50">
        <div class="titre-principal mt-5 text-success">{{ $i18n.t('title-10') }}</div>
        <loader v-if="loading"></loader>
        <div class="row mt-5 pe-5">
            <Pie
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
            />
        </div>
    </div>
</template>

<script>
import Api from "@/libraries/Api";
import Alert from "@/libraries/Alert";
import loader from "@/components/loader";
import { Pie } from 'vue-chartjs/legacy';

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: "statsCategories",
    components: {
        loader,
        Pie
    },
    props: {
        chartId: {
            type: String,
            default: 'pie-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => {}
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            loading: true,
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: [
                            '#FFFF00',
                            '#ff7033',
                            '#3cb371',
                            '#f122dc',
                            '#FF0000',
                            '#00218d',
                            '#00FF00'
                        ],
                        data: []
                    }
                 ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted(){
        Api.get('/api/stats-categories').then((response) => {
            response.data.forEach((e)=>{
                this.chartData.labels.push(Object.keys(e)[0]);
                this.chartData.datasets[0].data.push(Object.values(e)[0]);
            });
        })
            .catch(() => {
                Alert.fail(this.$i18n.t('msg-err4'));//"Une erreur s'est produite, veuillez re-essayer plus tard !"
            })
            .finally(()=>{
                this.loading = false;
            })
    }
}
</script>

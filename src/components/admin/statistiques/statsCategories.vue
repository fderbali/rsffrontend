<template>
    <div class="container">
        <loader v-if="loading"></loader>
        <div class="w-50 mt-5">
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
                        backgroundColor: ['#FF5733', '#FFFF00', '#00FF00', '#3cb371 ', '#FF0000'],
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

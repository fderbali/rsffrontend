<template>
    <div class="container w-50 pt-5">
        <div class="titre-principal text-success">{{ $i18n.t('title-11') }}</div>
        <loader v-if="loading"></loader>
        <Bar
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
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import Api from "@/libraries/Api";
import Alert from "@/libraries/Alert";
import loader from "@/components/loader";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: "StatsDemandsEstimates",
    components: { Bar, loader },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 900
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
    data() {
        return {
            loading: true,
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Statistiques',
                        data: [],
                        backgroundColor: [
                            '#FFFF00',
                            '#ff7033',
                            '#3cb371',
                            '#f122dc',
                            '#FF0000',
                            '#00218d',
                            '#00FF00'
                        ],
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
        Api.get('/api/stats-demands-estimates').then((response) => {
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
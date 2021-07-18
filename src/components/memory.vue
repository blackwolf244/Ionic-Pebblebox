<template>
  <div id="divchart">
    <vue3-chart-js
      :id="doughnutChart.id"
      ref="chartRef"
      :type="doughnutChart.type"
      :data="doughnutChart.data"
      :options="doughnutChart.options"
    ></vue3-chart-js>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import Chart, { ChartData, ChartOptions } from 'chart.js'
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default defineComponent({
  name: "CPU",
  components: {
    Vue3ChartJs,
  },
  data() {
    return {
      timer: 10,
      interval: 1,
    };
  },
  emits: ["start-data"],
  setup() {
    const urlBase = process.env.VUE_APP_LOCAL_SERVER;
    let data: { memory: number; used: number };
    const chartRef = ref<null | { update: () => void }>(null); // ref(0);
    const doughnutChart = {
      id: "doughnut",
      type: "doughnut",
      data: {
        labels: ["Connecting..."],
        datasets: [
          {
            backgroundColor: ["#00D8FF", "#d3d3d3"],
            data: [0, 0],
          },
        ],
      },
      options: {},
    };
    function setData(results: { sidata: { memory: number; used: number } }) {
      if (results) {
        data = results.sidata;
      }
    }

    function fetchData() {
      fetch(`${urlBase}`)
        .then((res) => {
          return res.json();
        })
        .catch(() => {
          data = { memory: 0, used: 0 };
        })
        .then(setData);
    }

    // function to add data
    const updateChart = () => {
      fetchData();
      if (data.memory > 0) {
        const d2 = data.memory - data.used;
        const theData = [data.used, d2];
        doughnutChart.data.labels = [
          "RAM:" + (Math.round(data.used * 100) / 100).toString() + "GB",
        ];
        doughnutChart.data.datasets.forEach((dataset) => {
          dataset.data = theData;
        });
        if (chartRef.value) {
          chartRef.value.update(); // arg 250 removed
        }
      } else {
        const theData = [0, 0];
        doughnutChart.data.labels = ["Connecting..."];
        doughnutChart.data.datasets.forEach((dataset) => {
          dataset.data = theData;
        });
        if (chartRef.value) {
          chartRef.value.update(); // arg 250 removed
        }
      }
    };

    return {
      doughnutChart,
      updateChart,
      chartRef,
      //, beforeRenderLogic
    };
  }, // setup
  methods: {
    startData() {
      this.timer = 10;
      this.$emit("start-data");
      this.startTimer();
    },

    startTimer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(this.interval);
        } else {
          this.updateChart();
        }
      }, 3000);
    },
    cancelAutoUpdate() {
      this.timer = 0;
      clearInterval(this.timer);
    },
  },
  mounted() {
    this.startTimer();
  },
});
</script>

<style lang="scss">
#divchart {
  width: 98%;
}
</style>

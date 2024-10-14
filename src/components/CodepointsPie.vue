<template>
  <div class="codepoint-distribution chart-container">
    <v-chart :option="option" autoresize />
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

import VChart from "vue-echarts";
import { ref } from "vue";

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

const { data } = defineProps(["data"]);

const option = ref({
  tooltip: {
    trigger: "item",
    formatter: "{@first} <br/>{b} : {c} ({d}%)",
  },
  legend: false,
  series: [
    {
      name: "Unicode Scripts",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data,
      clockwise: false,
      label: {
        alignTo: "edge",
        margin: "0%",
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<style lang="scss">
.chart-container {
  height: 90vh;
  // min-height: 120vh;
  overflow: hidden;
  width: 100%;
  margin: auto;

  @media (min-width: 1300px) {
    width: 1200px;
  }
}
</style>

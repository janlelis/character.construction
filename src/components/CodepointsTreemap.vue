<template>
  <v-chart :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([TreemapChart, CanvasRenderer]);

provide(THEME_KEY, "light");

const { data } = defineProps(["data"]);

const color = [
  "#5350c6",
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
];

const option = ref({
  color,
  series: [
    {
      type: "treemap",
      width: "100%",
      height: "100%",
      roam: false,
      animation: false,
      scaleLimit: {
        min: 1,
      },
      // nodeClick: "link",
      squareRatio: 0.8,
      // zoomToNodeRatio: 0,
      breadcrumb: false,
      silent: true,
      itemStyle: {
        gapWidth: 1,
      },
      label: {
        // color: "black",
        // formatter: "{b}\n{c}",
        position: [3, 3],
        fontSize: 17,
        // lineHeight: 22,
        // fontFamily: "Lato",
        fontFamily: "sans",
        fontWeight: "bold",
      },
      data,
    },
  ],
});
</script>

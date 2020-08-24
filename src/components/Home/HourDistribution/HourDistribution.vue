<script lang="ts" src="./HourDistribution.ts"></script>
<style lang="scss" src="./HourDistribution.scss" scoped></style>

<template>
  <div class="dashboard-section-container">
    <div class="dashboard-title">Rozkład godzin</div>
    <div class="chart-container">
      <canvas ref="chartCanvas" id="myChart"></canvas>
    </div>
  </div>
</template>

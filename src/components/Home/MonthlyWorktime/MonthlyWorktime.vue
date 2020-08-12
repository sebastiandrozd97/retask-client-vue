<script lang="ts" src="./MonthlyWorktime.ts"></script>
<style lang="scss" src="./MonthlyWorktime.scss" scoped></style>

<template>
  <div class="monthly-worktime-container container">
    <div class="dashboard-title">Miesięczny czas pracy</div>
    <div class="chart-container">
      <canvas ref="chart" id="myChart"></canvas>
    </div>
  </div>
</template>

<script lang="ts" src="./CompanyWorktime.ts"></script>
<style lang="scss" src="./CompanyWorktime.scss" scoped></style>

<template>
  <div class="dashboard-section-container">
    <div class="company-worktime-header">
      <div class="dashboard-title">Wykaz liczby godzin</div>
      <div class="data-type-toggle">
        <button class="toggle-button" :class="{ active: isMonthly }" @click="setMonthly()">Miesięczny</button>
        <button class="toggle-button" :class="{ active: !isMonthly }" @click="setYearly()">Roczny</button>
      </div>
    </div>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

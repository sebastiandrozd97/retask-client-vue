<script lang="ts" src="./CompanyWorktime.ts"></script>
<style lang="scss" src="./CompanyWorktime.scss" scoped></style>

<template>
  <div class="dashboard-section-container">
    <div class="company-worktime-header">
      <div class="dashboard-title">Wykaz liczby godzin</div>
      <div class="data-type-toggle noselect">
        <input
          type="button"
          class="toggle-button"
          :class="{ active: chartType === chartTypes.MONTHLY }"
          @click="setMonthly()"
          value="Miesięczny"
        />
        <input
          type="button"
          class="toggle-button"
          :class="{ active: chartType === chartTypes.YEARLY }"
          @click="setYearly()"
          value="Roczny"
        />
      </div>
    </div>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

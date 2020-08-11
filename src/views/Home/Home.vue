<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>

<template>
  <div class="home">
    <Top />
    <MonthlyWorkTime :chartData="barData" />
    <HourDistribution :chartData="pieData" />
    <ActiveWorkplaces :workplaces="workplaces" />
    <Worktime :employees="employees" />
  </div>
</template>

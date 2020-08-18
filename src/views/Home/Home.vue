<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>

<template>
  <div class="home">
    <Top />
    <MonthlyWorktime :chartData="barData" />
    <HourDistribution :chartData="pieData" />
    <ActiveWorkplaces :workplaces="workplaces" />
    <Worktime :workers="workers" />
    <GoTo />
  </div>
</template>

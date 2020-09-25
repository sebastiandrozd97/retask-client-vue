<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>

<template>
  <div class="home">
    <top />
    <company-worktime :chartData="barData" />
    <hour-distribution :chartData="pieData" />
    <active-workplaces :workplaces="workplaces" />
    <worktime :workers="workers" />
    <go-to />
  </div>
</template>

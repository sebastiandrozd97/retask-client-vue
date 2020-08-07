<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>

<template>
  <div class="home">
    <Top />
    <MonthlyWorkTime :data="data()" />
    <HourDistribution :data="data()" />
  </div>
</template>

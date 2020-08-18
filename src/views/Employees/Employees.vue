<script lang="ts" src="./Employees.ts"></script>
<style lang="scss" src="./Employees.scss" scoped></style>

<template>
  <div class="employees-container">
    <div class="top">
      <span class="title">Pracownicy</span>
      <button>Dodaj pracownika</button>
    </div>
    <div class="employees-list">
      <Employee v-for="(worker, index) in filteredWorkers" :key="index" :worker="worker" />
    </div>
  </div>
</template>

<script lang="ts" src="./EmployeesDiary.ts"></script>
<style lang="scss" src="./EmployeesDiary.scss" scoped></style>

<template>
  <div class="employees-container">
    <span class="top">
      Dziennik pracownika
    </span>
    <div class="employees-list">
      <div class="header">
        <span>Data</span>
        <span>Czas pracy</span>
        <span>Liczba godzin</span>
        <span>Budowa</span>
        <span>Wykonana praca</span>
      </div>
      <Workday v-for="(workingDay, index) in workdays" :key="index" :workingDay="workingDay" />
      <div class="new-employee" @click="$refs.newWorkdayModal.changeModalState()">Dodaj pracownika</div>
    </div>
    <NewWorkdayModal ref="newWorkdayModal" />
  </div>
</template>

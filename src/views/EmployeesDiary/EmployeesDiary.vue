<script lang="ts" src="./EmployeesDiary.ts"></script>
<style lang="scss" src="./EmployeesDiary.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Dziennik pracownika
    </span>
    <div class="desktop-buttons">
      <div class="new-employee" @click="$refs.newWorkdayModal.changeModalState()">Dodaj</div>
    </div>
    <div class="employees-list">
      <div class="header">
        <span>Data</span>
        <span>Czas pracy</span>
        <span>Liczba godzin</span>
        <span>Budowa</span>
        <span>Wykonana praca</span>
      </div>
      <Workday v-for="(workday, index) in workdays" :key="index" :workday="workday" />
    </div>
    <NewWorkdayModal ref="newWorkdayModal" />
  </div>
</template>

<script lang="ts" src="./WorkplacesDiary.ts"></script>
<style lang="scss" src="./WorkplacesDiary.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Dziennik budowy
    </span>
    <div class="desktop-buttons">
      <div class="new-employee" @click="$refs.newWorkdayModal.changeModalState()">Dodaj</div>
      <div class="new-employee" @click="$refs.filterWorkdayModal.changeModalState()">Filtruj</div>
    </div>
    <div class="employees-list">
      <div class="header">
        <span>Data</span>
        <span>Pracownik</span>
        <span>Czas pracy</span>
        <span>Liczba godzin</span>
        <span>Wykonana praca</span>
      </div>
      <Workday v-for="(workday, index) in workdays" :key="index" :workday="workday" />
    </div>
    <NewWorkdayModal ref="newWorkdayModal" />
    <FilterWorkdayModal ref="filterWorkdayModal" />
  </div>
</template>

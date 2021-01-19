<script lang="ts" src="./Employees.ts"></script>
<style lang="scss" src="./Employees.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Pracownicy
    </span>
    <div class="employees-list">
      <div class="header">
        <span>Imie</span>
        <span>Nazwisko</span>
        <span>Numer telefonu</span>
        <span>Status zatrudnienia</span>
        <span>Liczba godzin</span>
        <span>Ostatni wpis</span>
      </div>
      <Employee v-for="(worker, index) in workers" :key="index" :worker="worker" />
      <div class="new-employee" @click="$refs.newEmployeeModal.changeModalState()">Dodaj pracownika</div>
    </div>
    <NewEmployeeModal ref="newEmployeeModal" />
  </div>
</template>

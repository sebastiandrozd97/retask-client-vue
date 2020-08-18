<script lang="ts" src="./Employee.ts"></script>
<style lang="scss" src="./Employee.scss" scoped></style>

<template>
  <div class="employee-container">
    <div class="employee-details">
      <span
        >Imię: <strong>{{ worker.firstName }}</strong></span
      >
      <span
        >Nazwisko: <strong>{{ worker.firstName }}</strong></span
      >
      <span
        >Numer telefonu: <strong>{{ worker.lastName }}</strong></span
      >
      <span>
        Status zatrudnienia:
        <strong class="working" v-if="worker.isEmployed">Pracuje</strong>
        <strong class="not-working" v-if="!worker.isEmployed">Nie pracuje</strong></span
      >
      <span
        >Liczba godzin: <strong>{{ worker.worktime }} h</strong></span
      >
      <span
        >Ostatni dzień roboczy: <strong>{{ worker.lastWorkday }}</strong></span
      >
    </div>
    <div class="icons">
      <fa-icon class="employee-icon far fa-2x" :icon="['far', 'edit']" />
      <fa-icon class="employee-icon far fa-2x" :icon="['far', 'trash-alt']" />
    </div>
  </div>
</template>

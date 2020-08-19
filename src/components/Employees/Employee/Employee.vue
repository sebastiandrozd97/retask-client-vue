<script lang="ts" src="./Employee.ts"></script>
<style lang="scss" src="./Employee.scss" scoped></style>

<template>
  <div class="employee-container">
    <div class="employee-details">
      <div class="details-section">
        <span>
          Imię:
        </span>
        <span>
          {{ worker.firstName }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Nazwisko:
        </span>
        <span>
          {{ worker.lastName }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Numer telefonu:
        </span>
        <span>
          {{ worker.telephoneNumber }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Status zatrudnienia:
        </span>
        <span class="working" v-if="worker.isEmployed">Pracuje</span>
        <span class="not-working" v-else>Nie pracuje</span>
      </div>
      <div class="details-section">
        <span>
          Liczba godzin:
        </span>
        <span> {{ worker.worktime }} h </span>
      </div>
      <div class="details-section">
        <span>
          Ostatni dzień roboczy:
        </span>
        <span>
          {{ worker.lastWorkday }}
        </span>
      </div>
    </div>
    <div class="icons">
      <button><fa-icon class="employee-icon far fa-2x" :icon="['far', 'edit']" /></button>
      <button><fa-icon class="employee-icon far fa-2x" :icon="['far', 'trash-alt']" /></button>
    </div>
  </div>
</template>

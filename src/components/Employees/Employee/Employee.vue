<script lang="ts" src="./Employee.ts"></script>
<style lang="scss" src="./Employee.scss" scoped></style>

<template>
  <div class="employee-container">
    <router-link class="employee-details" :to="{ name: 'EmployeesDiary', params: { id: worker.id } }">
      <div class="details-wrap">
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
    </router-link>
    <div class="icons">
      <EditEmployeeModal :worker="worker" />
      <DeleteEmployeeModal />
    </div>
  </div>
</template>

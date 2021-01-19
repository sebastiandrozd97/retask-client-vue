<script lang="ts" src="./Employee.ts"></script>
<style lang="scss" src="./Employee.scss" scoped></style>

<template>
  <div class="list-element-container">
    <router-link class="employee-details" :to="{ name: 'EmployeesDiary', params: { id: worker.id } }">
      <div class="item-details-wrap">
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
            {{ worker.phoneNumber }}
          </span>
        </div>
        <div class="details-section">
          <span>
            Status zatrudnienia:
          </span>
          <span class="working" v-if="worker.isHired">Pracuje</span>
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
      <router-link class="go-to-diary-button" :to="{ name: 'EmployeesDiary', params: { id: worker.id } }"
        ><button class="diary-button">
          <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'clipboard-list']" /></button
      ></router-link>
      <EditEmployeeModal :worker="worker" />
      <DeleteEmployeeModal />
    </div>
  </div>
</template>

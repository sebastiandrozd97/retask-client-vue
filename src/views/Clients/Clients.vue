<script lang="ts" src="./Clients.ts"></script>
<style lang="scss" src="./Clients.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Klienci
    </span>
    <div class="employees-list">
      <div class="header">
        <span>Imie</span>
        <span>Nazwisko</span>
        <span>Numer telefonu</span>
        <span>Liczba budów</span>
        <span>Liczba godzin</span>
      </div>
      <Client v-for="(client, index) in clients" :key="index" :client="client" :workplaces="workplaces" />
      <div class="new-employee" @click="$refs.newClientModal.changeModalState()">Dodaj klienta</div>
    </div>
    <NewClientModal ref="newClientModal" />
  </div>
</template>

<script lang="ts" src="./Workplaces.ts"></script>
<style lang="scss" src="./Workplaces.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Budowy
    </span>
    <div class="employees-list">
      <div class="header">
        <span class="header-name">Nazwa</span>
        <span class="header-address">Adres</span>
        <span class="header-client">Klient</span>
        <span>Status budowy</span>
        <span>Liczba godzin</span>
      </div>
      <Workplace v-for="(workplace, index) in filteredWorkplaces" :key="index" :workplace="workplace" />
      <div class="new-workplace" @click="$refs.newWorkplaceModal.changeModalState()">Dodaj budowę</div>
    </div>
    <NewWorkplaceModal ref="newWorkplaceModal" />
  </div>
</template>

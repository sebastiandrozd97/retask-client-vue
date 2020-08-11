<script lang="ts" src="./ActiveWorkplaces.ts"></script>
<style lang="scss" src="./ActiveWorkplaces.scss" scoped></style>

<template>
  <div class="active-workplaces-container container">
    <div class="dashboard-title">Aktualne budowy</div>
    <div class="content">
      <div class="workplaces-list">
        <span v-for="(workplace, index) in filteredWorkplaces" :key="index">{{ workplace }}</span>
      </div>
      <div class="buttons">
        <button @click="previousPage()" :class="{ hidden: page === 1 }">Poprzednie</button>
        <button @click="nextPage()" :class="{ hidden: page >= maxPage }">Następne</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Worktime.ts"></script>
<style lang="scss" src="./Worktime.scss" scoped></style>

<template>
  <div class="worktime-container container">
    <div class="dashboard-title">Przepracowane godziny</div>
    <div class="content" ref="listContainer">
      <div class="employees-list">
        <span class="list-item" v-for="(employee, index) in filteredEmployees" :key="index">
          <span class="list-item-element">{{ employee.name }}</span>
          <span class="list-item-element">{{ employee.worktime }} godzin</span>
        </span>
      </div>
      <div class="buttons">
        <button @click="previousPage()" :class="{ hidden: page === 1 }">Poprzednie</button>
        <button @click="nextPage()" :class="{ hidden: page >= maxPage }">Następne</button>
      </div>
    </div>
  </div>
</template>

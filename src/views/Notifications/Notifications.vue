<script lang="ts" src="./Notifications.ts"></script>
<style lang="scss" src="./Notifications.scss" scoped></style>

<template>
  <div class="list-container">
    <span class="top">
      Powiadomienia
    </span>
    <div class="employees-list">
      <div class="header">
        <span>Data</span>
        <span>Pracownik</span>
        <span>Akcja</span>
      </div>
      <notification v-for="notification in sortedNotifications" :key="notification.id" :notification="notification" />
    </div>
  </div>
</template>

<script lang="ts" src="./Notification.ts"></script>
<style lang="scss" src="./Notification.scss" scoped></style>

<template>
  <div class="notifications-content-item" :class="{ seen: notification.isSeen }" @click="changeState">
    <span class="notification-name">{{ notification.name }}</span>
    <span>{{ notification.content }}</span>
  </div>
</template>

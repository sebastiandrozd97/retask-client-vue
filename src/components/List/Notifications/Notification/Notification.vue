<script lang="ts" src="./Notification.ts"></script>
<style lang="scss" src="./Notification.scss" scoped></style>

<template>
  <div @click="notification.isSeen = !notification.isSeen" class="list-element-container">
    <div class="item-details-wrap" :class="{ seen: notification.isSeen }">
      <div class="details-section date-section">
        <span>
          Data:
        </span>
        <span>
          {{ notification.date }}
        </span>
      </div>
      <div class="details-section name-section">
        <span>
          Pracownik:
        </span>
        <span>{{ notification.name }}</span>
      </div>
      <div class="details-section content-section">
        <span>
          Dokonana akcja:
        </span>
        <span>{{ notification.content }}</span>
      </div>
    </div>
  </div>
</template>

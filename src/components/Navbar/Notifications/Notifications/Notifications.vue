<script lang="ts" src="./Notifications.ts"></script>
<style lang="scss" src="./Notifications.scss" scoped></style>

<template>
  <div class="nav-item-link">
    <div class="img-container notifications-container">
      <fa-icon
        class="notification-icon nav-icon fa-lg"
        icon="bell"
        @click="isNotificationBoxOpen = !isNotificationBoxOpen"
      />
      <span class="notification-number noselect">{{ unseenNotifications }}</span>
      <div class="notifications-box" :class="{ open: isNotificationBoxOpen }">
        <div class="top noselect">
          <fa-icon
            class="notification-icon nav-icon fa-lg"
            icon="chevron-left"
            @click="isNotificationBoxOpen = false"
          />
          <span class="notifications-content-title">Powiadomienia</span>
        </div>
        <div class="notifications-content">
          <div v-for="(notification, index) in notifications" :key="index" class="notifications-content-item">
            <span class="notification-name" :class="{ seen: notification.isSeen }">{{ notification.name }}</span>
            <span>{{ notification.content }}</span>
            <span class="notification-date">{{ getNotificationDate(notification.date) }}</span>
          </div>
          <!-- <notification v-for="(notification, index) in notifications" :key="index" :notification="notification" /> -->
        </div>
        <div class="bottom">
          <router-link
            class="go-to-notifications-button"
            @click.native="isNotificationBoxOpen = false"
            to="/notifications"
          >
            Przejdź do powiadomień
          </router-link>
        </div>
      </div>
    </div>
    <span class="menu-text">Powiadomienia</span>
  </div>
</template>

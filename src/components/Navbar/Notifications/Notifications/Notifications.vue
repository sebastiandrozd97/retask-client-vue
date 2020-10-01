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
          <notification v-for="(notification, index) in notifications" :key="index" :notification="notification" />
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

<script lang="ts" src="./Navbar.ts"></script>
<style lang="scss" src="./Navbar.scss" scoped></style>

<template>
  <div class="nav-container">
    <div class="background"></div>
    <div class="nav-wrap">
      <img class="close-nav" src="@/assets/img/x.svg" />
      <div class="nav">
        <div class="router-links">
          <router-link class="nav-item-link" to="/">
            <div class="nav-item">
              <img class="nav-img" src="@/assets/img/builder/builder-grey.svg" />
              <span class="menu-text">Pracownicy</span>
            </div>
          </router-link>
          <router-link class="nav-item-link" to="/">
            <div class="nav-item">
              <img class="nav-img" src="@/assets/img/construction-site/winch-grey.svg" />
              <span class="menu-text">Budowy</span>
            </div>
          </router-link>
          <router-link class="nav-item-link" to="/">
            <div class="nav-item">
              <img class="nav-img" src="@/assets/img/client/man-grey.svg" />
              <span class="menu-text">Klienci</span>
            </div>
          </router-link>
          <router-link class="nav-item-link" to="/">
            <div class="nav-item">
              <img class="nav-img" src="@/assets/img/notification/bell-grey.svg" />
              <span class="menu-text">Powiadomienia</span>
            </div>
          </router-link>
        </div>
        <div class="logout-button">
          <router-link to="/">
            <div class="nav-item">
              <img class="nav-img" src="@/assets/img/logout/exit-grey.svg" />
              <span class="menu-text">Wyloguj się</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

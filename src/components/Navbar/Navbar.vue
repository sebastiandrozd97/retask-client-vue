<script lang="ts" src="./Navbar.ts"></script>
<style lang="scss" src="./Navbar.scss" scoped></style>

<template>
  <div>
    <button class="open-close-nav-button open-nav-button" @click="isMenuOpen = !isMenuOpen">
      <img src="@/assets/img/open-menu.svg" />
    </button>
    <div class="nav-container" :class="{ open: isMenuOpen }">
      <div class="background"></div>
      <div class="nav-wrap">
        <button class="open-close-nav-button close-nav-button" @click="isMenuOpen = !isMenuOpen">
          <img src="@/assets/img/x.svg" />
        </button>
        <div class="nav">
          <div class="router-links">
            <router-link class="nav-item-link" to="/">
              <img class="nav-img" src="@/assets/img/builder/builder-grey.svg" />
              <span class="menu-text">Pracownicy</span>
            </router-link>
            <router-link class="nav-item-link" to="/">
              <img class="nav-img" src="@/assets/img/construction-site/winch-grey.svg" />
              <span class="menu-text">Budowy</span>
            </router-link>
            <router-link class="nav-item-link" to="/">
              <img class="nav-img" src="@/assets/img/client/man-grey.svg" />
              <span class="menu-text">Klienci</span>
            </router-link>
            <router-link class="nav-item-link" to="/">
              <img class="nav-img" src="@/assets/img/notification/bell-grey.svg" />
              <span class="menu-text">Powiadomienia</span>
            </router-link>
          </div>
          <div class="logout-button">
            <router-link class="nav-item-link" to="/">
              <img class="nav-img" src="@/assets/img/logout/exit-grey.svg" />
              <span class="menu-text">Wyloguj się</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

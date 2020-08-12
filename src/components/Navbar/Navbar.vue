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
            <router-link class="nav-item-link logo-link" to="/">
              <img class="nav-img logo" src="@/assets/img/Logo.svg" />
            </router-link>
            <router-link class="nav-item-link employees-link" to="/employees">
              <div class="img-container">
                <img class="nav-img employees" src="@/assets/img/mobile/builder-grey.svg" />
              </div>
              <span class="menu-text">Pracownicy</span>
            </router-link>
            <router-link class="nav-item-link workplaces-link" to="/workplaces">
              <div class="img-container">
                <img class="nav-img workplaces" src="@/assets/img/mobile/winch-grey.svg" />
              </div>
              <span class="menu-text">Budowy</span>
            </router-link>
            <router-link class="nav-item-link clients-link" to="/clients">
              <div class="img-container"><img class="nav-img clients" src="@/assets/img/mobile/man-grey.svg" /></div>
              <span class="menu-text">Klienci</span>
            </router-link>
            <router-link class="nav-item-link notifications-link" to="/notifications">
              <div class="img-container">
                <img class="nav-img notifications" src="@/assets/img/mobile/bell-grey.svg" />
              </div>
              <span class="menu-text">Powiadomienia</span>
            </router-link>
            <router-link class="nav-item-link settings-link" to="/settings">
              <div class="img-container">
                <img class="nav-img settings" src="@/assets/img/mobile/gear-grey.svg" />
              </div>
              <span class="menu-text">Ustawienia</span>
            </router-link>
          </div>
          <div class="logout-button">
            <router-link class="nav-item-link" to="/login">
              <div class="img-container"><img class="nav-img logout" src="@/assets/img/mobile/exit-grey.svg" /></div>
              <span class="menu-text">Wyloguj się</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

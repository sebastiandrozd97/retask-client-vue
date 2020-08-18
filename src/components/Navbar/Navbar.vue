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
            <router-link @click.native="isMenuOpen = !isMenuOpen" class="nav-item-link home-button" to="/">
              ReMember
            </router-link>
            <router-link
              @click.native="isMenuOpen = !isMenuOpen"
              v-for="(route, index) in routes"
              :key="index"
              class="nav-item-link"
              :to="route.route"
            >
              <div class="img-container">
                <fa-icon class="nav-icon fa-lg" :icon="route.icon" />
              </div>
              <span class="menu-text">{{ route.label }}</span>
            </router-link>
          </div>
          <div class="logout-button">
            <router-link class="nav-item-link" to="/login"
              ><fa-icon class="nav-icon fa-lg" icon="sign-out-alt" />
              <span class="menu-text">Wyloguj się</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<template>
  <div id="app">
    <Navbar v-if="show" />
    <router-view />
  </div>
</template>

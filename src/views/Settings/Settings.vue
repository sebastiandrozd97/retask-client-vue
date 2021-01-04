<script lang="ts" src="./Settings.ts"></script>
<style lang="scss" src="./Settings.scss" scoped></style>

<template>
  <div class="auth">
    <span class="top">Ustawienia</span>
    <form class="auth-form" :class="{ 'show-form': currentForm === 'default' }">
      <div class="form-section">
        <label class="form-label" for="default-email">Adres email</label>
        <input
          class="form-input"
          type="text"
          name="default-email"
          placeholder="Adres email"
          v-model="user.email"
          :required="currentForm === 'default'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="default-username">Nazwa użytkownika</label>
        <input
          class="form-input"
          type="text"
          name="default-username"
          placeholder="Nazwa użytkownika"
          v-model="user.userName"
          :required="currentForm === 'default'"
        />
      </div>
      <div class="options-buttons">
        <button @click.prevent="form = 'changePassword'">Zmień hasło</button>
      </div>
      <button @click.prevent="save()" class="submit-button">Zapisz</button>
    </form>
    <form class="auth-form" :class="{ 'show-form': currentForm === 'changePassword' }">
      <div class="options-buttons">
        <button @click.prevent="form = 'default'">Wróć</button>
      </div>
      <div class="form-section">
        <label class="form-label" for="change-password-1"></label>
        <input
          class="form-input"
          type="password"
          name="change-password-1"
          placeholder="Wpisz nowe hasło"
          :required="currentForm === 'remind'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="change-password-2"></label>
        <input
          class="form-input"
          type="password"
          name="change-password-2"
          placeholder="Ponownie wpisz hasło"
          :required="currentForm === 'remind'"
        />
      </div>
      <button @click.prevent="changePassword()" class="submit-button">Zmień hasło</button>
    </form>
  </div>
</template>

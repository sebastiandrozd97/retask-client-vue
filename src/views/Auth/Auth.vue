<script lang="ts" src="./Auth.ts"></script>
<style lang="scss" src="./Auth.scss" scoped></style>

<template>
  <div class="auth">
    <span class="title">ReMember</span>
    <form class="auth-form" :class="{ 'show-form': currentForm === 'login' }">
      <div class="form-section">
        <label class="form-label" for="login-login"></label>
        <input
          class="form-input"
          type="text"
          name="login-login"
          placeholder="Nazwa użytkownika"
          :required="currentForm === 'login'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="login-password"></label>
        <input
          class="form-input"
          type="password"
          name="login-password"
          placeholder="Hasło"
          :required="currentForm === 'login'"
        />
      </div>
      <div class="options-buttons">
        <button @click.prevent="form = 'register'">Zarejestruj się</button> lub
        <button @click.prevent="form = 'remind'">przypomnij sobie hasło</button>
      </div>
      <button @click.prevent="login()" class="submit-button"><router-link to="/">Zaloguj się</router-link></button>
    </form>
    <form class="auth-form" :class="{ 'show-form': currentForm === 'register' }">
      <div class="form-section">
        <label class="form-label" for="firstName"></label>
        <input
          class="form-input"
          type="text"
          name="firstName"
          placeholder="Imię"
          :required="currentForm === 'register'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="lastName"></label>
        <input
          class="form-input"
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          :required="currentForm === 'register'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="register-email"></label>
        <input
          class="form-input"
          type="email"
          name="register-email"
          placeholder="Adres email"
          :required="currentForm === 'register'"
        />
      </div>
      <div class="form-section">
        <label class="form-label" for="register-password"></label>
        <input
          class="form-input"
          type="password"
          name="register-password"
          placeholder="Hasło"
          :required="currentForm === 'register'"
        />
      </div>
      <div class="options-buttons">
        <button @click.prevent="form = 'login'">Zaloguj się</button> lub
        <button @click.prevent="form = 'remind'">przypomnij sobie hasło</button>
      </div>
      <button @click.prevent="register()" class="submit-button">Zarejestruj się</button>
    </form>
    <form class="auth-form" :class="{ 'show-form': currentForm === 'remind' }">
      <div class="form-section">
        <label class="form-label" for="remind-email"></label>
        <input
          class="form-input"
          type="text"
          name="remind-email"
          placeholder="Adres email"
          :required="currentForm === 'remind'"
        />
      </div>
      <div class="options-buttons">
        <button @click.prevent="form = 'login'">Zaloguj się</button> lub
        <button @click.prevent="form = 'register'">zarejestruj się</button>
      </div>
      <button @click="remindPassword()" class="submit-button">Przypomij hasło</button>
    </form>
  </div>
</template>

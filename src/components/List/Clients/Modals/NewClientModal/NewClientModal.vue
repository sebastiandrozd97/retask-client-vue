<script lang="ts" src="./NewClientModal.ts"></script>
<style lang="scss" src="./NewClientModal.scss" scoped></style>

<template>
  <div class="new-employee-modal-container">
    <button class="add-item-button" @click="isModalClosed = !isModalClosed">Dodaj klienta</button>
    <div
      @click="isModalClosed = true"
      class="modal-background new-modal-background"
      :class="{ 'closed-modal': isModalClosed }"
    >
      <div class="modal" @click.stop>
        <span class="modal-title">Dodaj nowego klienta</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="first-name">Imię</label>
            <input class="modal-input" type="text" name="first-name" placeholder="Wpisz imię klienta" />
          </div>
          <div class="form-element">
            <label class="modal-label" for="last-name">Nazwisko</label>
            <input class="modal-input" type="text" name="last-name" placeholder="Wpisz nazwisko klienta" />
          </div>
          <div class="form-element">
            <label class="modal-label" for="telephone-number">Numer telefonu</label>
            <input class="modal-input" type="text" name="telephone-number" placeholder="Wpisz numer telefonu klienta" />
          </div>
          <div class="form-buttons">
            <button @click.prevent="isModalClosed = !isModalClosed" class="cancel-button">Anuluj</button>
            <button @click.prevent="isModalClosed = !isModalClosed" class="submit-button">Zatwierdź</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

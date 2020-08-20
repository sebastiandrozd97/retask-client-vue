<script lang="ts" src="./NewWorkdayModal.ts"></script>
<style lang="scss" src="./NewWorkdayModal.scss" scoped></style>

<template>
  <div class="new-employee-modal-container">
    <button class="add-employee-button" @click="isModalClosed = !isModalClosed">Dodaj wykonaną pracę</button>
    <div class="modal-background" :class="{ closed: isModalClosed }">
      <div class="modal">
        <span class="modal-title">Dodaj nowego pracownika</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="first-name">Imię</label>
            <input class="modal-input" type="text" name="first-name" placeholder="Wpisz imię pracownika" />
          </div>
          <div class="form-element">
            <label class="modal-label" for="last-name">Nazwisko</label>
            <input class="modal-input" type="text" name="last-name" placeholder="Wpisz nazwisko pracownika" />
          </div>
          <div class="form-element">
            <label class="modal-label" for="telephone-number">Numer telefonu</label>
            <input
              class="modal-input"
              type="text"
              name="telephone-number"
              placeholder="Wpisz numer telefonu pracownika"
            />
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

<script lang="ts" src="./EditEmployeeModal.ts"></script>

<template>
  <div class="new-employee-modal-container">
    <button class="modalOpenButton" @click="isEditModalClosed = !isEditModalClosed">
      <fa-icon class="employee-icon far fa-2x" :icon="['far', 'edit']" />
    </button>
    <div
      @click="isEditModalClosed = true"
      class="modal-background edit-modal-background"
      :class="{ 'closed-modal': isEditModalClosed }"
    >
      <div class="modal" @click.stop>
        <span class="modal-title">Edytuj dane pracownika</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="first-name">Imię</label>
            <input
              class="modal-input"
              :value="worker.firstName"
              type="text"
              name="first-name"
              placeholder="Wpisz imię pracownika"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="last-name">Nazwisko</label>
            <input
              class="modal-input"
              :value="worker.lastName"
              type="text"
              name="last-name"
              placeholder="Wpisz nazwisko pracownika"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="telephone-number">Numer telefonu</label>
            <input
              class="modal-input"
              :value="worker.telephoneNumber"
              type="text"
              name="telephone-number"
              placeholder="Wpisz numer telefonu pracownika"
            />
          </div>
          <div class="form-buttons">
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" class="cancel-button">Anuluj</button>
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" class="submit-button">Zatwierdź</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./EditClientModal.ts"></script>

<template>
  <div class="new-employee-modal-container">
    <button class="modalOpenButton" @click="isEditModalClosed = !isEditModalClosed">
      <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'edit']" />
    </button>
    <div
      @click="isEditModalClosed = true"
      class="modal-background edit-modal-background"
      :class="{ 'closed-modal': isEditModalClosed }"
    >
      <div class="modal" @click.stop>
        <span class="modal-title">Edytuj dane klienta</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="first-name">Imię</label>
            <input
              class="modal-input"
              v-model="client.firstName"
              type="text"
              name="first-name"
              placeholder="Wpisz imię klienta"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="last-name">Nazwisko</label>
            <input
              class="modal-input"
              v-model="client.lastName"
              type="text"
              name="last-name"
              placeholder="Wpisz nazwisko klienta"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="telephone-number">Numer telefonu</label>
            <input
              class="modal-input"
              v-model="client.phoneNumber"
              type="text"
              name="telephone-number"
              placeholder="Wpisz numer telefonu klienta"
            />
          </div>
          <div class="form-buttons">
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" class="cancel-button">Anuluj</button>
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" @click="updateClient" class="submit-button">
              Zatwierdź
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

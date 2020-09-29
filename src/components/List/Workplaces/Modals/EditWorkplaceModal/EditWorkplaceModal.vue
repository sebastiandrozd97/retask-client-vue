<script lang="ts" src="./EditWorkplaceModal.ts"></script>

<template>
  <div class="new-employee-modal-container">
    <button class="modalOpenButton" @click="isEditModalClosed = !isEditModalClosed">
      <fa-icon class="employee-icon far fa-2x" :icon="['far', 'edit']" />
    </button>
    <div class="modal-background edit-modal-background" :class="{ 'closed-modal': isEditModalClosed }">
      <div class="modal">
        <span class="modal-title">Edytuj dane budowy</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="name">Nazwa</label>
            <input
              class="modal-input"
              :value="workplace.name"
              type="text"
              name="name"
              placeholder="Wpisz nazwę budowy"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="city">Miasto</label>
            <input
              class="modal-input"
              :value="workplace.address.city"
              type="text"
              name="city"
              placeholder="Wpisz nazwę miasta"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="street">Ulica i numer domu</label>
            <input
              class="modal-input"
              :value="workplace.address.street"
              type="text"
              name="street"
              placeholder="Wpisz ulicę i numer domu"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="client">Klient</label>
            <select class="modal-select" v-model="workplace.client" name="client" required>
              <option v-for="(client, index) in clients" :key="index" :value="client.firstName + ' ' + client.lastName"
                >{{ client.firstName }} {{ client.lastName }}</option
              >
            </select>
          </div>
          <div class="form-element">
            <label class="modal-label" for="status">Status budowy</label>
            <select class="modal-select" v-model="workplace.isOpen" name="status" required>
              <option :value="true">Otwarta</option>
              <option :value="false">Zamknięta</option>
            </select>
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

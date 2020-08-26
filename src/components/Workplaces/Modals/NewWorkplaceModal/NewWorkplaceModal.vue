<script lang="ts" src="./NewWorkplaceModal.ts"></script>
<style lang="scss" src="./NewWorkplaceModal.scss" scoped></style>

<template>
  <div class="new-employee-modal-container">
    <button class="add-item-button" @click="isModalClosed = !isModalClosed">Dodaj pracownika</button>
    <div class="modal-background new-modal-background" :class="{ 'closed-modal': isModalClosed }">
      <div class="modal">
        <span class="modal-title">Dodaj nową budowę</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="name">Nazwa</label>
            <input
              class="modal-input"
              type="text"
              name="name"
              v-model="newWorkpalce.name"
              placeholder="Wpisz nazwę budowy"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="city">Miasto</label>
            <input
              class="modal-input"
              type="text"
              name="city"
              v-model="newWorkpalce.city"
              placeholder="Wpisz nazwę miasta"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="street">Ulica</label>
            <input
              class="modal-input"
              type="text"
              name="street"
              v-model="newWorkpalce.street"
              placeholder="Wpisz nazwę ulicy i numer domu"
            />
          </div>
          <div class="form-element">
            <label class="modal-label" for="client">Klient</label>
            <select class="modal-select" v-model="newWorkpalce.client" name="client" required>
              <option>Wybierz klienta</option>
              <option v-for="(client, index) in clients" :key="index" :value="client">{{ client }}</option>
            </select>
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

<script lang="ts" src="./DeleteClientModal.ts"></script>

<template>
  <div class="new-employee-modal-container">
    <button class="modalOpenButton" @click="isDeleteModalClosed = !isDeleteModalClosed">
      <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'trash-alt']" />
    </button>
    <div
      @click="isDeleteModalClosed = true"
      class="modal-background delete-modal-background"
      :class="{ 'closed-modal': isDeleteModalClosed }"
    >
      <div class="modal" @click.stop>
        <span class="modal-title">Usunąć klienta?</span>
        <div class="form-buttons">
          <button @click.prevent="isDeleteModalClosed = !isDeleteModalClosed" class="cancel-button">Anuluj</button>
          <button @click.prevent="isDeleteModalClosed = !isDeleteModalClosed" class="submit-button">Usuń</button>
        </div>
      </div>
    </div>
  </div>
</template>

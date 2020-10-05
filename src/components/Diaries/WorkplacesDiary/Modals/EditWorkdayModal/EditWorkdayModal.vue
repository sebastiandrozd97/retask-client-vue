<script lang="ts" src="./EditWorkdayModal.ts"></script>
<style lang="scss" src="./EditWorkdayModal.scss" scoped></style>

<template>
  <div class="edit-workday-modal-container">
    <button class="modalOpenButton" @click="isEditModalClosed = !isEditModalClosed">
      <fa-icon class="fa-2x" :icon="['far', 'edit']" />
    </button>
    <div class="modal-background edit-modal-background" :class="{ 'closed-modal': isEditModalClosed }">
      <div class="modal">
        <span class="modal-title">Edytuj dane dnia pracy</span>
        <form class="modal-form">
          <div class="form-element row-display">
            <label class="modal-label" for="date">Data</label>
            <input class="modal-input" v-model="work.date" type="date" name="date" required />
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="working-hours-from">Praca od</label>
            <select class="modal-select" v-model="work.workingFrom" name="working-hours-from">
              <option v-for="(time, index) in times" :key="index" :value="time">{{ time }}</option>
            </select>
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="working-hours-to">Praca do</label>
            <select class="modal-select" v-model="work.workingTo" name="working-hours-to">
              <option v-for="(time, index) in times" :key="index" :value="time">{{ time }}</option>
            </select>
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="worktime">Liczba godzin</label>
            <input
              class="modal-input"
              v-model="work.worktime"
              type="text"
              name="worktime"
              placeholder="Wpisz liczbę godzin pracownika"
              required
            />
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="employee">Pracownik</label>
            <select class="modal-select" v-model="work.employee" name="employee" required>
              <option
                v-for="(employee, index) in employees"
                :key="index"
                :value="employee.firstName + ' ' + employee.lastName"
              >
                {{ employee.firstName }} {{ employee.lastName }}
              </option>
            </select>
          </div>
          <div class="form-element">
            <label class="modal-label" for="work-done">Wykonana praca</label>
            <textarea
              class="modal-textarea"
              v-model="work.workDone"
              name="work-done"
              placeholder="Wpisz wykonaną pracę"
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            >
            </textarea>
          </div>
          <div class="form-element">
            <label class="modal-label" for="additional-info">Inne uwagi</label>
            <textarea
              class="modal-textarea"
              v-model="work.additionalInfo"
              name="additional-info"
              placeholder="Wpisz dodatkowe informacje"
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            >
            </textarea>
          </div>
          <div class="form-buttons">
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" class="cancel-button">Anuluj</button>
            <button @click.prevent="isEditModalClosed = !isEditModalClosed" @click="editWork()" class="submit-button">
              Zatwierdź
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

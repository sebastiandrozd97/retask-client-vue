<script lang="ts" src="./NewWorkdayModal.ts"></script>
<style lang="scss" src="./NewWorkdayModal.scss" scoped></style>

<template>
  <div class="new-workday-modal-container">
    <button class="add-item-button" @click="changeModalState()">Dodaj</button>
    <div class="modal-background new-modal-background" :class="{ 'closed-modal': isModalClosed }">
      <div class="modal">
        <span class="modal-title">Edycja dnia pracy</span>
        <form class="modal-form">
          <div class="form-element row-display">
            <label class="modal-label" for="date">Data</label>
            <input
              class="modal-input"
              v-model="newWork.date"
              type="date"
              name="date"
              placeholder="Wpisz imię pracownika"
              required
            />
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="working-hours-from">Praca od</label>
            <select
              class="modal-select"
              v-model="newWork.workingFrom"
              name="working-hours-from"
              placeholder="Wpisz nazwisko pracownika"
            >
              <option value="">Wybierz godzinę</option>
              <option v-for="(time, index) in getTimes()" :key="index" :value="time">{{ time }}</option>
            </select>
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="working-hours-to">Praca do</label>
            <select class="modal-select" v-model="newWork.workingTo" name="working-hours-to">
              <option value="">Wybierz godzinę</option>
              <option v-for="(time, index) in getTimes()" :key="index" :value="time">{{ time }}</option>
            </select>
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="worktime">Liczba godzin</label>
            <input
              class="modal-input"
              v-model="newWork.worktime"
              type="text"
              name="worktime"
              placeholder="Wpisz liczbę godzin pracownika"
              required
            />
          </div>
          <div class="form-element row-display">
            <label class="modal-label" for="workplace">Budowa</label>
            <select class="modal-select" v-model="newWork.workplace" name="workplace" required>
              <option value="">Wybierz budowę</option>
              <option v-for="(workplace, index) in workplaces" :key="index" :value="workplace">{{ workplace }}</option>
            </select>
          </div>
          <div class="form-element">
            <label class="modal-label" for="work-done">Wykonana praca</label>
            <textarea
              class="modal-textarea"
              v-model="newWork.workDone"
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
              v-model="newWork.additionalInfo"
              name="additional-info"
              placeholder="Wpisz dodatkowe informacje"
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            >
            </textarea>
          </div>
          <div class="form-buttons">
            <button @click.prevent="changeModalState()" class="cancel-button">Anuluj</button>
            <button @click.prevent="changeModalState()" @click="addWork()" class="submit-button">
              Zatwierdź
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

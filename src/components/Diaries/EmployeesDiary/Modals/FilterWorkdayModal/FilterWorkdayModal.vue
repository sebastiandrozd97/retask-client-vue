<script lang="ts" src="./FilterWorkdayModal.ts"></script>
<style lang="scss" src="./FilterWorkdayModal.scss" scoped></style>

<template>
  <div class="new-workday-modal-container">
    <button class="add-item-button" @click="changeModalState()">Filtruj</button>
    <div class="modal-background filter-modal-background" :class="{ 'closed-modal': isFilterModalClosed }">
      <div class="modal">
        <span class="modal-title">Wyszukiwanie</span>
        <form class="modal-form">
          <div class="form-element">
            <label class="modal-label" for="year">Wybierz rok</label>
            <select class="modal-select" name="year" ref="yearSelect" required>
              <option value="">Wybierz budowę</option>
              <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}</option>
            </select>
          </div>
          <div class="form-element">
            <label class="modal-label" for="month">Wybierz miesiąc</label>
            <select class="modal-select" name="month" ref="monthSelect" required>
              <option value="">Wybierz miesiąc</option>
              <option v-for="(month, index) in months" :key="index" :value="month.number">{{ month.name }}</option>
            </select>
          </div>
          <div class="form-element">
            <label class="modal-label" for="workplace">Wybierz budowę</label>
            <select class="modal-select" name="workplace" ref="workplaceSelect" required>
              <option value="">Wybierz budowę</option>
              <option v-for="(workplace, index) in workplaces" :key="index" :value="workplace.name">{{
                workplace.name
              }}</option>
            </select>
          </div>
          <div class="form-buttons">
            <button @click.prevent="changeModalState()" class="cancel-button">Anuluj</button>
            <button @click.prevent="changeModalState()" @click="filterWorks()" class="submit-button">
              Zatwierdź
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

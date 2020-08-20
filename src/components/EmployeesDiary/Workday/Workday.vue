<script lang="ts" src="./Workday.ts"></script>
<style lang="scss" src="./Workday.scss" scoped></style>

<template>
  <div class="employee-container">
    <div class="date-section">
      <span>
        Data:
      </span>
      <span>
        {{ workingDay[0].date }}
      </span>
    </div>
    <div v-for="(workday, index) in workingDay" :key="index" class="workday-element">
      <div class="employee-details">
        <div class="details-section">
          <span>
            Czas pracy:
          </span>
          <span>
            {{ workday.workingHours }}
          </span>
        </div>
        <div class="details-section">
          <span>
            Liczba godzin:
          </span>
          <span> {{ workday.worktime }} h </span>
        </div>
        <div class="details-section">
          <span>
            Budowa:
          </span>
          <span>{{ workday.workplace }}</span>
        </div>
        <div class="details-section">
          <span>
            Wykonana praca:
          </span>
          <span>
            {{ workday.workDone }}
          </span>
        </div>
      </div>
      <div class="icons" :class="[workday.additionalInfo ? 'three-elements' : 'two-elements']">
        <button v-if="workday.additionalInfo" class="additional-info">
          <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'exclamation-triangle']" />
        </button>
        <EditWorkdayModal :workday="workday" />
        <DeleteWorkdayModal />
      </div>
    </div>
  </div>
</template>

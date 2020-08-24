<script lang="ts" src="./Workday.ts"></script>
<style lang="scss" src="./Workday.scss" scoped></style>

<template>
  <div class="list-element-container">
    <div v-for="(work, index) in workday" :key="index" class="workday-element">
      <div class="item-details-wrap">
        <div class="details-section date">
          <span>
            Data:
          </span>
          <span> {{ date }} </span>
        </div>
        <div class="details-section">
          <span>
            Czas pracy:
          </span>
          <span> {{ work.workingFrom }} - {{ work.workingTo }} </span>
        </div>
        <div class="details-section">
          <span>
            Liczba godzin:
          </span>
          <span> {{ work.worktime }} h </span>
        </div>
        <div class="details-section">
          <span>
            Budowa:
          </span>
          <span>{{ work.workplace }}</span>
        </div>
        <div class="details-section">
          <span>
            Wykonana praca:
          </span>
          <span>
            {{ work.workDone }}
          </span>
        </div>
      </div>
      <div class="icons" :class="[work.additionalInfo ? 'icons-three-elements' : 'icons-two-elements']">
        <button v-if="work.additionalInfo" :tooltip-data="work.additionalInfo" class="additional-info">
          <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'exclamation-triangle']" />
        </button>
        <div v-if="!work.additionalInfo" class="additional-info"></div>
        <EditWorkdayModal :work="work" />
        <DeleteWorkdayModal :workId="work.id" />
      </div>
    </div>
  </div>
</template>

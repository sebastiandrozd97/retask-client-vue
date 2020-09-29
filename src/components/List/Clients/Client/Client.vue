<script lang="ts" src="./Client.ts"></script>
<style lang="scss" src="./Client.scss" scoped></style>

<template>
  <div class="list-element-container">
    <div class="item-details-wrap">
      <div class="details-section">
        <span>
          Imię:
        </span>
        <span>
          {{ client.firstName }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Nazwisko:
        </span>
        <span>
          {{ client.lastName }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Numer telefonu:
        </span>
        <span>
          {{ client.telephoneNumber }}
        </span>
      </div>
      <div class="details-section">
        <span>
          Liczba budów:
        </span>
        <span>2</span>
      </div>
      <div class="details-section">
        <span>
          Liczba godzin:
        </span>
        <span> 120 h </span>
      </div>
    </div>
    <div class="icons">
      <EditClientModal :client="client" />
      <DeleteClientModal />
    </div>
  </div>
</template>

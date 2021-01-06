<script lang="ts" src="./Workplace.ts"></script>
<style lang="scss" src="./Workplace.scss" scoped></style>

<template>
  <div class="list-element-container">
    <router-link class="employee-details" :to="{ name: 'WorkplacesDiary', params: { id: workplace.id } }">
      <div class="item-details-wrap">
        <div class="details-section name-section">
          <span>
            Nazwa:
          </span>
          <span>
            {{ workplace.name }}
          </span>
        </div>
        <div class="details-section address-section">
          <span>
            Adres:
          </span>
          <span> {{ workplace.city }}, {{ workplace.street }} </span>
        </div>
        <div class="details-section client-section">
          <span>
            Klient:
          </span>
          <span>{{ `${workplace.clientFirstName} ${workplace.clientLastName}` }}</span>
        </div>
        <div class="details-section">
          <span>
            Status budowy:
          </span>
          <span class="open" v-if="workplace.isOpen">Otwarta</span>
          <span class="not-open" v-else>Zamknięta</span>
        </div>
        <div class="details-section">
          <span>
            Liczba godzin:
          </span>
          <span>
            {{ workplace.worktime }}
          </span>
        </div>
      </div>
    </router-link>
    <div class="icons">
      <router-link class="go-to-diary-button" :to="{ name: 'WorkplacesDiary', params: { id: workplace.id } }"
        ><button class="diary-button">
          <fa-icon class="employee-icon far fa-2x" :icon="['fas', 'clipboard-list']" /></button
      ></router-link>
      <EditWorkplaceModal :workplace="workplace" />
      <DeleteWorkplaceModal />
    </div>
  </div>
</template>

<script lang="ts" src="./Workplace.ts"></script>
<style lang="scss" src="./Workplace.scss" scoped></style>

<template>
  <div class="list-element-container">
    <router-link class="employee-details" :to="{ name: 'Workplaces', params: { id: workplace.id } }">
      <div class="item-details-wrap">
        <div class="details-section">
          <span>
            Nazwa:
          </span>
          <span>
            {{ workplace.name }}
          </span>
        </div>

        <div class="details-section">
          <span>
            Adres:
          </span>
          <span>
            {{ workplace.address.city }}, <br />
            {{ workplace.address.street }}
          </span>
        </div>
        <div class="details-section">
          <span>
            Klient:
          </span>
          <span>{{ workplace.client }}</span>
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
      <EditWorkplaceModal :workplace="workplace" />
      <DeleteWorkplaceModal />
    </div>
  </div>
</template>

<template>
  <div class="widget-users">
    <UserLoading v-if="loading" />

    <template v-else-if="users.length">
      <UserContainer>
        <UserCard v-for="user in users" :key="user.id" v-bind="user" />
      </UserContainer>
      <QBtn
        class="widget-users__empty-users-btn"
        color="primary"
        label="Очистить список пользователей"
        @click="emptyUserList"
      />
    </template>

    <template v-else>
      <UserEmpty />
      <QBtn
        class="widget-users__invalid-api-btn"
        color="primary"
        label="Изменить апи на нерабочий"
        @click="invalidApiUrl"
      />
      <QBtn
        class="widget-users__load-users-btn"
        color="primary"
        label="Загрузить пользователей"
        @click="getUsers"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from 'stores/user'
import { storeToRefs } from 'pinia'
import UserContainer from 'components/user/UserContainer.vue'
import UserCard from 'components/user/UserCard.vue'
import UserEmpty from 'components/user/UserEmpty.vue'
import UserLoading from 'components/user/UserLoading.vue'

const userStore = useUserStore()
const { users, loading } = storeToRefs(userStore)
const { getUsers, emptyUserList, invalidApiUrl } = userStore

onMounted(async () => {
  await getUsers()
})
</script>

<style lang="scss">
.widget-users {
  display: flex;
  flex-direction: column;

  &__empty-users-btn {
    align-self: flex-end;
    margin-top: 16px;
  }

  &__load-users-btn {
    align-self: flex-end;
    margin-top: 16px;
  }

  &__invalid-api-btn {
    align-self: flex-end;
    margin-top: 16px;
  }
}
</style>

<template>
  <div class="user-card">
    <div class="user-card__avatar">
      <QIcon class="user-card__avatar-icon" name="account_circle" />
    </div>
    <div class="user-card__content">
      <div class="user-card__name">{{ name }}</div>
      <div class="user-card__email">{{ email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from 'src/interfaces/api/User'

defineProps<User>()
</script>

<style lang="scss">
.user-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;

  &__avatar {
    flex-shrink: 0;
  }

  &__avatar-icon {
    color: #1570ef;
    font-size: 48px;
  }

  &__content {
    margin-left: 8px;
  }

  &__name {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #101828;
  }

  &__email {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #7a7a7a;
  }
}
</style>

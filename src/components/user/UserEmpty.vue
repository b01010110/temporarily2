<template>
  <div class="user-empty">
    <QIcon class="user-empty__icon" name="app:persona" />
    <div class="user-empty__text">Нет пользователей</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.user-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;

  &__icon {
    width: 96px;
    height: 96px;
    color: #91afeb;
  }

  &__text {
    margin-top: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #101828;
  }
}
</style>

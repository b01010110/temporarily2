<template>
  <div class="user-loading">
    <QSpinnerHourglass size="64px" color="primary" />
    <div class="user-loading__text">Загрузка пользователей...</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.user-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;

  &__text {
    margin-top: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #101828;
  }
}
</style>

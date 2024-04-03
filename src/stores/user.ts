import { defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'boot/axios'
import type { User } from 'src/interfaces/api/User'

export const useUserStore = defineStore('user', () => {
  const $q = useQuasar()

  const url = ref('/users')
  const users = ref<User[]>([])
  const loading = ref(false)

  async function getUsers(): Promise<void> {
    try {
      loading.value = true
      const response = await api.get<User[]>(url.value)

      // искусственная задержка
      return new Promise((resolve) => {
        setTimeout(() => {
          users.value = response.data
          loading.value = false
          resolve()
        }, 2000)
      })
    } catch {
      loading.value = false
      $q.notify({
        type: 'negative',
        message: 'Ошибка при загрузке пользователей.',
      })
    }
  }

  function emptyUserList() {
    users.value = []
  }

  function invalidApiUrl() {
    url.value = '/qwer'

    $q.notify({
      type: 'positive',
      message: 'Апи успешно изменен!',
    })
  }

  return { users, loading, getUsers, emptyUserList, invalidApiUrl }
})

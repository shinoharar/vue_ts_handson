<template>
  <router-view/>
</template>

<script>
import { defineComponent, provide } from 'vue'
import TodoStore, { todoKey } from '@/store/todo'

export default defineComponent({
  name: 'App',
  setup () {
    provide(todoKey, TodoStore)
  }
})
</script>

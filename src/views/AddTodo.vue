<template>
  <h2>TODOを作成する</h2>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="data.title" />
    </div>
    <div>
      <label for="description">説明</label>
      <textarea id="description" v-model="data.description" />
    </div>
    <div>
      <label for="status">ステータス</label>
      <select id="status" v-model="data.status">
        <option value="waiting">waiting</option>
        <option value="working">working</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </div>
    <button @click="onSubmit">作成する</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import useAddTodo from './../composables/useAddTodo'

export default defineComponent({
  setup () {
    const { data, onSubmit } = useAddTodo()

    return {
      data,
      onSubmit
    }
  }
})
</script>

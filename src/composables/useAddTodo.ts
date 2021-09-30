import { reactive, inject } from 'vue'
import { Params } from '@/store/todo/types'
import { todoKey } from '@/store/todo'
import { useRouter } from 'vue-router'

export default function useAddTodo () {
  const todoStore = inject(todoKey)
  if (!todoStore) {
    throw new Error('todoStore is not provided')
  }

  const router = useRouter()

  const data = reactive<Params>({
    title: '',
    description: '',
    status: 'waiting'
  })

  const onSubmit = () => {
    const { title, description, status } = data
    todoStore.addTodo({
      title,
      description,
      status
    })
    router.push('/')
  }

  return {
    data,
    onSubmit
  }
}

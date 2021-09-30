import { TodoClient } from './TodoClient'
import { TodoClientInterface } from './TodoClient/types'

export const TODOS = 'todos'

export interface repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]: new TodoClient()
} as repositories

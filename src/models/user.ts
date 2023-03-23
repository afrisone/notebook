import { Notebook } from './notebook'
import { Todo } from './todo'

export interface User {
    id: string
    name: string
    todos: Todo[]
    notebooks: Notebook[]
}

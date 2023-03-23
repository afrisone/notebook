import { Note } from './note'

export interface Notebook {
    id: string
    contents: (Notebook | Note)[]
}

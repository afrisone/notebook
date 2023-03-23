export interface Note {
    id: string
    timestamp: number
    title: string
    sections: NoteSection[]
}

type NoteSectionTypes = 'paragraph' | 'code'

export interface NoteSection {
    header?: string
    content: string
    type: NoteSectionTypes
}

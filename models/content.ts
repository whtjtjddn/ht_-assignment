export class Content {
    id: number
    title: string
    description: string
    imageUrl: string

    constructor(requiredContentInfo: { id: number; title: string; description: string; imageUrl: string }) {
        const { id, title, description, imageUrl } = requiredContentInfo
        this.id = id
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
    }
}

export class Content {
    id: string
    title: string
    description: string
    imageUrl: string

    constructor(id: string, title: string, description: string, imageUrl: string) {
        this.id = id
        this.title = title
        this.description = description
        this.imageUrl = imageUrl
    }
}

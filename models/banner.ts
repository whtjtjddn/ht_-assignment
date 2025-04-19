export class Banner {
    id: number
    imageUrl: string
    linkUrl: string

    constructor(requiredBannerInfo: { id: number; imageUrl: string; linkUrl: string }) {
        const { id, imageUrl, linkUrl } = requiredBannerInfo
        this.id = id
        this.imageUrl = imageUrl
        this.linkUrl = linkUrl
    }
}

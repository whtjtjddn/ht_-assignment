export class Banner {
    id: number
    title: string
    startDate: string
    endDate: string
    imageUrl: string
    linkUrl: string
    isOpen: boolean

    constructor(requiredBannerInfo: { id: number; title: string; startDate: string; endDate: string; imageUrl: string; linkUrl: string; isOpen?: boolean }) {
        const { id, title, startDate, endDate, imageUrl, linkUrl, isOpen } = requiredBannerInfo
        this.id = id
        this.title = title
        this.startDate = startDate
        this.endDate = endDate
        this.imageUrl = imageUrl
        this.linkUrl = linkUrl
        this.isOpen = isOpen ?? true
    }
}

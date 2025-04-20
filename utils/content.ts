import { Content } from "../models/content"
import { Banner } from "../models/banner"

export default class ContentUtil {
    static getContentList(page: number, size: number) {
        const contentList: Content[] = []
        for (let i = 1; i <= size; i++) {
            contentList.push(
                new Content({
                    id: (page - 1) * size + i,
                    title: `Content ${(page - 1) * size + i}`,
                    description: `Description for content ${(page - 1) * size + i}`,
                    imageUrl: "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"
                })
            )
        }
        return contentList
    }

    static getBannerList() {
        return [
            new Banner({
                id: 1,
                title: "Banner 1",
                startDate: "2023-01-01",
                endDate: "2023-12-31",
                imageUrl: "https://www.milkad.co.kr/boardForder/marketing4/CK_ti375a38706082843.jpg",
                linkUrl: "https://google.com"
            }),
            new Banner({
                id: 2,
                title: "Banner 2",
                startDate: "2023-01-01",
                endDate: "2023-12-31",
                imageUrl:
                    "https://inmarketing.kr/wp-content/uploads/2020/07/%E1%84%80%E1%85%AE%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%83%E1%85%B5%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5-%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9%E1%84%85%E1%85%A1%E1%86%AB__%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF-1024x536.png",
                linkUrl: "https://google.com"
            }),
            new Banner({
                id: 3,
                title: "Banner 3",
                startDate: "2023-01-01",
                endDate: "2023-12-31",
                imageUrl:
                    "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa75314c9-b752-4eeb-b731-18abfeb53b5c%2F618f8c09-2c22-4f56-9009-81a95c7d4a3a%2F%25EC%258A%25A4%25ED%2594%258C%25EB%259E%2598%25EC%258B%259C7.png&blockId=1435bdc6-2df3-803a-bde5-f50cd04077b4",
                linkUrl: "https://google.com"
            })
        ]
    }
}

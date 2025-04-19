import { Content } from "../models/content"
import { Banner } from "../models/banner"

export default class ContentUtil {
    static getContentList() {
        return [
            new Content("1", "Content 1", "Description of Content 1", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("2", "Content 2", "Description of Content 2", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("3", "Content 3", "Description of Content 3", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("4", "Content 4", "Description of Content 4", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("5", "Content 5", "Description of Content 5", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("6", "Content 6", "Description of Content 6", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"),
            new Content("7", "Content 7", "Description of Content 7", "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625")
        ]
    }

    static getBannerList() {
        return [
            new Banner({
                id: 1,
                imageUrl: "https://www.milkad.co.kr/boardForder/marketing4/CK_ti375a38706082843.jpg",
                linkUrl: "https://google.com"
            }),
            new Banner({
                id: 2,
                imageUrl: "https://www.milkad.co.kr/boardForder/marketing4/CK_ti375a38706082843.jpg",
                linkUrl: "https://google.com"
            }),
            new Banner({
                id: 3,
                imageUrl: "https://www.milkad.co.kr/boardForder/marketing4/CK_ti375a38706082843.jpg",
                linkUrl: "https://google.com"
            })
        ]
    }
}

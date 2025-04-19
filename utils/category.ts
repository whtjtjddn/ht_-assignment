import { Category } from "../models/category"

export default class CategoryUtil {
    static getCategories() {
        return [
            new Category("CHART", "차트"),
            new Category("WHOOK", "Whook"),
            new Category("EVENT", "이벤트"),
            new Category("NEWS", "뉴스"),
            new Category("STORE", "스토어"),
            new Category("CHARGE", "충전소")
        ]
    }
}

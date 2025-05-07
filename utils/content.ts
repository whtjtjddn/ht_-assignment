// src/utils/SubwayUtil.ts

import { SubwayStation } from "../models/content"

const subwayStationData = [
    {
        name: "연천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "전곡",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "청산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "소요산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "동두천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "보산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "동두천중앙",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "지행",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "덕정",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "덕계",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "양주",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "녹양",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "가능",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "의정부",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "회룡",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "망월사",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "도봉산",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "도봉",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "방학",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "창동",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "녹천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "월계",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "광운대",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "석계",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "신이문",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "외대앞",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "회기",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "청량리",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "제기동",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "신설동",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "동묘앞",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "동대문",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "종로5가",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "종로3가",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "종각",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "시청",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "서울역",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "남영",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "용산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "노량진",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "대방",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "신길",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "영등포",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "신도림",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "구로",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "가산디지털단지",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "독산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "금천구청",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "석수",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "관악",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "안양",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "명학",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "금정",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "군포",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "당정",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "의왕",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "성균관대",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "화서",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "수원",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "세류",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "병점",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "세마",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "오산대",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "오산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "진위",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "송탄",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "서정리",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "평택지제",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "평택",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "성환",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "직산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "두정",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "천안",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "봉명",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "쌍용",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "아산",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "탕정",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "배방",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "온양온천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "신창",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "구일",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "개봉",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "오류동",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "온수",
        line: "1호선",
        region: "서울",
        transfer: true,
        color: "#0052A4"
    },
    {
        name: "역곡",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "소사",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "부천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "중동",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "송내",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "부개",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "부평",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "백운",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "동암",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "간석",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "주안",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "도화",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "제물포",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "도원",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "동인천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "인천",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "서동탄",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "광명",
        line: "1호선",
        region: "서울",
        transfer: false,
        color: "#0052A4"
    },
    {
        name: "시청",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "을지로입구",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "을지로3가",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "을지로4가",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "동대문역사문화공원",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "신당",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "상왕십리",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "왕십리",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "한양대",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "뚝섬",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "성수",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "건대입구",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "구의",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "강변",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "잠실나루",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "잠실",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "잠실새내",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "종합운동장",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "삼성",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "선릉",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "역삼",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "강남",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "교대",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "서초",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "방배",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "사당",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "낙성대",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "서울대입구",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "봉천",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "신림",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "신대방",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "구로디지털단지",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "대림",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "신도림",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "문래",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "영등포구청",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "당산",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "합정",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "홍대입구",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "신촌",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "이대",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "아현",
        line: "2호선",
        region: "서울",
        transfer: false,
        color: "#00A84D"
    },
    {
        name: "충정로",
        line: "2호선",
        region: "서울",
        transfer: true,
        color: "#00A84D"
    },
    {
        name: "대화",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "주엽",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "정발산",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "마두",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "백석",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "대곡",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "화정",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "원당",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "원흥",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "삼송",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "지축",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "구파발",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "연신내",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "불광",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "녹번",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "홍제",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "무악재",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "독립문",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "경복궁",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "안국",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "종로3가",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "을지로3가",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "충무로",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "동대입구",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "약수",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "금호",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "옥수",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "압구정",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "신사",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "잠원",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "고속터미널",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "교대",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "남부터미널",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "양재",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "매봉",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "도곡",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "대치",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "학여울",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "대청",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "일원",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "수서",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "가락시장",
        line: "3호선",
        region: "서울",
        transfer: true,
        color: "#EF7C1C"
    },
    {
        name: "경찰병원",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "오금",
        line: "3호선",
        region: "서울",
        transfer: false,
        color: "#EF7C1C"
    },
    {
        name: "진접",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "오남",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "별내별가람",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "불암산",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "상계",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "노원",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "창동",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "쌍문",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "수유",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "미아",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "미아사거리",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "길음",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "성신여대입구",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "한성대입구",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "혜화",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "동대문",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "동대문역사문화공원",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "충무로",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "명동",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "회현",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "서울역",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "숙대입구",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "삼각지",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "신용산",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "이촌",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "동작",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "총신대입구",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "사당",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "남태령",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "선바위",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "경마공원",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "대공원",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "과천",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "정부과천청사",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "인덕원",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "평촌",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "범계",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "금정",
        line: "4호선",
        region: "서울",
        transfer: true,
        color: "#00A4E3"
    },
    {
        name: "산본",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "수리산",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "대야미",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "반월",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "상록수",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "한대앞",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "중앙",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "고잔",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "초지",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "안산",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "신길온천",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "정왕",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "오이도",
        line: "4호선",
        region: "서울",
        transfer: false,
        color: "#00A4E3"
    },
    {
        name: "김포공항",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "송정",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "마곡",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "발산",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "우장산",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "화곡",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "까치산",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "신정",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "목동",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "오목교",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "양평",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "영등포구청",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "영등포시장",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "신길",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "샛강",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "여의도",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "여의나루",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "마포",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "공덕",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "애오개",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "충정로",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "서대문",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "광화문",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "종로3가",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "을지로4가",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "동대문역사문화공원",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "청구",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "신금호",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "행당",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "왕십리",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "마장",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "답십리",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "장한평",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "군자",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "아차산",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "광나루",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "천호",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "강동",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "둔촌동",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "길동",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "올림픽공원",
        line: "5호선",
        region: "서울",
        transfer: true,
        color: "#996CAC"
    },
    {
        name: "굽은다리",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "방이",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "명일",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "고덕",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "상일동",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "개롱",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "거여",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "마천",
        line: "5호선",
        region: "서울",
        transfer: false,
        color: "#996CAC"
    },
    {
        name: "응암",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "역촌",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "불광",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "독바위",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "연신내",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "구산",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "새절",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "증산",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "디지털미디어시티",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "월드컵경기장",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "마포구청",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "망원",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "합정",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "상수",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "광흥창",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "대흥",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "공덕",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "효창공원앞",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "삼각지",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "녹사평",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "이태원",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "한강진",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "버티고개",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "약수",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "청구",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "신당",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "동묘앞",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "창신",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "보문",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "안암",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "고려대",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "월곡",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "상월곡",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "돌곶이",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "석계",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "태릉입구",
        line: "6호선",
        region: "서울",
        transfer: true,
        color: "#CD7C2F"
    },
    {
        name: "화랑대",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "봉화산",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "신내",
        line: "6호선",
        region: "서울",
        transfer: false,
        color: "#CD7C2F"
    },
    {
        name: "장암",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "도봉산",
        line: "7호선",
        region: "서울",
        transfer: true,
        color: "#747F00"
    },
    {
        name: "수락산",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "마들",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "노원",
        line: "7호선",
        region: "서울",
        transfer: true,
        color: "#747F00"
    },
    {
        name: "중계",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "하계",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "공릉",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "태릉입구",
        line: "7호선",
        region: "서울",
        transfer: true,
        color: "#747F00"
    },
    {
        name: "먹골",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "중화",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "상봉",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "철산",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "광명사거리",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "천왕",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "온수",
        line: "7호선",
        region: "서울",
        transfer: true,
        color: "#747F00"
    },
    {
        name: "까치울",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "부천종합운동장",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "춘의",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "신중동",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "부천시청",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "상동",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "삼산체육관",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "굴포천",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "부평구청",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "산곡",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "석남",
        line: "7호선",
        region: "서울",
        transfer: false,
        color: "#747F00"
    },
    {
        name: "암사",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "천호",
        line: "8호선",
        region: "서울",
        transfer: true,
        color: "#E6186C"
    },
    {
        name: "강동구청",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "몽촌토성",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "잠실",
        line: "8호선",
        region: "서울",
        transfer: true,
        color: "#E6186C"
    },
    {
        name: "석촌",
        line: "8호선",
        region: "서울",
        transfer: true,
        color: "#E6186C"
    },
    {
        name: "송파",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "가락시장",
        line: "8호선",
        region: "서울",
        transfer: true,
        color: "#E6186C"
    },
    {
        name: "문정",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "장지",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "복정",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "남위례",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "산성",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "남한산성입구",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "단대오거리",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "신흥",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "수진",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "모란",
        line: "8호선",
        region: "서울",
        transfer: false,
        color: "#E6186C"
    },
    {
        name: "개화",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "김포공항",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "공항시장",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "신방화",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "마곡나루",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "양천향교",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "가양",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "증미",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "등촌",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "염창",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "신목동",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "선유도",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "당산",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "국회의사당",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "여의도",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "샛강",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "노량진",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "노들",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "흑석",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "동작",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "구반포",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "신반포",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "고속터미널",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "사평",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "신논현",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "언주",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "선정릉",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "삼성중앙",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "봉은사",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "종합운동장",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "삼전",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "석촌고분",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "석촌",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "송파나루",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "한성백제",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "올림픽공원",
        line: "9호선",
        region: "서울",
        transfer: true,
        color: "#BDB092"
    },
    {
        name: "둔촌오륜",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "중앙보훈병원",
        line: "9호선",
        region: "서울",
        transfer: false,
        color: "#BDB092"
    },
    {
        name: "다대포해수욕장",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "다대포항",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "낫개",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "신장림",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "장림",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "동매",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "신평",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "하단",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "당리",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "사하",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "괴정",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "대티",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "서대신",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "동대신",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "토성",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "자갈치",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "남포",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "중앙",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "부산역",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "초량",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "부산진",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "좌천",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "범일",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "범내골",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "서면",
        line: "1호선",
        region: "부산",
        transfer: true,
        color: "#f06a00"
    },
    {
        name: "부전",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "양정",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "시청",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "연산",
        line: "1호선",
        region: "부산",
        transfer: true,
        color: "#f06a00"
    },
    {
        name: "교대",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "동래",
        line: "1호선",
        region: "부산",
        transfer: true,
        color: "#f06a00"
    },
    {
        name: "명륜",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "온천장",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "부산대",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "장전",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "구서",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "두실",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "남산",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "범어사",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "노포",
        line: "1호선",
        region: "부산",
        transfer: false,
        color: "#f06a00"
    },
    {
        name: "장산",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "중동",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "해운대",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "동백",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "벡스코",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "센텀시티",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "민락",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "수영",
        line: "2호선",
        region: "부산",
        transfer: true,
        color: "#81bf48"
    },
    {
        name: "광안",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "금련산",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "남천",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "경성대·부경대",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "대연",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "못골",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "지게골",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "문현",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "국제금융센터·부산은행",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "전포",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "서면",
        line: "2호선",
        region: "부산",
        transfer: true,
        color: "#81bf48"
    },
    {
        name: "부암",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "가야",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "동의대",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "개금",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "냉정",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "주례",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "감전",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "사상",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "덕포",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "모덕",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "모라",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "구남",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "구명",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "덕천",
        line: "2호선",
        region: "부산",
        transfer: true,
        color: "#81bf48"
    },
    {
        name: "수정",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "화명",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "율리",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "동원",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "금곡",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "호포",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "증산",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "부산대양산캠퍼스",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "남양산",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "양산",
        line: "2호선",
        region: "부산",
        transfer: false,
        color: "#81bf48"
    },
    {
        name: "수영",
        line: "3호선",
        region: "부산",
        transfer: true,
        color: "#bb8c00"
    },
    {
        name: "망미",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "배산",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "물만골",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "연산",
        line: "3호선",
        region: "부산",
        transfer: true,
        color: "#bb8c00"
    },
    {
        name: "거제",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "종합운동장",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "사직",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "미남",
        line: "3호선",
        region: "부산",
        transfer: true,
        color: "#bb8c00"
    },
    {
        name: "만덕",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "남산정",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "숙등",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "덕천",
        line: "3호선",
        region: "부산",
        transfer: true,
        color: "#bb8c00"
    },
    {
        name: "구포",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "강서구청",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "체육공원",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "대저",
        line: "3호선",
        region: "부산",
        transfer: false,
        color: "#bb8c00"
    },
    {
        name: "미남",
        line: "4호선",
        region: "부산",
        transfer: true,
        color: "#217dcb"
    },
    {
        name: "동래",
        line: "4호선",
        region: "부산",
        transfer: true,
        color: "#217dcb"
    },
    {
        name: "수안",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "낙민",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "충렬사",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "명장",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "서동",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "금사",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "반여농산물시장",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "석대",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "영산대",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "윗반송",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "고촌",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "안평",
        line: "4호선",
        region: "부산",
        transfer: false,
        color: "#217dcb"
    },
    {
        name: "설화명곡",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "화원",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "대곡",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "진천",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "월배",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "상인",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "월촌",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "송현",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "서부정류장",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "대명",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "안지랑",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "현충로",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "영대병원",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "교대",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "명덕",
        line: "1호선",
        region: "대구",
        transfer: true,
        color: "#D93F5C"
    },
    {
        name: "반월당",
        line: "1호선",
        region: "대구",
        transfer: true,
        color: "#D93F5C"
    },
    {
        name: "중앙로",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "대구",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "칠성시장",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "신천",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "동대구",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "동구청",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "아양교",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "동촌",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "해안",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "방촌",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "용계",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "율하",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "신기",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "반야월",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "각산",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "안심",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "대구한의대병원",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "부호",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "하양",
        line: "1호선",
        region: "대구",
        transfer: false,
        color: "#D93F5C"
    },
    {
        name: "문양",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "다사",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "대실",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "강창",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "계명대",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "성서산업단지",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "이곡",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "용산",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "죽전",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "감삼",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "두류",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "내당",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "반고개",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "청라언덕",
        line: "2호선",
        region: "대구",
        transfer: true,
        color: "#00AA80"
    },
    {
        name: "반월당",
        line: "2호선",
        region: "대구",
        transfer: true,
        color: "#00AA80"
    },
    {
        name: "경대병원",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "대구은행",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "범어",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "수성구청",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "만촌",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "담티",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "연호",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "수성알파시티",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "고산",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "신매",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "사월",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "정평",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "임당",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "영남대",
        line: "2호선",
        region: "대구",
        transfer: false,
        color: "#00AA80"
    },
    {
        name: "칠곡경대병원",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "학정",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "팔거",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "동천",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "칠곡운암",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "구암",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "태전",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "매천",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "매천시장",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "팔달",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "공단",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "만평",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "팔달시장",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "원대",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "북구청",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "달성공원",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "서문시장",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "청라언덕",
        line: "3호선",
        region: "대구",
        transfer: true,
        color: "#FFB100"
    },
    {
        name: "남산",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "명덕",
        line: "3호선",
        region: "대구",
        transfer: true,
        color: "#FFB100"
    },
    {
        name: "건들바위",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "대봉교",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "수성시장",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "수성구민운동장",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "어린이회관",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "황금",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "수성못",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "지산",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "범물",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "용지",
        line: "3호선",
        region: "대구",
        transfer: false,
        color: "#FFB100"
    },
    {
        name: "판암",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "신흥",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "대동",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "대전역",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "중앙로",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "중구청",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "서대전네거리",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "오룡",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "용문",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "탄방",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "시청",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "정부청사",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "갈마",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "월평",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "갑천",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "유성온천",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "구암",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "현충원",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "월드컵경기장",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "노은",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "지족",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "반석",
        line: "1호선",
        region: "대전",
        transfer: false,
        color: "#007448"
    },
    {
        name: "녹동",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "소태",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "학동·증심사입구",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "남광주",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "문화전당",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "금남로4가",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "금남로5가",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "양동시장",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "돌고개",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "농성",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "화정",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "쌍촌",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "운천",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "상무",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "김대중컨벤션센터",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "공항",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "송정공원",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "광주송정역",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "도산",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    },
    {
        name: "평동",
        line: "1호선",
        region: "광주",
        transfer: false,
        color: "#009088"
    }
]

export default class SubwayUtil {
    /**
     * 모든 지하철역 JSON 데이터를 SubwayStation 모델로 인스턴스화하여 반환합니다.
     */
    static getSubwayList(): SubwayStation[] {
        // rawStations의 타입이 any[]일 경우, 아래와 같이 캐스팅해 주세요.
        const stationsInfo = subwayStationData as Array<{
            name: string
            line: string
            region: string
            transfer: boolean
            color: string
        }>

        return stationsInfo.map((info) => new SubwayStation(info))
    }
}

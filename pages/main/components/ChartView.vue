<template>
    <div class="chart-view">
        <CarouselSlider class="mt-5 mb-4" :banners="bannerList" />
        <div class="content-list">
            <div class="text-2xl font-bold mb-2">Content List</div>
            <ContentTile v-for="(content, index) in contentList" :key="index" :content-info="content" />
        </div>
    </div>
</template>

<script lang="ts">
import { Content } from "../../../models/content"
import ContentUtil from "../../../utils/content"
import ContentTile from "../../../components/main/ContentTile.vue"
import { Banner } from "../../../models/banner"
import CarouselSlider from "../../../components/main/CarouselSlider.vue"

export default {
    name: "ChartView",
    components: { CarouselSlider, ContentTile },
    data() {
        return {
            contentList: [] as Content[],
            bannerList: [] as Banner[]
        }
    },
    mounted() {
        this.initialContentList()
    },
    methods: {
        initialContentList() {
            this.contentList = ContentUtil.getContentList()
            this.bannerList = ContentUtil.getBannerList()
        }
    }
}
</script>

<style scoped>
.chart-view {
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner-list {
        display: flex;
        flex-direction: row;
        width: -webkit-fill-available;
        gap: 20px;
        justify-content: center;
    }

    .content-list {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
        background-color: #f7f8f9;
        gap: 12px;
        justify-content: center;
        padding: 20px 20px 80px;
    }
}
</style>

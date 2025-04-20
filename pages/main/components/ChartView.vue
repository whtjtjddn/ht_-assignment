<template>
    <div class="chart-view">
        <CarouselSlider class="mt-5 mb-4" :banners="bannerList" />
        <div class="content-list">
            <template v-if="contentList.length === 0">
                <div class="text-center text-m">No Content Available</div>
            </template>
            <div v-else class="text-start">
                <div class="text-xl font-bold mb-4">Content List</div>
                <ContentTile v-for="(content, index) in contentList" :key="index" :content-info="content" />
            </div>
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
            bannerList: [] as Banner[],
            isLoading: false,
            currentPage: 1,
            totalPage: 10
        }
    },
    mounted() {
        this.initialContentList()
        this.$nextTick(() => {
            window.addEventListener("scroll", this.handleScroll)
        })
    },
    methods: {
        initialContentList() {
            this.contentList = ContentUtil.getContentList(1, 20)
            this.bannerList = ContentUtil.getBannerList()
        },
        fetchNextPage() {
            const nextPageContent = ContentUtil.getContentList(this.currentPage, 20)
            this.contentList.push(...nextPageContent)
        },
        handleScroll() {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            if (scrollTop + windowHeight >= documentHeight - 100 && !this.isLoading && this.currentPage < this.totalPage) {
                this.isLoading = true
                this.currentPage++
                this.fetchNextPage()
                this.isLoading = false
            }
        }
    }
}
</script>

<style scoped>
.chart-view {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-list {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
        background-color: #f7f8f9;
        gap: 12px;
        justify-content: center;
        min-height: 55vh;
        padding: 20px 20px 80px;
    }
}
</style>

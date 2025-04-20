<template>
    <CategoryScrollList :on-tap-category="onTapCategory" :category-list="categoryList" :selected-category="selectedCategory" />
    <div class="category-swipe-area" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <KeepAlive v-if="selectedCategory">
            <component :is="categoryViews[selectedCategory.id]" />
        </KeepAlive>
    </div>
    <UpperFooter v-if="showFooter" />
</template>

<script lang="ts">
import { Category } from "../../models/category"
import CategoryUtil from "../../utils/category"
import ChartView from "./components/ChartView.vue"
import WhookView from "./components/WhookView.vue"
import EventView from "./components/EventView.vue"
import StoreView from "./components/StoreView.vue"
import ChargeView from "./components/ChargeView.vue"
import NewsView from "./components/NewsView.vue"
import CategoryScrollList from "../../components/main/CategoryScrollList.vue"
import UpperFooter from "../../components/main/UpperFooter.vue"

export default {
    name: "MainContent",
    components: { UpperFooter, CategoryScrollList },
    data() {
        return {
            categoryList: [] as Category[],
            selectedCategory: null as Category,
            categoryViews: {
                CHART: ChartView,
                WHOOK: WhookView,
                EVENT: EventView,
                NEWS: NewsView,
                STORE: StoreView,
                CHARGE: ChargeView
                // add more categories here
            } as Record<string, any>,
            touchStartX: 0,
            touchEndX: 0,
            showFooter: false
        }
    },
    mounted() {
        this.initialCategoryList()
        addEventListener("scroll", this.handleFooter)
    },
    unmounted() {
        removeEventListener("scroll", this.handleFooter)
    },
    methods: {
        initialCategoryList() {
            this.categoryList = CategoryUtil.getCategories()
            // 처음 selected 는 첫번째로 고정
            this.selectedCategory = this.categoryList[0]
        },
        onTapCategory(category: Category) {
            this.selectedCategory = category
        },
        handleTouchStart(event: TouchEvent) {
            this.touchStartX = event.touches[0].clientX
        },
        handleTouchMove(event: TouchEvent) {
            this.touchEndX = event.touches[0].clientX
        },
        handleTouchEnd() {
            if (this.touchStartX - this.touchEndX > 50) {
                // left swipe
                this.moveToNextCategory()
            } else if (this.touchEndX - this.touchStartX > 50) {
                // right swipe
                this.moveToPreviousCategory()
            }
        },
        moveToNextCategory() {
            const currentIndex = this.categoryList.findIndex((category) => category.id === this.selectedCategory?.id)
            if (currentIndex < this.categoryList.length - 1) {
                this.selectedCategory = this.categoryList[currentIndex + 1]
            } else {
                this.selectedCategory = this.categoryList[0] // 마지막에서 첫 번째로 돌아가기
            }
        },
        moveToPreviousCategory() {
            const currentIndex = this.categoryList.findIndex((category) => category.id === this.selectedCategory?.id)
            if (currentIndex > 0) {
                this.selectedCategory = this.categoryList[currentIndex - 1]
            } else {
                this.selectedCategory = this.categoryList[this.categoryList.length - 1] // 첫 번째에서 마지막으로 돌아가기
            }
        },
        handleFooter() {
            this.showFooter = window.scrollY > 100
        }
    }
}
</script>

<style scoped>
.category-swipe-area {
    height: 100%;
}
</style>

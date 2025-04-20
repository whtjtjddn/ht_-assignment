<template>
    <div class="carousel-container" @touchstart.stop="onTouchStart" @touchmove.stop="onTouchMove" @touchend.stop="onTouchEnd" @onmousedown.stop="onTouchStart">
        <div class="carousel-track" :style="trackStyle" @transitionend="onTransitionEnd">
            <div
                v-for="(item, idx) in loopedBanners"
                :key="idx"
                class="carousel-slide"
                :class="{
                    unselected: idx === currentIndex - 1 || idx === currentIndex + 1
                }"
            >
                <BannerTile :banner="item" />
            </div>
        </div>

        <div class="dots">
            <div v-for="(_, index) in banners" :key="index" class="dot" :class="{ active: index === realIndex }" @click="() => changeBanner(index)"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Banner } from "../../models/banner"
import { defineComponent, PropType } from "vue"
import BannerTile from "./BannerTile.vue"

export default defineComponent({
    name: "CarouselSlider",
    components: { BannerTile },
    props: {
        banners: {
            type: Array as PropType<Banner[]>,
            required: true
        }
    },
    data() {
        return {
            // 루프 Tracking 용
            currentIndex: 1,
            isTransitioning: false,
            startX: 0,
            deltaX: 0,
            autoplayTimer: null as number | null
        }
    },
    computed: {
        // 배너 루프용
        loopedBanners(): Banner[] {
            const bannerList = this.banners as Banner[]
            return [bannerList[bannerList.length - 1], ...bannerList, bannerList[0]]
        },
        // indicator 체크용
        realIndex(): number {
            const bannerLength = this.banners.length
            let index = this.currentIndex - 1
            if (index < 0) index = bannerLength - 1
            if (index >= bannerLength) index = 0
            return index
        },
        trackStyle(): Record<string, any> {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`,
                transition: this.isTransitioning ? "transform 0.3s ease" : "none"
            }
        }
    },
    mounted() {
        this.startAutoPlay()
    },
    beforeUnmount() {
        this.stopAutoPlay()
    },
    methods: {
        startAutoPlay(): void {
            this.stopAutoPlay()
            this.autoplayTimer = window.setInterval(() => {
                this.goNext()
            }, 3000)
        },
        stopAutoPlay(): void {
            if (this.autoplayTimer !== null) {
                clearInterval(this.autoplayTimer)
                this.autoplayTimer = null
            }
        },
        resetAutoPlay(): void {
            this.stopAutoPlay()
            this.startAutoPlay()
        },
        goNext(): void {
            if (this.isTransitioning) return
            this.isTransitioning = true
            this.currentIndex++
        },
        goPrev(): void {
            if (this.isTransitioning) return
            this.isTransitioning = true
            this.currentIndex--
        },
        onTransitionEnd(): void {
            this.isTransitioning = false
            const len = this.banners.length
            if (this.currentIndex === 0) this.currentIndex = len
            if (this.currentIndex === len + 1) this.currentIndex = 1
        },
        onTouchStart(e: TouchEvent): void {
            this.startX = e.touches[0].clientX
            this.deltaX = 0
            this.isTransitioning = false
        },
        onTouchMove(e: TouchEvent): void {
            this.deltaX = e.touches[0].clientX - this.startX
        },
        onTouchEnd(): void {
            const threshold = 50
            if (this.deltaX > threshold) this.goPrev()
            else if (this.deltaX < -threshold) this.goNext()
            this.deltaX = 0
            this.resetAutoPlay()
        },
        changeBanner(index: number): void {
            if (this.isTransitioning) return
            this.isTransitioning = true
            this.currentIndex = index + 1 // +1 for loopedBanners
            this.resetAutoPlay()
        }
    }
})
</script>

<style scoped>
.carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;

    .carousel-track {
        display: flex;
    }

    .carousel-slide {
        flex: 0 0 98%;
        box-sizing: border-box;
        margin: 0 1%;

        &.unselected {
            opacity: 0.5;
        }
    }
}

.dots {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 8px;

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #cfcfcf;
        margin: 0 4px;

        &.active {
            background: #ff4757;
        }
    }
}
</style>

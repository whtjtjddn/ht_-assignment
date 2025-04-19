<template>
    <div class="banner-container" @touchstart="startTouch" @touchmove="moveTouch" @touchend="endTouch">
        <div class="banner-wrapper" :style="bannerWrapperStyle">
            <div v-for="(banner, index) in banners" :key="index" class="banner-item" :style="getBannerStyle(index)">
                <img :src="banner.imageUrl" :alt="banner.altText" class="banner-image" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

export default defineComponent({
    name: "BannerSlider",
    props: {
        banners: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            startX: 0,
            deltaX: 0,
            isSwiping: false
        }
    },
    computed: {
        // 배너 슬라이드 스타일 계산
        bannerWrapperStyle() {
            // 슬라이드가 끝난 후 빠르게 다음 배너로 전환되는 효과
            return {
                transform: `translateX(-${(this.currentIndex + 1) * 100}%)`,
                transition: this.isSwiping ? "none" : "transform 0.3s ease"
            }
        }
    },
    methods: {
        // 배너 스타일 설정 (이전/다음 배너가 조금 보이도록)
        getBannerStyle(index: number) {
            const isPrev = index === this.getPrevIndex()
            const isNext = index === this.getNextIndex()
            return {
                width: "calc(100% - 20px)", // 배너 크기 조정
                transform: isPrev ? "scale(0.9)" : isNext ? "scale(0.9)" : "scale(1)",
                opacity: isPrev || isNext ? 0.7 : 1,
                marginLeft: "10px", // 좌우 여백
                marginRight: "10px" // 좌우 여백
            }
        },

        // 이전 배너 인덱스 구하기 (순환되도록)
        getPrevIndex() {
            return (this.currentIndex - 1 + this.banners.length) % this.banners.length
        },

        // 다음 배너 인덱스 구하기 (순환되도록)
        getNextIndex() {
            return (this.currentIndex + 1) % this.banners.length
        },

        // 터치 시작 시 위치 저장
        startTouch(event: TouchEvent) {
            this.startX = event.touches[0].clientX
            this.isSwiping = true
        },

        // 터치 이동 시 배너 이동 거리 계산
        moveTouch(event: TouchEvent) {
            this.deltaX = event.touches[0].clientX - this.startX
        },

        // 터치 종료 시, 방향에 맞게 배너 전환
        endTouch() {
            if (Math.abs(this.deltaX) > 50) {
                if (this.deltaX > 0) {
                    this.currentIndex = this.getPrevIndex() // 오른쪽에서 왼쪽으로 이동
                } else {
                    this.currentIndex = this.getNextIndex() // 왼쪽에서 오른쪽으로 이동
                }
            }
            this.deltaX = 0
            this.isSwiping = false
        }
    }
})
</script>

<style scoped>
.banner-container {
    overflow: hidden;
    position: relative;
}

.banner-wrapper {
    display: flex;
    transition: transform 0.3s ease;
}

.banner-item {
    flex: 0 0 100%;
    transition: transform 0.3s ease;
    padding: 0 10px;
    display: flex;
    justify-content: center;
}

.banner-image {
    width: 100%;
    height: auto;
    display: block;
}
</style>

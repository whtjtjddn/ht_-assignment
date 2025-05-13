<template>
    <div class="min-h-screen flex bg-gray-900 relative width__fill">
        <!-- 드로어 -->
        <transition name="drawer">
            <aside v-if="isDrawerOpen" class="fixed inset-y-0 left-0 w-72 bg-white p-6 shadow-2xl space-y-8 z-50 flex flex-col">
                <h2 class="text-2xl font-bold">🛠 필터</h2>

                <!-- 지역 필터 -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">지역</h3>
                    <div class="flex flex-wrap gap-2">
                        <button
                            v-for="region in regionList"
                            :key="region"
                            :class="selectedRegions.includes(region) ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'"
                            class="px-4 py-2 rounded-full transition"
                            @click="toggleRegion(region)"
                        >
                            {{ region }}
                        </button>
                    </div>
                </div>

                <!-- 호선 필터 -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">호선</h3>
                    <div class="flex flex-wrap gap-2">
                        <button
                            v-for="line in availableLines"
                            :key="line"
                            class="px-4 py-2 rounded-full transition border"
                            :style="
                                selectedLines.includes(line)
                                    ? { backgroundColor: lineColors[line], color: '#ffffff' }
                                    : { borderColor: lineColors[line], color: lineColors[line], backgroundColor: '#ffffff' }
                            "
                            @click="toggleLine(line)"
                        >
                            {{ line }}
                        </button>
                    </div>
                </div>

                <!-- 초기화 / 적용 -->
                <div class="mt-auto flex justify-between pt-4 border-t">
                    <button class="text-sm text-red-500 hover:underline" @click="resetFilters">초기화</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition" @click="applyFilters">적용</button>
                </div>
            </aside>
        </transition>

        <!-- 메인 슬롯 머신 -->
        <div class="flex-1 flex flex-col items-center justify-center pt-5 pb-5 space-y-4 width__fill">
            <h1 class="text-2xl font-extrabold text-gray-200">🎰 랜덤 지하철 여행 🎰</h1>

            <!-- 최근 뽑은 역 히스토리 -->
            <div v-if="spinHistory.length" class="flex flex-wrap justify-center gap-2">
                <span v-for="(h, i) in spinHistory" :key="i" class="flex flex-row gap-1 p-2 rounded-lg text-white text-sm" :style="{ backgroundColor: h.color }">
                    <span class="flex rounded-full w-5 h-5 border-2 border-gray-200 bg-white text-black justify-center items-center">{{ h.line.substring(0, 1) }}</span>
                    {{ h.name }}
                </span>
            </div>

            <!-- 슬롯창 배경 이미지 + 회전 영역 -->
            <div
                ref="containerRef"
                class="relative overflow-hidden h-16 w-64 rounded-lg"
                :style="{
                    border: `1.5px solid #f7f8f9`
                }"
            >
                <ul ref="reelRef" class="relative rounded-lg will-change-transform">
                    <li
                        v-for="(station, i) in reelStations"
                        :key="i"
                        class="h-16 flex items-center justify-center font-semibold shadow-md"
                        :style="{ backgroundColor: station.color, color: '#ffffff' }"
                    >
                        {{ station.name }}
                    </li>
                </ul>
                <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 pointer-events-none"></div>
            </div>

            <!-- 뽑기 버튼 -->
            <button
                :disabled="spinning || filteredStations.length === 0 || isAIGenerating"
                class="w-64 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg shadow-lg transition-colors disabled:opacity-50"
                @click="spin"
            >
                {{ spinning ? "돌리는 중…" : "오늘은 어디로 가볼까요?" }}
            </button>

            <!-- 결과 및 팁 -->
            <div class="space-y-2 width__fill flex flex-col justify-center items-center">
                <p v-if="filteredStations.length === 0" class="text-red-500">⚠️ 하나 이상의 지역·호선을 선택해주세요.</p>
                <!-- 랜덤 팁 박스 -->
                <div
                    v-if="tips && !isAIGenerating"
                    class="p-4 bg-white rounded-md shadow-inner flex mt-5"
                    :style="{
                        maxWidth: '90%'
                    }"
                >
                    <div class="markdown-body text-left" style="max-width: 600px; width: 100%; margin: 0 auto" v-html="renderedTips" />
                </div>
                <div v-if="isAIGenerating" class="flex flex-row gap-2 justify-center">
                    <span class="text-white text-lg">{{ "역에 대한 정보를 불러오는 중입니다" }}</span>
                    <div id="spinner" />
                </div>
            </div>
        </div>

        <!-- 플로팅 버튼 -->
        <button
            class="fixed bottom-6 right-6 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
            @click="toggleDrawer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useHead } from "nuxt/app"
import SubwayUtil from "../utils/content"
import { SubwayStation } from "../models/content"
import useOpenai from "../composables/useOpenai"
import MarkdownIt from "markdown-it"
import "github-markdown-css/github-markdown-light.css"

definePageMeta({
    prerender: true
})

useHead({
    title: "지하철 랜덤 여행",
    meta: [
        {
            name: "google-adsense-account",
            content: "ca-pub-9206452158611873"
        },
        {
            name: "description",
            content: "세상의 모든 P들 하고싶은건 많지만 계획짜긴 귀찮을때, 지하철 랜덤 여행을 같이 떠나보아요"
        },
        {
            name: "keywords",
            content: "지하철 랜덤 여행, 랜덤 여행, 지하철 여행, 랜덤 여행 코스, 랜덤 여행 추천"
        },
        {
            name: "og:title",
            content: "지하철 랜덤 여행"
        },
        {
            name: "og:description",
            content: "세상의 모든 P들 하고싶은건 많지만 계획짜긴 귀찮을때, 지하철 랜덤 여행을 같이 떠나보아요"
        }
    ],
    link: [{ rel: "canonical", href: "https://subway-roulette.store/main" }]
})

// 전체 데이터
const allStations = SubwayUtil.getSubwayList()
// 지역 목록
const regionList = ["서울", "부산", "대구", "대전", "광주"]

// 상태
const selectedRegions = ref<string>(regionList[0])
const lineColors: Record<string, string> = {
    "1호선": "#0052A4",
    "2호선": "#009D3E",
    "3호선": "#EF7C1C",
    "4호선": "#00A5DE",
    "5호선": "#996CAC",
    "6호선": "#CD7C2F",
    "7호선": "#747F00",
    "8호선": "#E6186C",
    "9호선": "#BB8336"
}

// 필터 라인 계산
const availableLines = computed<string[]>(() => {
    const set = new Set<string>()
    allStations.filter((st) => st.region === selectedRegions.value).forEach((st) => set.add(st.line))
    return Array.from(set).sort()
})
const selectedLines = ref<string[]>([...availableLines.value])
watch(selectedRegions, () => {
    selectedLines.value = selectedLines.value.filter((l) => availableLines.value.includes(l))
})

// 드로어 제어
const isDrawerOpen = ref(false)
function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
}
function closeDrawer() {
    isDrawerOpen.value = false
}
function toggleRegion(r: string) {
    if (selectedRegions.value === r) {
        selectedRegions.value = regionList[0]
        selectedLines.value = [...availableLines.value]
    } else {
        selectedRegions.value = r
        selectedLines.value = [...availableLines.value]
    }
}
function toggleLine(l: string) {
    const i = selectedLines.value.indexOf(l)
    i > -1 ? selectedLines.value.splice(i, 1) : selectedLines.value.push(l)
}
function resetFilters() {
    selectedLines.value = [...availableLines.value]
}
function applyFilters() {
    closeDrawer()
}

// 셔플 기능
function shuffleArray<T>(arr: T[]): T[] {
    const a = arr.slice()
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}
const filteredStations = computed(() => shuffleArray(allStations.filter((st) => st.region === selectedRegions.value && selectedLines.value.includes(st.line))))

// 슬롯 머신 로직
const containerRef = ref<HTMLDivElement | null>(null)
const reelRef = ref<HTMLUListElement | null>(null)
const spinning = ref(false)
const selectedStation = ref<SubwayStation | null>(null)
const REPEAT = 6
const reelStations = computed<SubwayStation[]>(() => {
    const base = filteredStations.value
    return Array.from({ length: REPEAT }, () => base).flat()
})

// 뽑기 히스토리
const spinHistory = ref<SubwayStation[]>([])
const tips = ref<string>("")

const md = new MarkdownIt()

const renderedTips = computed(() => md.render(tips.value))

const isAIGenerating = ref(false)

function spin() {
    if (spinning.value || filteredStations.value.length === 0) return
    spinning.value = true
    selectedStation.value = null
    const N = filteredStations.value.length
    const targetIdx = Math.floor(Math.random() * N)
    const cycles = 5,
        startIdx = cycles * N
    const reel = reelRef.value!,
        first = reel.children[0] as HTMLElement,
        second = reel.children[1] as HTMLElement
    const fullHeight = second.offsetTop - first.offsetTop
    const offset = (containerRef.value!.clientHeight - first.offsetHeight) / 2
    const startY = startIdx * fullHeight,
        endY = (startIdx + targetIdx) * fullHeight
    reel.style.transition = "none"
    reel.style.transform = `translateY(-${startY - offset}px)`
    void reel.offsetHeight
    reel.style.transition = "transform 3s cubic-bezier(0.22,1,0.36,1)"
    reel.style.transform = `translateY(-${endY - offset}px)`
    reel.addEventListener(
        "transitionend",
        async () => {
            const m = new DOMMatrixReadOnly(getComputedStyle(reel).transform)
            const movedY = Math.abs(m.m42)
            const rawIdx = Math.round((movedY + offset) / fullHeight)
            const idx = rawIdx % N
            const picked = filteredStations.value[idx]
            selectedStation.value = picked
            spinning.value = false
            // 히스토리에 추가, 최대 5개
            spinHistory.value.push(picked)
            if (spinHistory.value.length > 5) spinHistory.value.shift()

            try {
                // OpenAI API 호출
                const { getAIResponse } = useOpenai()
                isAIGenerating.value = true
                tips.value = await getAIResponse(selectedRegions.value, picked.name)
                isAIGenerating.value = false
            } catch (error) {
                console.error("OpenAI API 호출 중 오류 발생:", error)
            } finally {
                isAIGenerating.value = false
            }
        },
        { once: true }
    )
}
</script>

<style scoped>
/* 드로어 애니메이션 */
.drawer-enter-from,
.drawer-leave-to {
    transform: translateX(-100%);
}
.drawer-enter-to,
.drawer-leave-from {
    transform: translateX(0);
}
.drawer-enter-active,
.drawer-leave-active {
    transition: transform 300ms ease-in-out;
}

ul {
    will-change: transform;
}

.width__fill {
    width: -webkit-fill-available;
}

#spinner {
    width: 24px;
    height: 24px;
    border: 4px solid transparent;
    border-top: 4px solid yellow;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

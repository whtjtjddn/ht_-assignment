<template>
    <div class="min-h-screen flex bg-gray-900 relative width__fill">
        <!-- 드로어 (필터) -->
        <transition name="drawer">
            <aside v-if="isDrawerOpen" class="fixed inset-y-0 left-0 w-72 bg-white p-6 shadow-2xl space-y-8 z-50 flex flex-col">
                <h2 class="text-2xl font-bold">🛠 필터</h2>
                <div>
                    <h3 class="text-lg font-semibold mb-2">지역</h3>
                    <div class="flex flex-wrap gap-2">
                        <button
                            v-for="region in regionList"
                            :key="region"
                            :class="selectedRegion === region ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'"
                            class="px-4 py-2 rounded-full transition"
                            @click="toggleRegion(region)"
                        >
                            {{ region }}
                        </button>
                    </div>
                </div>
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
                <div class="mt-auto flex justify-between pt-4 border-t">
                    <button class="text-sm text-red-500 hover:underline" @click="resetFilters">초기화</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition" @click="applyFilters">적용</button>
                </div>
            </aside>
        </transition>

        <!-- 메인 컨텐츠 -->
        <div class="flex-1 flex flex-col items-center justify-center pt-5 pb-5 space-y-4 width__fill">
            <h1 class="text-2xl font-extrabold text-gray-200">🎰 랜덤 지하철 여행 🎰</h1>

            <!-- 최근 뽑은 역 히스토리 -->
            <div v-if="spinHistory.length" class="flex flex-wrap justify-center gap-2">
                <span v-for="(h, i) in spinHistory" :key="i" class="flex flex-row gap-1 p-2 rounded-lg text-white text-sm" :style="{ backgroundColor: h.color }">
                    <span class="flex rounded-full w-5 h-5 border-2 border-gray-200 bg-white text-black justify-center items-center">
                        {{ h.line.substring(0, 1) }}
                    </span>
                    {{ h.name }}
                </span>
            </div>

            <!-- 카드 영역 -->
            <transition name="card-expand" mode="out-in" @after-enter="onCardExpand">
                <div v-if="displayCard" ref="cardContainerRef" class="card-container" :class="{ shrink: isShrinking }">
                    <div class="flip-card" :class="{ flipped }">
                        <div class="flip-card-inner">
                            <div class="flip-card-front flex items-center justify-center" :style="{ backgroundColor: selectedStation?.color }">
                                <h2 class="text-2xl font-bold">{{ selectedStation?.name }}</h2>
                            </div>
                            <div ref="backRef" class="flip-card-back markdown-body p-4 relative">
                                <div v-if="isAIGenerating" class="spinner-wrapper">
                                    <div id="spinner" />
                                </div>
                                <div
                                    v-else
                                    :style="{
                                        maxWidth: '100%',
                                        maxHeight: '100%'
                                    }"
                                    v-html="renderedTips"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- 슬롯 머신 -->
            <transition name="slot-fade">
                <div v-if="!displayCard" ref="containerRef" class="relative overflow-hidden h-16 w-64 rounded-lg slot-container" :style="{ border: '1.5px solid #f7f8f9' }">
                    <ul ref="reelRef" class="relative will-change-transform">
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
            </transition>

            <!-- 뽑기 버튼 -->
            <button
                :disabled="spinning || isAIGenerating"
                class="w-64 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg shadow-lg transition-colors disabled:opacity-50"
                @click="spin"
            >
                {{ spinning ? "돌리는 중…" : displayCard ? "다시 돌리기" : "오늘은 어디로 가볼까요?" }}
            </button>
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
import { ref, computed, watch, nextTick } from "vue"
import SubwayUtil from "../../utils/content"
import useOpenai from "../../composables/useOpenai"
import MarkdownIt from "markdown-it"
import "github-markdown-css/github-markdown-light.css"

const allStations = SubwayUtil.getSubwayList()
const regionList = ["서울", "부산", "대구", "대전", "광주"]
const selectedRegion = ref(regionList[0])
const availableLines = computed(() => {
    const set = new Set<string>()
    allStations.filter((st) => st.region === selectedRegion.value).forEach((st) => set.add(st.line))
    return Array.from(set).sort()
})
const selectedLines = ref([...availableLines.value])
watch(selectedRegion, () => {
    selectedLines.value = [...availableLines.value]
})

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

function toggleRegion(r: string) {
    selectedRegion.value = selectedRegion.value === r ? regionList[0] : r
}
function toggleLine(l: string) {
    const idx = selectedLines.value.indexOf(l)
    idx > -1 ? selectedLines.value.splice(idx, 1) : selectedLines.value.push(l)
}
function resetFilters() {
    selectedLines.value = [...availableLines.value]
}
function applyFilters() {
    isDrawerOpen.value = false
}

const isDrawerOpen = ref(false)
function toggleDrawer() {
    isDrawerOpen.value = !isDrawerOpen.value
}

const spinning = ref(false)
const displayCard = ref(false)
const flipped = ref(false)
const isShrinking = ref(false)
const selectedStation = ref<any>(null)
const spinHistory = ref<any[]>([])
const cardContainerRef = ref<HTMLElement | null>(null)
const backRef = ref<HTMLDivElement | null>(null)

function shuffleArray<T>(arr: T[]): T[] {
    const a = arr.slice()
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

const filteredStations = computed(() => shuffleArray(allStations.filter((st) => st.region === selectedRegion.value && selectedLines.value.includes(st.line))))
const REPEAT = 6
const reelStations = computed(() => Array.from({ length: REPEAT }, () => filteredStations.value).flat())

const md = new MarkdownIt()
const tips = ref<string>("")
const renderedTips = computed(() => md.render(tips.value))
const isAIGenerating = ref<boolean>(false)

watch(isAIGenerating, async (val) => {
    if (val === false) {
        await nextTick()
        if (backRef.value) backRef.value.scrollTop = 0
    }
})

const containerRef = ref<HTMLDivElement | null>(null)
const reelRef = ref<HTMLUListElement | null>(null)

async function spinRoulette() {
    if (!filteredStations.value.length) return
    spinning.value = true
    selectedStation.value = null
    flipped.value = false
    tips.value = ""

    const N = filteredStations.value.length
    const targetIdx = Math.floor(Math.random() * N)
    const startIdx = N * 5
    const reel = reelRef.value!
    const first = reel.children[0] as HTMLElement
    const second = reel.children[1] as HTMLElement
    const fullH = second.offsetTop - first.offsetTop
    const offset = (containerRef.value!.clientHeight - first.offsetHeight) / 2

    reel.style.transition = "none"
    reel.style.transform = `translateY(-${startIdx * fullH - offset}px)`
    void reel.offsetHeight
    reel.style.transition = "transform 2s cubic-bezier(0.22,1,0.36,1)"
    reel.style.transform = `translateY(-${(startIdx + targetIdx) * fullH - offset}px)`

    reel.addEventListener(
        "transitionend",
        async () => {
            spinning.value = false
            const picked = filteredStations.value[targetIdx]
            selectedStation.value = picked
            spinHistory.value.push(picked)
            if (spinHistory.value.length > 5) spinHistory.value.shift()
            displayCard.value = true
            try {
                isAIGenerating.value = true
                const { getAIResponse } = useOpenai()
                tips.value = await getAIResponse(selectedRegion.value, picked.name)
            } catch (e) {
                console.error(e)
            } finally {
                isAIGenerating.value = false
            }
        },
        { once: true }
    )
}

function spin() {
    if (displayCard.value) {
        flipped.value = false
        isShrinking.value = true
        setTimeout(() => {
            displayCard.value = false
            isShrinking.value = false
        }, 600)
    } else {
        spinRoulette()
    }
}

function onCardExpand() {
    flipped.value = true
}
</script>

<style scoped>
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

.slot-fade-enter-from,
.slot-fade-leave-to {
    opacity: 0;
}
.slot-fade-enter-to,
.slot-fade-leave-from {
    opacity: 1;
}
.slot-fade-enter-active,
.slot-fade-leave-active {
    transition: opacity 200ms ease;
}

.card-expand-enter-from,
.card-expand-leave-to {
    transform: scale(0.5);
    opacity: 0;
}
.card-expand-enter-to,
.card-expand-leave-from {
    transform: scale(1);
    opacity: 1;
}
.card-expand-enter-active {
    transition:
        transform 400ms ease-in-out,
        opacity 400ms ease-in-out;
    transform-origin: center;
}
.card-expand-leave-active {
    transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out;
    transform-origin: center;
}

.card-container {
    width: 90%;
    max-width: 600px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-container.shrink {
    transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out;
    transform: scale(0.5);
    opacity: 0;
    transform-origin: center;
}

.flip-card {
    perspective: 1000px;
    width: 100%;
    height: 100%;
}
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 600ms ease-in-out;
}
.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.flip-card-front {
    color: #fff;
}
.flip-card-back {
    transform: rotateY(180deg);
    background: #f9f9f9;
    color: #333;
    padding: 1rem;
    overflow: auto;
}

.spinner-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#spinner {
    width: 48px;
    height: 48px;
    border: 6px solid transparent;
    border-top: 6px solid #f5c518;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

ul {
    will-change: transform;
}
.width__fill {
    width: -webkit-fill-available;
}
</style>

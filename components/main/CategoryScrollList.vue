<template>
    <div class="category-scroll-list">
        <div class="category-scroll-list__container">
            <div
                v-for="(category, index) in categoryList"
                :key="index"
                class="category-text"
                :class="{
                    selected: selectedCategory?.id === category.id
                }"
                @click="onTapCategory(category)"
            >
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Category } from "../../models/category"

export default defineComponent({
    name: "CategoryScrollList",
    components: {},
    props: {
        categoryList: {
            type: Array as PropType<Category[]>,
            required: true,
            default: () => []
        },
        selectedCategory: {
            type: Object as PropType<Category>,
            required: true,
            default: () => ({})
        },
        onTapCategory: {
            type: Function,
            required: true
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped>
.category-scroll-list {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #f1f1f1;
    border-bottom: 1px solid #e8eaee;
    padding: 8px 0;

    &::-webkit-scrollbar {
        display: none;
    }
}
.category-scroll-list__container {
    display: flex;
    width: 100%;
    gap: 24px;
}

.category-text {
    color: #6b7180;

    &:first-child {
        padding-left: 20px;
    }

    &:last-child {
        padding-right: 20px;
    }

    &.selected {
        color: #8840ff;
        font-weight: bold;
    }
}
</style>

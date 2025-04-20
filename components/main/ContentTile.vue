<template>
    <div class="content-tile">
        <img :src="contentInfo.imageUrl" alt="Tile Image" />
        <div class="content-text">
            <span class="title">{{ contentInfo.title }}</span>
            <span class="description">{{ contentInfo.description }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Content } from "../../models/content"
import { PropType } from "vue"

export default {
    name: "ContentTile",
    props: {
        contentInfo: {
            type: Object as PropType<Content>,
            required: true,
            default: {} as Content
        }
    }
}
</script>

<style scoped>
.content-tile {
    display: flex;
    flex-direction: row;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: white;
    justify-content: start;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8eaee;
    gap: 8px;

    .content-text {
        display: flex;
        flex-direction: column;
        .title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 4px;
        }

        .description {
            font-size: 14px;
            color: #6b7180;
        }
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #e8eaee;
    }
}

.content-tile:hover {
    background-color: #f7f8f9;
    cursor: pointer;
}
</style>

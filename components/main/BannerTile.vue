<template>
    <div class="banner-tile">
        <img :src="banner.imageUrl" alt="Banner Image" />
        <div class="desc-section">
            <div class="flex flex-row items-center justify-between">
                <span class="title">{{ banner.title }}</span>
                <button class="vote-button" @click.stop="goToLink">
                    {{ "투표하기" }}
                </button>
            </div>
            <span class="flex justify-end description">{{ banner.startDate + " ~ " + banner.endDate + "(KST)" }}</span>
        </div>

        <div v-if="banner.isOpen" class="open-badge">Open</div>
    </div>
</template>

<script lang="ts">
import { PropType } from "vue"
import { Banner } from "../../models/banner"

export default {
    name: "BannerTile",
    props: {
        banner: {
            type: Object as PropType<Banner | null>,
            required: true,
            default: {} as Banner
        }
    },
    methods: {
        goToLink() {
            if (this.banner && this.banner.linkUrl) {
                window.open(this.banner.linkUrl, "_blank")
            }
        }
    }
}
</script>

<style scoped>
.banner-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #e8eaee;

    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
    }

    .open-badge {
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: #ff4757;
        color: white;
        padding: 4px 8px;
        border-radius: 8px;
        font-size: 12px;
    }

    .desc-section {
        display: flex;
        flex-direction: column;
        padding: 8px 12px;
        gap: 8px;
        background-color: white;
        border-radius: 0 0 12px 12px;

        .title {
            font-size: 16px;
            font-weight: bold;
        }

        .description {
            align-items: end;
            justify-content: end;
            font-size: 12px;
            color: #6b7180;
        }
    }

    .vote-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ff4757;
        color: #ff4757;
        padding: 4px 12px;
        border-radius: 8px;
        font-size: 12px;
    }
}

.banner-tile:hover {
    cursor: pointer;
}
</style>

<template>
    <div class="upper-footer" @click="goToTop">
        <img src="../../assets/icon/icon-up-arrow-fill.svg" alt="up-icon" width="20px" height="20px" />
    </div>
</template>

<script lang="ts">
export default {
    name: "UpperFooter",
    methods: {
        goToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }
}
</script>

<style scoped>
.upper-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: -webkit-fill-available;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 1) 100%);
    padding: 20px 0;
}
</style>

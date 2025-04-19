// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    devtools: { enabled: true },

    vite: {
        plugins: [eslintPlugin()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/index.scss" as *;'
                }
            }
        }
    },

    typescript: {
        typeCheck: false
    },

    modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxtjs/tailwindcss"],

    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "HT_NUXT",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                }
            ]
        }
    },

    tailwindcss: {
        // Options
    },

    compatibilityDate: "2025-04-19"
})

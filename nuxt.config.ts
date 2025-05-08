// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"
import path from "path"

export default defineNuxtConfig({
    devtools: { enabled: true },
    nitro: {
        preset: "firebase",
        firebase: {
            nodeVersion: "18",
            gen: 2,
            serverFunctionName: "server",
            httpsOptions: {
                region: "asia-northeast3",
                memory: "1GiB"
            }
        }
    },
    vite: {
        plugins: [eslintPlugin()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/style/index.scss" as *;
                        `
                }
            }
        }
    },
    runtimeConfig: {
        public: {
            openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
            apiKey: process.env.FIREBASE_API_KEY
        }
    },
    routeRules: {
        "/": {
            redirect: "/main"
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
            title: "지하철 랜덤 여행",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                }
            ],
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
            ]
        }
    },

    tailwindcss: {
        // Options
    },

    compatibilityDate: "2025-04-19"
})

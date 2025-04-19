// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"
export default defineNuxtConfig({
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

  site: {
    // production URL
    url: "https://nuxt-demo-fecd6.web.app/"
  },

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
      title: "MAKESTAR - Example",
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
import OpenAI from "openai"
import { useRuntimeConfig } from "nuxt/app"

export default function () {
    const getAIResponse = async (region: string, station: string) => {
        const config = useRuntimeConfig()

        const client = new OpenAI({
            apiKey: config.public.openaiApiKey ?? "",
            dangerouslyAllowBrowser: true
        })

        const response = await client.responses.create({
            model: "gpt-4.1",
            input: `${region}의 ${station}역의 정보와 놀거리, 맛집 정보들을 예쁜 마크다운 형식으로 내려줘. 서두랑 마무리 멘트는 필요없고, 그냥 딱 마크다운 viewer에서 사용가능하도록 정보만 내려줘. 앞의 '₩₩₩markdown 요런것도 자르구'`
        })

        console.log(response.output_text)

        return response.output_text
    }

    return {
        getAIResponse
    }
}

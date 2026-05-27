// If using quartz.ts overrides instead of YAML:
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({
    defaults: {
        afterBody: [
            ExternalPlugin.Comments({
                provider: "giscus",
                options: {
                    repo: "TalionOak/Carvalho",
                    repoId: "R_kgDOM-crSQ",
                    category: "Announcements",
                    categoryId: "DIC_kwDOM-crSc4C97ff",
                    lang: "pt",
                },
            }),
        ],
    },
})
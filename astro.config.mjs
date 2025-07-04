// @ts-check

import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import { defineConfig, passthroughImageService } from "astro/config";
import liveCode from "astro-live-code";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
	site: "https://lib.lushisang.com",
	image: {
		// See https://docs.astro.build/zh-cn/reference/errors/missing-sharp/
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: "🧚‍♂️逍遥书院📚",
			// lastUpdated: true,
			editLink: {
				baseUrl: "https://github.com/LiveCatXY/LiveLib/edit/main/",
			},
			locales: {
				root: {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			sidebar: [
				{
					label: "📚总览",
					items: [
						"lib/livelib",
						"lib/dikw",
						"lib/architecture",
						"lib/digital-garden",
						"lib/data-cell",
					],
				},
				{
					label: "📈价值",
					items: [
						"value/livefab",
						"value/livebay",
						"value/fav",
						"value/sharewaves",
						"value/health",
						"value/safety",
						"value/agriculture",
					],
				},
				{
					label: "✅范式",
					items: [
						"paradigm/cccat",
						"paradigm/easepanda",
						"paradigm/shapecat",
						"paradigm/peachpanda",
					],
				},
				{
					label: "📄文章",
					autogenerate: { directory: "articles" },
				},
			],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/LiveCatXY/LiveLib",
				},
			],
			plugins: [
				starlightThemeFlexoki(),
				starlightBlog({
					authors: {
						livecat: {
							name: "逍遥闲人",
							title: "逍遥书院院长",
							picture: "/images/catlu200.png", // Images in the `public` directory are supported.
							url: "https://lushisang.com",
						},
					},
				}),
				starlightUtils(),
				starlightLinksValidator(),
			],
		}),
		vue(),
		liveCode({
			defaultProps: {
				theme: "dark",
				// apply client directives to all components
				"client:load": true,
			},
		}),
	],
});

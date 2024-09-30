/*
 * SPDX-FileCopyrightText: 2024 KindSpells Labs S.L.
 *
 * SPDX-License-Identifier: MIT
 */

import vercel from "@astrojs/vercel/static";
import { shield } from "@kindspells/astro-shield";
import { defineConfig } from "astro/config";

/**
 * @typedef {{ -readonly [key in keyof T]: T[key] }} Mutable<T>
 * @template {any} T
 */

// https://astro.build/config
export default defineConfig({
	output: "static",
	adapter: vercel(),
	trailingSlash: "always",
	integrations: [
		shield({
			sri: {
				enableStatic: true,
				enableMiddleware: false,
			},
			securityHeaders: {
				enableOnStaticPages: {
					provider: "vercel",
				},
				contentSecurityPolicy: {},
			},
		}),
	],
});

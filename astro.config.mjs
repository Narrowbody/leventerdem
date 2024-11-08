// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [icon(), tailwind(), react()],
	output: 'server',
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});

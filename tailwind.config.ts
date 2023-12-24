import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { firstTheme } from './src/firstTheme'
import { lighterTheme } from './src/lighterTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					firstTheme,
					lighterTheme
				]
			},
		}),
	],
} satisfies Config;

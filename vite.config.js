import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { plugin as mdPlugin } from 'vite-plugin-markdown';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
        tsconfigPaths(),
        mdPlugin({ mode: ['html', 'toc'] }),
        sveltekit()
    ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;

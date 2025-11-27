// astro.config.mjs
import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/adapter-static';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react()],
    output: 'static',
    adapter: staticAdapter(),
    site: 'https://studio.meltlight.art/',
});

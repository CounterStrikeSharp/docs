import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CounterStrikeSharp',
      logo: { src: './src/assets/logo.svg' },
      favicon: './src/assets/logo.svg',
      expressiveCode: {
        themes: [ 'dark-plus', 'light-plus'],
      },
      customCss: [
        '@fontsource/ibm-plex-sans/400.css',
        '@fontsource/ibm-plex-sans/500.css',
        '@fontsource/ibm-plex-sans/700.css',
        '@fontsource/jetbrains-mono/400.css',
        '@fontsource/jetbrains-mono/600.css',
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://gc.zgo.at/count.js',
            'data-goatcounter': 'https://cssharp.goatcounter.com/count',
            async: true,
          },
        },
      ],
      social: {
        github: 'https://github.com/roflmuffin/CounterStrikeSharp',
        discord: 'https://discord.gg/eAZU3guKWU'
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Features',
          autogenerate: { directory: 'features' },
        },
        {
          label: 'Admin Framework',
          autogenerate: { directory: 'admin-framework' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        }
      ],
      editLink: {
        baseUrl:
          'https://github.com/roflmuffin/CounterStrikeSharp/edit/main/docs/',
      },
    }),
  ],
  base: '/docs/',
  site: 'https://counterstrikesharp.github.io/docs/',
  markdown: {
    shikiConfig: {
      wrap: false,
    },
  },
});

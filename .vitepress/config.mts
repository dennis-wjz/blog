import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dennis's Blog",
  description: "The harder you work, the luckier you get.",
  base: '/blog', // 站点将部署到的base URL 默认为'/'
  srcDir: 'docs',
  themeConfig: {
    logo: {
      src: 'https://avatars.githubusercontent.com/u/51118789?v=4',
      style: {
        borderRadius: '50%',
      }
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '🧑🏻‍💻 Tech', link: '/tech/' },
      { text: '✍🏼 Blog', link: '/blog/' },
      { text: '📖 Read', link: '/read/' },
      { text: '👋🏻 Life', link: '/life/' },
      { text: '⭐️ Me', link: '/me/' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: '平台思考',
          items: [
            { text: '小红书', link: '/blog/platform-thought/little-red-book' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dennis-wjz' }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Dennis'
    },
  }
})

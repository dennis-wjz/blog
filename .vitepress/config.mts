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
      { text: '📚 Algorithms', link: '/algorithms/' },
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
      '/algorithms/': [
        {
          text: '数据结构',
          items: [
            { text: '数据结构概念', link: '/algorithms/data-structure/concept.md' },
            { text: '数组', link: '/algorithms/data-structure/array.md' },
            { text: '链表', link: '/algorithms/data-structure/linked-list.md' },
          ]
        },
        {
          text: '算法',
          items: [
            { text: '算法概念', link: '/algorithms/algorithms/concept.md' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: '术语表', link: '/algorithms/other/terms-glossary.md' },
          ]
        },
      ],
      '/read/': [
        {
          text: '创业',
          items: [
            { text: '低风险创业', link: '/read/business-startup/low-risk-entrepreneurship' },
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

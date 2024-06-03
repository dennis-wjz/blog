import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dennis's Blog",
  description: "The harder you work, the luckier you get.",
  srcDir: 'docs',
  themeConfig: {
    logo: {
      src: 'https://avatars.githubusercontent.com/u/51118789?v=4',
      style: {
        borderRadius: '50%',
      }
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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

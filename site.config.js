const CONFIG = {
  // profile setting (required)
  profile: {
    name: "도모",
    image: "profile_img", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "𝙱𝚊𝚌𝚔𝚎𝚗𝚍 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛",
    bio: "시행착오 과정을 기록합니다",
    email: "me@dev-domo.com",
    linkedin: "kdomo",
    github: "kdomo",
    instagram: "d._.omo",
  },
  // blog setting (required)
  blog: {
    title: "시행착오 과정 | 도모",
    description: "백엔드 개발자 도모의 시행착오 과정",
  },

  // CONFIG configration (required)
  link: "https://dev-domo.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

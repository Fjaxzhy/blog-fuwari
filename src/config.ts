import type {
  FriendsConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '笨蛋弥生的平行世界',
  subtitle: '创造生命的逃逸之线',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 200,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'October 2024 @ Gracile',              // Credit text to be displayed
      url: 'https://www.pixiv.net/artworks/123862605'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/cropped-icon.jpg',    // Path of the favicon, relative to the /public directory
      // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Status',
      url: 'https://status.kagurayayoi.top',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'KaguraYayoi',
  bio: '本科废物/码点屎山/死二次元',
  links: [
    {
      name: 'Mail',
      icon: 'fa6-solid:envelope',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'mailto:admin@kagurayayoi.top',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/kagurayayoi',
    },
    // {
    //   name: 'BiliBili',
    //   icon: 'fa6-brands:bilibili',
    //   url: 'https://space.bilibili.com/157623239',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/fjaxzhy',
    },
    {
      name: 'Bangumi',
      icon: 'fa6-brands:bilibili',
      url: 'https://bgm.tv/user/kagurayayoi',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steam community.com/id/kagurayayoi',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const friendsConfig: FriendsConfig = {
  display: 4,
  links: [
    {
      name: "kihanahare",
      site: "北原花羽栖息地",
      url: "https://kihanahare.github.io/HanahareHeaven/",
      description: "是网安大佬，wsl",
    },
    {
      name: "rescld",
      site: "残云的学习笔记",
      url: "https://www.rescld.cn",
      description: "努力考研的舍友",
    }
  ],
}
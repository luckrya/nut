import { defineConfig } from "vitepress";

export default defineConfig({
  title: "@rc5/nut",
  description: "一个实用的 JavaScript 工具函数库，在工作中提取和总结",
  lang: "zh-CN",
  base: "/nut",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    logo: {
      dark: "/nut/logo-dark.png",
      light: "/nut/logo.png",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/luckrya/nut" }],
    sidebar: {
      "/": [
        {
          text: "",
          items: [
            {
              text: "isUndefined",
              link: "/apis/data-type/isUndefined",
            },
            {
              text: "isNull",
              link: "/apis/data-type/isNull",
            },
            {
              text: "isNaN",
              link: "/apis/data-type/isNaN",
            },
            {
              text: "isString",
              link: "/apis/data-type/isString",
            },
            {
              text: "isBoolean",
              link: "/apis/data-type/isBoolean",
            },
            {
              text: "isTrue",
              link: "/apis/data-type/isTrue",
            },
            {
              text: "isFalse",
              link: "/apis/data-type/isFalse",
            },
            {
              text: "isNumber",
              link: "/apis/data-type/isNumber",
            },
            {
              text: "isArray",
              link: "/apis/data-type/isArray",
            },
            {
              text: "isError",
              link: "/apis/data-type/isError",
            },
            {
              text: "isFunction",
              link: "/apis/data-type/isFunction",
            },
            {
              text: "isDate",
              link: "/apis/data-type/isDate",
            },
            {
              text: "isObjectNonNull",
              link: "/apis/data-type/isObjectNonNull",
            },
            {
              text: "isPureObject",
              link: "/apis/data-type/isPureObject",
            },
            {
              text: "isIE",
              link: "/apis/environment/isIE",
            },
            {
              text: "isEdge",
              link: "/apis/environment/isEdge",
            },
            {
              text: "isFirefox",
              link: "/apis/environment/isFirefox",
            },
            {
              text: "isChrome",
              link: "/apis/environment/isChrome",
            },
            {
              text: "isSafari",
              link: "/apis/environment/isSafari",
            },
            {
              text: "isAndroid",
              link: "/apis/environment/isAndroid",
            },
            {
              text: "isIOS",
              link: "/apis/environment/isIOS",
            },
            {
              text: "isLinux",
              link: "/apis/environment/isLinux",
            },
            {
              text: "isMac",
              link: "/apis/environment/isMac",
            },
            {
              text: "isWindows",
              link: "/apis/environment/isWindows",
            },
          ],
        },
      ],
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} @rc5`,
    },
  },

  vite: {
    server: {
      port: 2022,
    },
  },

  ignoreDeadLinks: true,
});

// const path = require("path")
// const fs = require("fs")
// const htmlFolder = path.join(__dirname, "../html/")
// const html = fs.readdirSync(htmlFolder).filter((c) => c !== "README.md")
const toolsSidebar = require("./sidebars/tools")
const frameworksSidebar = require("./sidebars/frameworks")

module.exports = {
  title: "类库框架",
  description: "前端类库框架",
  themeConfig: {
    nav: [
      {
        text: "工具库",
        items: [
          {
            text: "知识图谱",
            link: "/tools/",
          },
          // {
          //   text: "教程/书籍",
          //   items: [{ text: "javascript高级程序设计", link: "/html-course1/" }],
          // },
        ],
      },
      {
        text: "开发库/框架",
        items: [
          {
            text: "知识图谱",
            link: "/frameworks/",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/tools/": toolsSidebar,
      "/frameworks/": frameworksSidebar,
    },
  },
}

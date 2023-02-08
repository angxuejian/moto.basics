export default 
/**
 * title: sidebar 页面名称
 * name: router 路由地址
 * path: router 路由文件地址
 * link: 是否是外链
 */
[
  { 
    "title": "Front-end Basics",
    "children": [
      { "title": "Css 常用样式", "name": "css", "path": () => import('@/views/examples/docs/css.md') },
      { "title": "Css Animation 常用动画", "name": "css-animation", "path": () => import('@/views/examples/docs/css-animation.md') }
    ]
  },
  {
    "title": "Lodash",
    "children": [
      { "title": "安装/使用", "name": "use", "path": () => import('@/views/examples/docs/lodash/use.md') },
      { "title": "_isTypeOf", "name": "isTypeOf", "path": () => import('@/views/examples/docs/lodash/isTypeOf.md') },
      { "title": "_toSpinalCase", "name": "toSpinalCase", "path": () => import('@/views/examples/docs/lodash/toSpinalCase.md') },
      { "title": "_getDepthValue", "name": "getDepthValue", "path": () => import('@/views/examples/docs/lodash/getDepthValue.md') },
      { "title": "_getParams", "name": "getParams", "path": () => import('@/views/examples/docs/lodash/getParams.md') },
      { "title": "_drawRoundRect", "name": "drawRoundRect", "path": () => import('@/views/examples/docs/lodash/drawRoundRect.md') },
      { "title": "_ImageMode", "name": "ImageMode", "path": () => import('@/views/examples/docs/lodash/imageMode.md') },
      { "title": "_debounce", "name": "debounce", "path": () => import('@/views/examples/docs/lodash/debounce.md') },
      { "title": "_throttle", "name": "throttle", "path": () => import('@/views/examples/docs/lodash/throttle.md') },
      { "title": "_hexToRgb", "name": "hexToRgb", "path": () => import('@/views/examples/docs/lodash/hexToRgb.md') },
      { "title": "_hsvToRgb", "name": "hsvToRgb", "path": () => import('@/views/examples/docs/lodash/hsvToRgb.md') },
      { "title": "_rgbToHex", "name": "rgbToHex", "path": () => import('@/views/examples/docs/lodash/rgbToHex.md') },
      { "title": "_rgbToHsv", "name": "rgbToHsv", "path": () => import('@/views/examples/docs/lodash/rgbToHsv.md') },
      { "title": "_Calendar", "name": "Calendar", "path": () => import('@/views/examples/docs/lodash/calendar.md') }
    ]
  },
  {
    "title": "Records",
    "children": [
      { "title": "Git", "path": "https://github.com/angxuejian/moto.basics/tree/main/src/views/examples/github/git", "link": true },
      { "title": "Ruankao", "path": "https://github.com/angxuejian/moto.basics/tree/main/src/views/examples/github/ruankao", "link": true },
      { "title": "Jiaozi", "path": "https://github.com/angxuejian/moto.basics/tree/main/src/views/examples/github/jiaozi", "link": true },
      { "title": "Tips", "path": "https://github.com/angxuejian/moto.basics/tree/main/src/views/examples/github/tips.md", "link": true }
    ]
  },
  {
    "title": "Markdown 扩展",
    "name": "readme",
    "path": () => import('@/views/examples/docs/readme.md')
  }
]
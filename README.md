<h1 align="center">badge</h1>

[![my github](https://github.com/wtto00/badge/blob/master/docs/images/GitHub.png?raw=true "my github")](https://github.com/wtto00/badge)

生成徽章服务

## 使用

#### 自定义徽章

```
https://badge.wtto00.now.sh/api/badge/:subject/:status/:color?icon=github
                                      --------|-------|------|-----------
                                          |       |       |        |
                                          |       |       |       选项(icon,color,label,list,labelColor,scale)
                                          |       |      颜色
                                          |      状态
                                         主题
```

- **可选颜色**  
  [![blue](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-blue.png?raw=true "color blue")](https://badge.wtto00.now.sh/api/badge/color/blue/blue) [![cyan](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-cyan.png?raw=true "color cyan")](https://badge.wtto00.now.sh/api/badge/color/cyan/cyan) [![green](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-green.png?raw=true "color green")](https://badge.wtto00.now.sh/api/badge/color/green/green) [![yellow](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-yellow.png?raw=true "color yellow")](https://badge.wtto00.now.sh/api/badge/color/yellow/yellow) [![orange](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-orange.png?raw=true "color orange")](https://badge.wtto00.now.sh/api/badge/color/orange/orange) [![red](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-red.png?raw=true "color red")](https://badge.wtto00.now.sh/api/badge/color/red/red) [![pink](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-pink.png?raw=true "color pink")](https://badge.wtto00.now.sh/api/badge/color/pink/pink) [![purple](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-purple.png?raw=true "color purple")](https://badge.wtto00.now.sh/api/badge/color/purple/purple) [![grey](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-grey.png?raw=true "color grey")](https://badge.wtto00.now.sh/api/badge/color/grey/grey) [![black](https://github.com/wtto00/badge/blob/master/docs/images/colors/color-black.png?raw=true "color black")](https://badge.wtto00.now.sh/api/badge/color/black/black)
  > 其他颜色参数或无颜色参数将显示默认颜色 `blue`
- **可选图标**  
  [![icon airbnb](https://github.com/wtto00/badge/blob/master/docs/images/icons/airbnb.png?raw=true "icon airbnb")](https://badge.wtto00.now.sh/api/badge/icon/airbnb?icon=airbnb&label) [![icon apple](https://github.com/wtto00/badge/blob/master/docs/images/icons/apple.png?raw=true "icon apple")](https://badge.wtto00.now.sh/api/badge/icon/apple?icon=apple&label) [![icon appveyor](https://github.com/wtto00/badge/blob/master/docs/images/icons/appveyor.png?raw=true "icon appveyor")](https://badge.wtto00.now.sh/api/badge/icon/appveyor?icon=appveyor&label) [![icon atom](https://github.com/wtto00/badge/blob/master/docs/images/icons/atom.png?raw=true "icon atom")](https://badge.wtto00.now.sh/api/badge/icon/atom?icon=atom&label) [![icon awesome](https://github.com/wtto00/badge/blob/master/docs/images/icons/awesome.png?raw=true "icon awesome")](https://badge.wtto00.now.sh/api/badge/icon/awesome?icon=awesome&label) [![icon bitcoin-lightning](https://github.com/wtto00/badge/blob/master/docs/images/icons/bitcoin-lightning.png?raw=true "icon bitcoin-lightning")](https://badge.wtto00.now.sh/api/badge/icon/bitcoin-lightning?icon=bitcoin-lightning&label) [![icon bitcoin](https://github.com/wtto00/badge/blob/master/docs/images/icons/bitcoin.png?raw=true "icon bitcoin")](https://badge.wtto00.now.sh/api/badge/icon/bitcoin?icon=bitcoin&label) [![icon chrome](https://github.com/wtto00/badge/blob/master/docs/images/icons/chrome.png?raw=true "icon chrome")](https://badge.wtto00.now.sh/api/badge/icon/chrome?icon=chrome&label) [![icon circleci](https://github.com/wtto00/badge/blob/master/docs/images/icons/circleci.png?raw=true "icon circleci")](https://badge.wtto00.now.sh/api/badge/icon/circleci?icon=circleci&label) [![icon codebeat](https://github.com/wtto00/badge/blob/master/docs/images/icons/codebeat.png?raw=true "icon codebeat")](https://badge.wtto00.now.sh/api/badge/icon/codebeat?icon=codebeat&label) [![icon codeclimate](https://github.com/wtto00/badge/blob/master/docs/images/icons/codeclimate.png?raw=true "icon codeclimate")](https://badge.wtto00.now.sh/api/badge/icon/codeclimate?icon=codeclimate&label) [![icon codecov](https://github.com/wtto00/badge/blob/master/docs/images/icons/codecov.png?raw=true "icon codecov")](https://badge.wtto00.now.sh/api/badge/icon/codecov?icon=codecov&label) [![icon codeship](https://github.com/wtto00/badge/blob/master/docs/images/icons/codeship.png?raw=true "icon codeship")](https://badge.wtto00.now.sh/api/badge/icon/codeship?icon=codeship&label) [![icon commonwl](https://github.com/wtto00/badge/blob/master/docs/images/icons/commonwl.png?raw=true "icon commonwl")](https://badge.wtto00.now.sh/api/badge/icon/commonwl?icon=commonwl&label) [![icon deepscan](https://github.com/wtto00/badge/blob/master/docs/images/icons/deepscan.png?raw=true "icon deepscan")](https://badge.wtto00.now.sh/api/badge/icon/deepscan?icon=deepscan&label) [![icon dependabot](https://github.com/wtto00/badge/blob/master/docs/images/icons/dependabot.png?raw=true "icon dependabot")](https://badge.wtto00.now.sh/api/badge/icon/dependabot?icon=dependabot&label) [![icon discord](https://github.com/wtto00/badge/blob/master/docs/images/icons/discord.png?raw=true "icon discord")](https://badge.wtto00.now.sh/api/badge/icon/discord?icon=discord&label) [![icon dockbit](https://github.com/wtto00/badge/blob/master/docs/images/icons/dockbit.png?raw=true "icon dockbit")](https://badge.wtto00.now.sh/api/badge/icon/dockbit?icon=dockbit&label) [![icon docker](https://github.com/wtto00/badge/blob/master/docs/images/icons/docker.png?raw=true "icon docker")](https://badge.wtto00.now.sh/api/badge/icon/docker?icon=docker&label) [![icon eclipse](https://github.com/wtto00/badge/blob/master/docs/images/icons/eclipse.png?raw=true "icon eclipse")](https://badge.wtto00.now.sh/api/badge/icon/eclipse?icon=eclipse&label) [![icon firefox](https://github.com/wtto00/badge/blob/master/docs/images/icons/firefox.png?raw=true "icon firefox")](https://badge.wtto00.now.sh/api/badge/icon/firefox?icon=firefox&label) [![icon flow](https://github.com/wtto00/badge/blob/master/docs/images/icons/flow.png?raw=true "icon flow")](https://badge.wtto00.now.sh/api/badge/icon/flow?icon=flow&label) [![icon git](https://github.com/wtto00/badge/blob/master/docs/images/icons/git.png?raw=true "icon git")](https://badge.wtto00.now.sh/api/badge/icon/git?icon=git&label) [![icon gitee](https://github.com/wtto00/badge/blob/master/docs/images/icons/gitee.png?raw=true "icon gitee")](https://badge.wtto00.now.sh/api/badge/icon/gitee?icon=gitee&label) [![icon github](https://github.com/wtto00/badge/blob/master/docs/images/icons/github.png?raw=true "icon github")](https://badge.wtto00.now.sh/api/badge/icon/github?icon=github&label) [![icon gitlab](https://github.com/wtto00/badge/blob/master/docs/images/icons/gitlab.png?raw=true "icon gitlab")](https://badge.wtto00.now.sh/api/badge/icon/gitlab?icon=gitlab&label) [![icon gitter](https://github.com/wtto00/badge/blob/master/docs/images/icons/gitter.png?raw=true "icon gitter")](https://badge.wtto00.now.sh/api/badge/icon/gitter?icon=gitter&label) [![icon googleplay](https://github.com/wtto00/badge/blob/master/docs/images/icons/googleplay.png?raw=true "icon googleplay")](https://badge.wtto00.now.sh/api/badge/icon/googleplay?icon=googleplay&label) [![icon graphql](https://github.com/wtto00/badge/blob/master/docs/images/icons/graphql.png?raw=true "icon graphql")](https://badge.wtto00.now.sh/api/badge/icon/graphql?icon=graphql&label) [![icon haskell](https://github.com/wtto00/badge/blob/master/docs/images/icons/haskell.png?raw=true "icon haskell")](https://badge.wtto00.now.sh/api/badge/icon/haskell?icon=haskell&label) [![icon kofi](https://github.com/wtto00/badge/blob/master/docs/images/icons/kofi.png?raw=true "icon kofi")](https://badge.wtto00.now.sh/api/badge/icon/kofi?icon=kofi&label) [![icon lgtm](https://github.com/wtto00/badge/blob/master/docs/images/icons/lgtm.png?raw=true "icon lgtm")](https://badge.wtto00.now.sh/api/badge/icon/lgtm?icon=lgtm&label) [![icon libraries](https://github.com/wtto00/badge/blob/master/docs/images/icons/libraries.png?raw=true "icon libraries")](https://badge.wtto00.now.sh/api/badge/icon/libraries?icon=libraries&label) [![icon now](https://github.com/wtto00/badge/blob/master/docs/images/icons/now.png?raw=true "icon now")](https://badge.wtto00.now.sh/api/badge/icon/now?icon=now&label) [![icon npm](https://github.com/wtto00/badge/blob/master/docs/images/icons/npm.png?raw=true "icon npm")](https://badge.wtto00.now.sh/api/badge/icon/npm?icon=npm&label) [![icon nuget](https://github.com/wtto00/badge/blob/master/docs/images/icons/nuget.png?raw=true "icon nuget")](https://badge.wtto00.now.sh/api/badge/icon/nuget?icon=nuget&label) [![icon patreon](https://github.com/wtto00/badge/blob/master/docs/images/icons/patreon.png?raw=true "icon patreon")](https://badge.wtto00.now.sh/api/badge/icon/patreon?icon=patreon&label) [![icon postgresql](https://github.com/wtto00/badge/blob/master/docs/images/icons/postgresql.png?raw=true "icon postgresql")](https://badge.wtto00.now.sh/api/badge/icon/postgresql?icon=postgresql&label) [![icon rss](https://github.com/wtto00/badge/blob/master/docs/images/icons/rss.png?raw=true "icon rss")](https://badge.wtto00.now.sh/api/badge/icon/rss?icon=rss&label) [![icon ruby](https://github.com/wtto00/badge/blob/master/docs/images/icons/ruby.png?raw=true "icon ruby")](https://badge.wtto00.now.sh/api/badge/icon/ruby?icon=ruby&label) [![icon scrutinizer](https://github.com/wtto00/badge/blob/master/docs/images/icons/scrutinizer.png?raw=true "icon scrutinizer")](https://badge.wtto00.now.sh/api/badge/icon/scrutinizer?icon=scrutinizer&label) [![icon slack](https://github.com/wtto00/badge/blob/master/docs/images/icons/slack.png?raw=true "icon slack")](https://badge.wtto00.now.sh/api/badge/icon/slack?icon=slack&label) [![icon sourcegraph](https://github.com/wtto00/badge/blob/master/docs/images/icons/sourcegraph.png?raw=true "icon sourcegraph")](https://badge.wtto00.now.sh/api/badge/icon/sourcegraph?icon=sourcegraph&label) [![icon telegram](https://github.com/wtto00/badge/blob/master/docs/images/icons/telegram.png?raw=true "icon telegram")](https://badge.wtto00.now.sh/api/badge/icon/telegram?icon=telegram&label) [![icon terminal](https://github.com/wtto00/badge/blob/master/docs/images/icons/terminal.png?raw=true "icon terminal")](https://badge.wtto00.now.sh/api/badge/icon/terminal?icon=terminal&label) [![icon terraform](https://github.com/wtto00/badge/blob/master/docs/images/icons/terraform.png?raw=true "icon terraform")](https://badge.wtto00.now.sh/api/badge/icon/terraform?icon=terraform&label) [![icon travis](https://github.com/wtto00/badge/blob/master/docs/images/icons/travis.png?raw=true "icon travis")](https://badge.wtto00.now.sh/api/badge/icon/travis?icon=travis&label) [![icon twitter](https://github.com/wtto00/badge/blob/master/docs/images/icons/twitter.png?raw=true "icon twitter")](https://badge.wtto00.now.sh/api/badge/icon/twitter?icon=twitter&label) [![icon typescript](https://github.com/wtto00/badge/blob/master/docs/images/icons/typescript.png?raw=true "icon typescript")](https://badge.wtto00.now.sh/api/badge/icon/typescript?icon=typescript&label) [![icon windows](https://github.com/wtto00/badge/blob/master/docs/images/icons/windows.png?raw=true "icon windows")](https://badge.wtto00.now.sh/api/badge/icon/windows?icon=windows&label) [![icon zeit](https://github.com/wtto00/badge/blob/master/docs/images/icons/zeit.png?raw=true "icon zeit")](https://badge.wtto00.now.sh/api/badge/icon/zeit?icon=zeit&label)
- **选项**
  1. `color` 覆盖默认的徽章颜色  
     例如：`https://badge.wtto00.now.sh/api/badge/release/v1.0.2/cyan?color=black`  
     [![options color](https://github.com/wtto00/badge/blob/master/docs/images/options/options-color.png?raw=true "options color")](https://badge.wtto00.now.sh/api/badge/release/v1.0.2/cyan?color=black)
  2. `icon` 在主题 `subject` 中添加图标  
     例如：`https://badge.wtto00.now.sh/api/badge/release/v1.0.2/cyan?color=black&icon=github`  
     [![options icon](https://github.com/wtto00/badge/blob/master/docs/images/options/options-icon.png?raw=true "options icon")](https://badge.wtto00.now.sh/api/badge/release/v1.0.2/cyan?color=black&icon=github)
  3. `label` 覆盖主题 `subject` 中的文本  
     例如：`https://badge.wtto00.now.sh/api/badge/release/GitHub/cyan?color=black&icon=github&label`  
     [![options label](https://github.com/wtto00/badge/blob/master/docs/images/options/options-label.png?raw=true "options label")](https://badge.wtto00.now.sh/api/badge/icon/GitHub/black?icon=github&label)

## 计划

1. [x] `readme` `svg` → `png`
1. [x] color list not use ul>li, just list
1. [x] 首页使用 `getStaticPaths` & `getStaticProps` 预加载
1. [x] 访问 `https://badge.wtto00.now.sh/api/badge/:subject/:status` 默认蓝色，不报错
1. [x] `icon` 渲染
1. [ ] 单独的 icon 描述渲染，`subject` 参数值为 `icon`
1. [ ] `gitee` `api`
1. [ ] `github` `api`
1. [ ] `npm` `api`
1. [ ] `packagist` `api`
1. [ ] `pypi` `api`
1. [ ] ...

## 问题

1. `nodejs` 获取字体宽度的问题
   - 使用 [canvas](https://www.npmjs.com/package/canvas#quick-example) 中的 `measureText` 方法测量字符串显示宽度。  
     **但是** 在不同系统得到的结果是不同的，[查看 issues #782](https://github.com/Automattic/node-canvas/issues/782)
   - 使用 [text-to-svg](https://www.npmjs.com/package/text-to-svg#texttosvggetmetricstext-option--) 中的 `getMetrics` 方法测量字符串显示宽度。  
     **但是** 在这个插件中，每个字符的宽度是相等的，实际上 `a` 和 `b` 的显示宽度是不相等的。这就导致一些稍宽的字符，在测量出来的宽度中显示的很挤。

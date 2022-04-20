<center>
  <h1>badge</h1>
<p>
  <a href="https://github.com/wtto00/badge" aria-label="github" target="_blank">
    <img src="https://badg.vercel.app/badge/release/GitHub/black?icon=github&label&scale=1.2" alt="github" />
  </a>
  <a href="https://gitee.com/wtto00/badge" aria-label="gitee" target="_black">
    <img src="https://badg.vercel.app/badge/release/Gitee/orange?icon=gitee&label&scale=1.2" alt="gitee" />
  </a>
  <a a href="https://badg.vercel.app" aria-label="vercel" target="_blank">
    <img src="https://badg.vercel.app/badge/icon/My Site/cyan?icon=badg&label&scale=1.2" alt="vercel" />
  </a>
</p>
</center>

生成徽章服务。  
使用 [Next.js](https://nextjs.org/) 框架开发，[vercel](https://vercel.com/) 自动化云部署.

# 使用

### 自定义徽章

```
https://badg.vercel.app/badge/:subject/:status[/:color]?icon=github
                   ------|--------|-------|------|-----------
                     |       |       |       |        |
                     |       |       |       |       选项(icon,color,label,list,labelColor,scale)
                     |       |       |      颜色
                     |       |      状态
                     |      主题
                 自定义Badge
```

- **可选颜色**  
  [![blue](https://badg.vercel.app/badge/color/blue/blue 'color blue')](https://badg.vercel.app/badge/color/blue/blue) [![cyan](https://badg.vercel.app/badge/color/cyan/cyan 'color cyan')](https://badg.vercel.app/badge/color/cyan/cyan) [![green](https://badg.vercel.app/badge/color/green/green 'color green')](https://badg.vercel.app/badge/color/green/green) [![yellow](https://badg.vercel.app/badge/color/yellow/yellow 'color yellow')](https://badg.vercel.app/badge/color/yellow/yellow) [![orange](https://badg.vercel.app/badge/color/orange/orange 'color orange')](https://badg.vercel.app/badge/color/orange/orange) [![red](https://badg.vercel.app/badge/color/red/red 'color red')](https://badg.vercel.app/badge/color/red/red) [![pink](https://badg.vercel.app/badge/color/pink/pink 'color pink')](https://badg.vercel.app/badge/color/pink/pink) [![purple](https://badg.vercel.app/badge/color/purple/purple 'color purple')](https://badg.vercel.app/badge/color/purple/purple) [![grey](https://badg.vercel.app/badge/color/grey/grey 'color grey')](https://badg.vercel.app/badge/color/grey/grey) [![black](https://badg.vercel.app/badge/color/black/black 'color black')](https://badg.vercel.app/badge/color/black/black)
  > 其他颜色参数或无颜色参数将显示默认颜色 `blue`
- **可选图标**  
  [![icon airbnb](https://badg.vercel.app/badge/icon/airbnb?icon=airbnb&label 'icon airbnb')](https://badg.vercel.app/badge/icon/airbnb?icon=airbnb&label) [![icon alipay](https://badg.vercel.app/badge/icon/alipay?icon=alipay&label 'icon alipay')](https://badg.vercel.app/badge/icon/alipay?icon=alipay&label) [![icon aliwangwang](https://badg.vercel.app/badge/icon/aliwangwang?icon=aliwangwang&label 'icon aliwangwang')](https://badg.vercel.app/badge/icon/aliwangwang?icon=aliwangwang&label) [![icon aliyun](https://badg.vercel.app/badge/icon/aliyun?icon=aliyun&label 'icon aliyun')](https://badg.vercel.app/badge/icon/aliyun?icon=aliyun&label) [![icon amazon](https://badg.vercel.app/badge/icon/amazon?icon=amazon&label 'icon amazon')](https://badg.vercel.app/badge/icon/amazon?icon=amazon&label) [![icon android](https://badg.vercel.app/badge/icon/android?icon=android&label 'icon android')](https://badg.vercel.app/badge/icon/android?icon=android&label) [![icon antd](https://badg.vercel.app/badge/icon/antd?icon=antd&label 'icon antd')](https://badg.vercel.app/badge/icon/antd?icon=antd&label) [![icon apple](https://badg.vercel.app/badge/icon/apple?icon=apple&label 'icon apple')](https://badg.vercel.app/badge/icon/apple?icon=apple&label) [![icon appveyor](https://badg.vercel.app/badge/icon/appveyor?icon=appveyor&label 'icon appveyor')](https://badg.vercel.app/badge/icon/appveyor?icon=appveyor&label) [![icon atom](https://badg.vercel.app/badge/icon/atom?icon=atom&label 'icon atom')](https://badg.vercel.app/badge/icon/atom?icon=atom&label) [![icon awesome](https://badg.vercel.app/badge/icon/awesome?icon=awesome&label 'icon awesome')](https://badg.vercel.app/badge/icon/awesome?icon=awesome&label) [![icon behance](https://badg.vercel.app/badge/icon/behance?icon=behance&label 'icon behance')](https://badg.vercel.app/badge/icon/behance?icon=behance&label) [![icon bitcoin-lightning](https://badg.vercel.app/badge/icon/bitcoin-lightning?icon=bitcoin-lightning&label 'icon bitcoin-lightning')](https://badg.vercel.app/badge/icon/bitcoin-lightning?icon=bitcoin-lightning&label) [![icon bitcoin](https://badg.vercel.app/badge/icon/bitcoin?icon=bitcoin&label 'icon bitcoin')](https://badg.vercel.app/badge/icon/bitcoin?icon=bitcoin&label) [![icon chrome](https://badg.vercel.app/badge/icon/chrome?icon=chrome&label 'icon chrome')](https://badg.vercel.app/badge/icon/chrome?icon=chrome&label) [![icon circleci](https://badg.vercel.app/badge/icon/circleci?icon=circleci&label 'icon circleci')](https://badg.vercel.app/badge/icon/circleci?icon=circleci&label) [![icon code-sandbox](https://badg.vercel.app/badge/icon/code-sandbox?icon=code-sandbox&label 'icon code-sandbox')](https://badg.vercel.app/badge/icon/code-sandbox?icon=code-sandbox&label) [![icon codebeat](https://badg.vercel.app/badge/icon/codebeat?icon=codebeat&label 'icon codebeat')](https://badg.vercel.app/badge/icon/codebeat?icon=codebeat&label) [![icon codeclimate](https://badg.vercel.app/badge/icon/codeclimate?icon=codeclimate&label 'icon codeclimate')](https://badg.vercel.app/badge/icon/codeclimate?icon=codeclimate&label) [![icon codecov](https://badg.vercel.app/badge/icon/codecov?icon=codecov&label 'icon codecov')](https://badg.vercel.app/badge/icon/codecov?icon=codecov&label) [![icon codepen](https://badg.vercel.app/badge/icon/codepen?icon=codepen&label 'icon codepen')](https://badg.vercel.app/badge/icon/codepen?icon=codepen&label) [![icon codeship](https://badg.vercel.app/badge/icon/codeship?icon=codeship&label 'icon codeship')](https://badg.vercel.app/badge/icon/codeship?icon=codeship&label) [![icon commonwl](https://badg.vercel.app/badge/icon/commonwl?icon=commonwl&label 'icon commonwl')](https://badg.vercel.app/badge/icon/commonwl?icon=commonwl&label) [![icon deepscan](https://badg.vercel.app/badge/icon/deepscan?icon=deepscan&label 'icon deepscan')](https://badg.vercel.app/badge/icon/deepscan?icon=deepscan&label) [![icon dependabot](https://badg.vercel.app/badge/icon/dependabot?icon=dependabot&label 'icon dependabot')](https://badg.vercel.app/badge/icon/dependabot?icon=dependabot&label) [![icon dingding](https://badg.vercel.app/badge/icon/dingding?icon=dingding&label 'icon dingding')](https://badg.vercel.app/badge/icon/dingding?icon=dingding&label) [![icon discord](https://badg.vercel.app/badge/icon/discord?icon=discord&label 'icon discord')](https://badg.vercel.app/badge/icon/discord?icon=discord&label) [![icon dockbit](https://badg.vercel.app/badge/icon/dockbit?icon=dockbit&label 'icon dockbit')](https://badg.vercel.app/badge/icon/dockbit?icon=dockbit&label) [![icon docker](https://badg.vercel.app/badge/icon/docker?icon=docker&label 'icon docker')](https://badg.vercel.app/badge/icon/docker?icon=docker&label) [![icon dropbox](https://badg.vercel.app/badge/icon/dropbox?icon=dropbox&label 'icon dropbox')](https://badg.vercel.app/badge/icon/dropbox?icon=dropbox&label) [![icon eclipse](https://badg.vercel.app/badge/icon/eclipse?icon=eclipse&label 'icon eclipse')](https://badg.vercel.app/badge/icon/eclipse?icon=eclipse&label) [![icon email](https://badg.vercel.app/badge/icon/email?icon=email&label 'icon email')](https://badg.vercel.app/badge/icon/email?icon=email&label) [![icon facebook](https://badg.vercel.app/badge/icon/facebook?icon=facebook&label 'icon facebook')](https://badg.vercel.app/badge/icon/facebook?icon=facebook&label) [![icon firefox](https://badg.vercel.app/badge/icon/firefox?icon=firefox&label 'icon firefox')](https://badg.vercel.app/badge/icon/firefox?icon=firefox&label) [![icon flow](https://badg.vercel.app/badge/icon/flow?icon=flow&label 'icon flow')](https://badg.vercel.app/badge/icon/flow?icon=flow&label) [![icon git](https://badg.vercel.app/badge/icon/git?icon=git&label 'icon git')](https://badg.vercel.app/badge/icon/git?icon=git&label) [![icon gitee](https://badg.vercel.app/badge/icon/gitee?icon=gitee&label 'icon gitee')](https://badg.vercel.app/badge/icon/gitee?icon=gitee&label) [![icon github](https://badg.vercel.app/badge/icon/github?icon=github&label 'icon github')](https://badg.vercel.app/badge/icon/github?icon=github&label) [![icon gitlab](https://badg.vercel.app/badge/icon/gitlab?icon=gitlab&label 'icon gitlab')](https://badg.vercel.app/badge/icon/gitlab?icon=gitlab&label) [![icon gitter](https://badg.vercel.app/badge/icon/gitter?icon=gitter&label 'icon gitter')](https://badg.vercel.app/badge/icon/gitter?icon=gitter&label) [![icon google-plus](https://badg.vercel.app/badge/icon/google-plus?icon=google-plus&label 'icon google-plus')](https://badg.vercel.app/badge/icon/google-plus?icon=google-plus&label) [![icon googleplay](https://badg.vercel.app/badge/icon/googleplay?icon=googleplay&label 'icon googleplay')](https://badg.vercel.app/badge/icon/googleplay?icon=googleplay&label) [![icon graphql](https://badg.vercel.app/badge/icon/graphql?icon=graphql&label 'icon graphql')](https://badg.vercel.app/badge/icon/graphql?icon=graphql&label) [![icon haskell](https://badg.vercel.app/badge/icon/haskell?icon=haskell&label 'icon haskell')](https://badg.vercel.app/badge/icon/haskell?icon=haskell&label) [![icon instagram](https://badg.vercel.app/badge/icon/instagram?icon=instagram&label 'icon instagram')](https://badg.vercel.app/badge/icon/instagram?icon=instagram&label) [![icon kofi](https://badg.vercel.app/badge/icon/kofi?icon=kofi&label 'icon kofi')](https://badg.vercel.app/badge/icon/kofi?icon=kofi&label) [![icon lgtm](https://badg.vercel.app/badge/icon/lgtm?icon=lgtm&label 'icon lgtm')](https://badg.vercel.app/badge/icon/lgtm?icon=lgtm&label) [![icon libraries](https://badg.vercel.app/badge/icon/libraries?icon=libraries&label 'icon libraries')](https://badg.vercel.app/badge/icon/libraries?icon=libraries&label) [![icon linkedin](https://badg.vercel.app/badge/icon/linkedin?icon=linkedin&label 'icon linkedin')](https://badg.vercel.app/badge/icon/linkedin?icon=linkedin&label) [![icon now](https://badg.vercel.app/badge/icon/now?icon=now&label 'icon now')](https://badg.vercel.app/badge/icon/now?icon=now&label) [![icon npm](https://badg.vercel.app/badge/icon/npm?icon=npm&label 'icon npm')](https://badg.vercel.app/badge/icon/npm?icon=npm&label) [![icon nuget](https://badg.vercel.app/badge/icon/nuget?icon=nuget&label 'icon nuget')](https://badg.vercel.app/badge/icon/nuget?icon=nuget&label) [![icon patreon](https://badg.vercel.app/badge/icon/patreon?icon=patreon&label 'icon patreon')](https://badg.vercel.app/badge/icon/patreon?icon=patreon&label) [![icon phone](https://badg.vercel.app/badge/icon/phone?icon=phone&label 'icon phone')](https://badg.vercel.app/badge/icon/phone?icon=phone&label) [![icon postgresql](https://badg.vercel.app/badge/icon/postgresql?icon=postgresql&label 'icon postgresql')](https://badg.vercel.app/badge/icon/postgresql?icon=postgresql&label) [![icon qq](https://badg.vercel.app/badge/icon/qq?icon=qq&label 'icon qq')](https://badg.vercel.app/badge/icon/qq?icon=qq&label) [![icon rss](https://badg.vercel.app/badge/icon/rss?icon=rss&label 'icon rss')](https://badg.vercel.app/badge/icon/rss?icon=rss&label) [![icon ruby](https://badg.vercel.app/badge/icon/ruby?icon=ruby&label 'icon ruby')](https://badg.vercel.app/badge/icon/ruby?icon=ruby&label) [![icon scrutinizer](https://badg.vercel.app/badge/icon/scrutinizer?icon=scrutinizer&label 'icon scrutinizer')](https://badg.vercel.app/badge/icon/scrutinizer?icon=scrutinizer&label) [![icon segmentfault](https://badg.vercel.app/badge/icon/segmentfault?icon=segmentfault&label 'icon segmentfault')](https://badg.vercel.app/badge/icon/segmentfault?icon=segmentfault&label) [![icon sketch](https://badg.vercel.app/badge/icon/sketch?icon=sketch&label 'icon sketch')](https://badg.vercel.app/badge/icon/sketch?icon=sketch&label) [![icon skype](https://badg.vercel.app/badge/icon/skype?icon=skype&label 'icon skype')](https://badg.vercel.app/badge/icon/skype?icon=skype&label) [![icon slack](https://badg.vercel.app/badge/icon/slack?icon=slack&label 'icon slack')](https://badg.vercel.app/badge/icon/slack?icon=slack&label) [![icon sourcegraph](https://badg.vercel.app/badge/icon/sourcegraph?icon=sourcegraph&label 'icon sourcegraph')](https://badg.vercel.app/badge/icon/sourcegraph?icon=sourcegraph&label) [![icon stackoverflow](https://badg.vercel.app/badge/icon/stackoverflow?icon=stackoverflow&label 'icon stackoverflow')](https://badg.vercel.app/badge/icon/stackoverflow?icon=stackoverflow&label) [![icon telegram](https://badg.vercel.app/badge/icon/telegram?icon=telegram&label 'icon telegram')](https://badg.vercel.app/badge/icon/telegram?icon=telegram&label) [![icon terminal](https://badg.vercel.app/badge/icon/terminal?icon=terminal&label 'icon terminal')](https://badg.vercel.app/badge/icon/terminal?icon=terminal&label) [![icon terraform](https://badg.vercel.app/badge/icon/terraform?icon=terraform&label 'icon terraform')](https://badg.vercel.app/badge/icon/terraform?icon=terraform&label) [![icon travis](https://badg.vercel.app/badge/icon/travis?icon=travis&label 'icon travis')](https://badg.vercel.app/badge/icon/travis?icon=travis&label) [![icon twitter](https://badg.vercel.app/badge/icon/twitter?icon=twitter&label 'icon twitter')](https://badg.vercel.app/badge/icon/twitter?icon=twitter&label) [![icon typescript](https://badg.vercel.app/badge/icon/typescript?icon=typescript&label 'icon typescript')](https://badg.vercel.app/badge/icon/typescript?icon=typescript&label) [![icon wechat](https://badg.vercel.app/badge/icon/wechat?icon=wechat&label 'icon wechat')](https://badg.vercel.app/badge/icon/wechat?icon=wechat&label) [![icon weibo](https://badg.vercel.app/badge/icon/weibo?icon=weibo&label 'icon weibo')](https://badg.vercel.app/badge/icon/weibo?icon=weibo&label) [![icon windows](https://badg.vercel.app/badge/icon/windows?icon=windows&label 'icon windows')](https://badg.vercel.app/badge/icon/windows?icon=windows&label) [![icon youtube](https://badg.vercel.app/badge/icon/youtube?icon=youtube&label 'icon youtube')](https://badg.vercel.app/badge/icon/youtube?icon=youtube&label) [![icon yuque](https://badg.vercel.app/badge/icon/yuque?icon=yuque&label 'icon yuque')](https://badg.vercel.app/badge/icon/yuque?icon=yuque&label) [![icon zeit](https://badg.vercel.app/badge/icon/zeit?icon=zeit&label 'icon zeit')](https://badg.vercel.app/badge/icon/zeit?icon=zeit&label) [![icon zhihu](https://badg.vercel.app/badge/icon/zhihu?icon=zhihu&label 'icon zhihu')](https://badg.vercel.app/badge/icon/zhihu?icon=zhihu&label)
- **选项**

  - `color` 徽章颜色  
    例如：`https://badg.vercel.app/badge/release/v1.0.2?color=black`  
    [![options color](https://badg.vercel.app/badge/release/v1.0.2?color=black 'options color')](https://badg.vercel.app/badge/release/v1.0.2?color=black)

    > 当 `path` 中的 `color` 参数以及 `query` 中的 `color` 参数同时存在时，`path` 中的 `color` 优先  
    > 例如 `https://badg.vercel.app/badge/release/v1.0.2/orange?color=black` 将显示 `orange`颜色  
    > [![options color](https://badg.vercel.app/badge/release/v1.0.2/orange?color=black 'options color')](https://badg.vercel.app/badge/release/v1.0.2/orange?color=black)

  - `icon` 在主题 `subject` 中添加图标  
    例如：`https://badg.vercel.app/badge/release/v1.0.2/cyan?color=black&icon=github`  
    [![options icon](https://badg.vercel.app/badge/release/v1.0.2/cyan?color=black&icon=github 'options icon')](https://badg.vercel.app/badge/release/v1.0.2/cyan?color=black&icon=github)

    > 可选值如上 **可选图标** 所示，非以上可选值的参数值将无效并不显示

  - `list` 设置 `list=|`， 将会用 `|` 代替状态 `status` 中的 `,`  
    例如：`https://badg.vercel.app/badge/platform/ios,macos,tvos?list=|`  
    [![options list](https://badg.vercel.app/badge/platform/ios,macos,tvos?list=| 'options label')](https://badg.vercel.app/badge/platform/ios,macos,tvos?list=|)
  - `label` 覆盖主题 `subject` 中的文本  
    例如：`https://badg.vercel.app/badge/release/GitHub/cyan?color=black&icon=github&label`  
    [![options label](https://badg.vercel.app/badge/release/GitHub/cyan?color=black&icon=github&label 'options label')](https://badg.vercel.app/badge/icon/GitHub/cyan?color=black&icon=github&label)
  - `labelColor` 覆盖主题 `subject` 的背景色  
    例如：`https://badg.vercel.app/badge/release/★★★☆☆/cyan?labelColor=pink`  
    [![options labelColor](https://badg.vercel.app/badge/release/★★★☆☆/cyan?labelColor=pink 'options labelColor')](https://badg.vercel.app/badge/release/★★★☆☆/cyan?labelColor=pink)
  - `scale` 自定义缩放大小  
    例如：`https://badg.vercel.app/badge/docker/v1.2.3/blue?icon=docker&scale=2`  
    [![options scale](https://badg.vercel.app/badge/docker/v1.2.3/blue?icon=docker&scale=2 'options scale')](https://badg.vercel.app/badge/docker/v1.2.3/blue?icon=docker&scale=2)

### Gitee Api

```
https://badg.vercel.app/gitee/:subject/:owner/:repo?icon&color
                   ------|--------|------|-----|-----------
                     |       |       |     |        |
                     |       |       |     |     选项(icon,color,label,list,labelColor,scale)
                     |       |       |  仓库名称
                     |       |   仓库所有者
                     |      主题
                 Gitee Api
```

- **选项**
  参数同`自定义徽章`：`color`,`icon`,`list`,`label`,`labelColor`,`scale`。
- **用法**  
  如下表所列出所有的用法。地址前缀：`https://badg.vercel.app`  
  |说明|地址|效果|
  |---:|:---|:---|
  |latest release|[/gitee/release/wtto00/dt-read](https://badg.vercel.app/gitee/release/wtto00/dt-read)|![latest release](https://badg.vercel.app/gitee/release/wtto00/dt-read 'latest release')|
  |latest stable release|[/gitee/release/running-elephant/datart/stable](https://badg.vercel.app/gitee/release/running-elephant/datart/stable)|![latest stable release](https://badg.vercel.app/gitee/release/running-elephant/datart/stable 'latest stable release')|
  |latest tag|[/gitee/tag/wtto00/Aliyun-oss-storage](https://badg.vercel.app/gitee/tag/wtto00/Aliyun-oss-storage)|![latest tag](https://badg.vercel.app/gitee/tag/wtto00/Aliyun-oss-storage 'latest tag')
  |watchers|[/gitee/watchers/wtto00/dt-read](https://badg.vercel.app/gitee/watchers/wtto00/dt-read)|![watchers](https://badg.vercel.app/gitee/watchers/wtto00/dt-read 'watchers')|
  |stars|[/gitee/stars/wtto00/dt-read](https://badg.vercel.app/gitee/stars/wtto00/dt-read)|![stars](https://badg.vercel.app/gitee/stars/wtto00/dt-read 'stars')|
  |forks|[/gitee/forks/wtto00/dt-read](https://badg.vercel.app/gitee/forks/wtto00/dt-read)|![forks](https://badg.vercel.app/gitee/forks/wtto00/dt-read 'forks')|
  |issues|[/gitee/issues/smallweigit/avue](https://badg.vercel.app/gitee/issues/smallweigit/avue)|![issues](https://badg.vercel.app/gitee/issues/smallweigit/avue 'issues')
  |open issues|[/gitee/open-issues/smallweigit/avue](https://badg.vercel.app/gitee/open-issues/smallweigit/avue)|![open-issues](https://badg.vercel.app/gitee/open-issues/smallweigit/avue 'open-issues')|
  |closed issues|[/gitee/closed-issues/smallweigit/avue](https://badg.vercel.app/gitee/closed-issues/smallweigit/avue)|![closed issues](https://badg.vercel.app/gitee/closed-issues/smallweigit/avue 'closed issues')|
  |issues by label|[/gitee/label-issues/smallweigit/avue/bug](https://badg.vercel.app/gitee/label-issues/smallweigit/avue/bug)|![issues by label](https://badg.vercel.app/gitee/label-issues/smallweigit/avue/bug 'issues by label')|
  |open issues by label|[/gitee/open-label-issues/smallweigit/avue/bug](https://badg.vercel.app/gitee/open-label-issues/smallweigit/avue/bug)|![open issues by label](https://badg.vercel.app/gitee/open-label-issues/smallweigit/avue/bug 'open issues by label')|
  |closed issues by label|[/gitee/closed-label-issues/smallweigit/avue/bug](https://badg.vercel.app/gitee/closed-label-issues/smallweigit/avue/bug)|![closed issues by label](https://badg.vercel.app/gitee/closed-label-issues/smallweigit/avue/bug 'closed issues by label')|
  |PRs|[/gitee/prs/sentsin/layui](https://badg.vercel.app/gitee/prs/sentsin/layui)|![PRs](https://badg.vercel.app/gitee/prs/sentsin/layui 'PRs')|
  |open PRs|[/gitee/open-prs/sentsin/layui](https://badg.vercel.app/gitee/open-prs/sentsin/layui)|![open PRs](https://badg.vercel.app/gitee/open-prs/sentsin/layui 'open PRs')|
  |closed PRs|[/gitee/closed-prs/sentsin/layui](https://badg.vercel.app/gitee/closed-prs/sentsin/layui)|![closed PRs](https://badg.vercel.app/gitee/closed-prs/sentsin/layui 'closed PRs')|
  |merged PRs|[/gitee/merged-prs/sentsin/layui](https://badg.vercel.app/gitee/merged-prs/sentsin/layui)|![merged PRs](https://badg.vercel.app/gitee/merged-prs/sentsin/layui 'merged PRs')|
  |milestone percentage|[/gitee/milestones/smallweigit/avue/v2.5.1](https://badg.vercel.app/gitee/milestones/smallweigit/avue/v2.5.1)|![milestone percentage](https://badg.vercel.app/gitee/milestones/smallweigit/avue/v2.5.1 'milestone percentage')|
  |commits count|[/gitee/commits/smallweigit/avue](https://badg.vercel.app/gitee/commits/smallweigit/avue)|![commits count](https://badg.vercel.app/gitee/commits/smallweigit/avue 'commits count')|
  |commits count (branch ref)|[/gitee/commits/smallweigit/avue/dev](https://badg.vercel.app/gitee/commits/smallweigit/avue/dev)|![commits count (branch ref)](https://badg.vercel.app/gitee/commits/smallweigit/avue/dev 'commits count (branch ref)')|
  |commits count (tag ref)|[/gitee/commits/smallweigit/avue/v2.4.1](https://badg.vercel.app/gitee/commits/smallweigit/avue/v2.4.1)|![commits count (tag ref)](https://badg.vercel.app/gitee/commits/smallweigit/avue/v2.4.1 'commits count (tag ref)')|
  |last commit|[/gitee/last-commit/wtto00/dt-read](https://badg.vercel.app/gitee/last-commit/wtto00/dt-read)|![last commit](https://badg.vercel.app/gitee/last-commit/wtto00/dt-read 'last commit')|
  |last commit (branch ref)|[/gitee/last-commit-branch/smallweigit/avue/dev](https://badg.vercel.app/gitee/last-commit-branch/smallweigit/avue/dev)|![last commit (branch ref)](https://badg.vercel.app/gitee/last-commit-branch/smallweigit/avue/dev 'last commit (branch ref)')|
  |last commit (tag ref)|[/gitee/last-commit-tag/smallweigit/avue/v2.4.1](https://badg.vercel.app/gitee/last-commit-tag/smallweigit/avue/v2.4.1)|![last commit (tag ref)](https://badg.vercel.app/gitee/last-commit-tag/smallweigit/avue/v2.4.1 'last commit (tag ref)')|
  |branches|[/gitee/branches/wtto00/dt-read](https://badg.vercel.app/gitee/branches/wtto00/dt-read)|![branches](https://badg.vercel.app/gitee/branches/wtto00/dt-read 'branches')|
  |releases|[/gitee/releases/wtto00/dt-read](https://badg.vercel.app/gitee/releases/wtto00/dt-read)|![releases](https://badg.vercel.app/gitee/releases/wtto00/dt-read 'releases')|
  |tags|[/gitee/tags/wtto00/dt-read](https://badg.vercel.app/gitee/tags/wtto00/dt-read)|![tags](https://badg.vercel.app/gitee/tags/wtto00/dt-read 'tags')|
  |license|[/gitee/license/wtto00/dt-read](https://badg.vercel.app/gitee/license/wtto00/dt-read)|![license](https://badg.vercel.app/gitee/license/wtto00/dt-read 'license')|
  |contributors|[/gitee/contributors/smallweigit/avue](https://badg.vercel.app/gitee/contributors/smallweigit/avue)|![contributors](https://badg.vercel.app/gitee/contributors/smallweigit/avue 'contributors')|

# 问题

1. `nodejs` 获取字体宽度的问题
   - 使用 [canvas](https://www.npmjs.com/package/canvas#quick-example) 中的 `measureText` 方法测量字符串显示宽度。  
     **但是** 在不同系统得到的结果是不同的，[查看 issues #782](https://github.com/Automattic/node-canvas/issues/782)
   - 使用 [text-to-svg](https://www.npmjs.com/package/text-to-svg#texttosvggetmetricstext-option--) 中的 `getMetrics` 方法测量字符串显示宽度。  
     **但是** 在这个插件中，每个字符的宽度是相等的，实际上 `a` 和 `b` 的显示宽度是不相等的。这就导致一些稍宽的字符，在测量出来的宽度中显示的很挤。

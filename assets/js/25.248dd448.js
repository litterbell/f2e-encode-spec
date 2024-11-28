(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{346:function(t,e,n){"use strict";n.r(e);var r=n(25),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"encode-f2elint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint"}},[t._v("#")]),t._v(" encode-f2elint")]),t._v(" "),e("p",[e("code",[t._v("encode-f2elint")]),t._v(" 是"),e("a",{attrs:{href:"https://encode-studio-fe.github.io/fe-spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bell 前端编码规范工程化"),e("OutboundLink")],1),t._v("的配套 Lint 工具，可以为项目一键接入规范、一键扫描和修复规范问题，保障项目的编码规范和代码质量。")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("我们引入了多个业界流行的 Linter，并根据规范内容定制了规则包，它们包括：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("规范")]),t._v(" "),e("th",[t._v("Lint 工具")]),t._v(" "),e("th",[t._v("npm 包")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("JavaScript 编码规范 "),e("br"),t._v(" TypeScript 编码规范 "),e("br"),t._v(" Node 编码规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-bell"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("CSS 编码规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/stylelint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-config-bell"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("Git 规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/commitlint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint-config-bell"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("文档规范")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://github.com/DavidAnson/markdownlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint"),e("OutboundLink")],1)]),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/markdownlint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint-config-bell"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("可以看到这些 "),e("code",[t._v("Linter")]),t._v(" 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入和升级成本都比较高。")]),t._v(" "),e("p",[e("code",[t._v("encode-f2elint")]),t._v(" 收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。")]),t._v(" "),e("h2",{attrs:{id:"cli-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-使用"}},[t._v("#")]),t._v(" CLI 使用")]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("在终端执行：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" encode-f2elint "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])])]),e("p",[t._v("安装完成后，可执行 "),e("code",[t._v("encode-f2elint -h")]),t._v(" 以验证安装成功。")]),t._v(" "),e("h3",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("h4",{attrs:{id:"encode-f2elint-init-一键接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint-init-一键接入"}},[t._v("#")]),t._v(" "),e("code",[t._v("encode-f2elint init")]),t._v("：一键接入")]),t._v(" "),e("p",[t._v("在项目根目录执行 "),e("code",[t._v("encode-f2elint init")]),t._v("，即可一键接入规范，为项目安装规范 "),e("code",[t._v("Lint")]),t._v(" 所需的依赖和配置。")]),t._v(" "),e("p",[t._v("具体会做以下事情：")]),t._v(" "),e("ul",[e("li",[t._v("安装各种依赖：包括 "),e("code",[t._v("Linter")]),t._v(" 依赖，如 "),e("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://github.com/DavidAnson/markdownlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint"),e("OutboundLink")],1),t._v(" 等；配置依赖，如 "),e("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-bell"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.npmjs.com/package/stylelint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-config-bell"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.npmjs.com/package/commitlint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint-config-bell"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.npmjs.com/package/markdownlint-config-bell",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdownlint-config-bell"),e("OutboundLink")],1),t._v(" 等")]),t._v(" "),e("li",[t._v("写入各种配置文件，包括：\n"),e("ul",[e("li",[e("code",[t._v(".eslintrc.js")]),t._v("、"),e("code",[t._v(".eslintignore")]),t._v("：ESLint 配置（继承 "),e("code",[t._v("eslint-config-bell")]),t._v("）及黑名单文件")]),t._v(" "),e("li",[e("code",[t._v(".stylelintrc.js")]),t._v("、"),e("code",[t._v(".stylelintignore")]),t._v("：stylelint 配置（继承 "),e("code",[t._v("stylelint-config-bell")]),t._v("）及黑名单文件")]),t._v(" "),e("li",[e("code",[t._v("commitlint.config.js")]),t._v("：commitlint 配置（继承 "),e("code",[t._v("commitlint-config-bell")]),t._v("）")]),t._v(" "),e("li",[e("code",[t._v(".markdownlint.json")]),t._v("、"),e("code",[t._v(".markdownlintignore")]),t._v("："),e("code",[t._v("markdownlint")]),t._v(" 配置及黑名单文件")]),t._v(" "),e("li",[e("code",[t._v(".prettierrc.js")]),t._v("：符合规范的 "),e("a",{attrs:{href:"https://prettier.io/docs/en/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier 配置"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v(".editorconfig")]),t._v("：符合规范的 "),e("a",{attrs:{href:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("editorconfig"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v(".vscode/extensions.json")]),t._v("：写入规范相关的 "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode 插件推荐"),e("OutboundLink")],1),t._v("，包括 "),e("code",[t._v("ESLint")]),t._v("、"),e("code",[t._v("stylelint")]),t._v("、"),e("code",[t._v("markdownlint")]),t._v("、"),e("code",[t._v("prettier")]),t._v(" 等")]),t._v(" "),e("li",[e("code",[t._v(".vscode/settings.json")]),t._v("：写入规范相关的 "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode 设置"),e("OutboundLink")],1),t._v("，设置 "),e("code",[t._v("ESLint")]),t._v(" 和 "),e("code",[t._v("stylelint")]),t._v(" 插件的 "),e("code",[t._v("validate")]),t._v(" 及"),e("strong",[t._v("保存时自动运行 fix")]),t._v("，如果选择使用 "),e("code",[t._v("Prettier")]),t._v("，会同时将 "),e("code",[t._v("prettier-vscode")]),t._v(" 插件设置为各前端语言的 defaultFormatter，并配置"),e("strong",[t._v("保存时自动格式化")])]),t._v(" "),e("li",[e("code",[t._v("encode-f2elint.config.js")]),t._v("encode-f2elint 包的一些配置，如启用的功能等")])])]),t._v(" "),e("li",[t._v("配置 git commit 卡口：使用 "),e("a",{attrs:{href:"https://www.npmjs.com/package/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 设置代码提交卡口，在 git commit 时会运行 "),e("code",[t._v("encode-f2elint commit-file-scan")]),t._v(" 和 "),e("code",[t._v("encode-f2elint commit-msg-scan")]),t._v(" 分别对提交文件和提交信息进行规范检查。"),e("code",[t._v("encode-f2elint commit-file-scan")]),t._v(" 默认仅对 error 问题卡口，如果你想对 warn 问题也卡口，可以增加 "),e("code",[t._v("--strict")]),t._v(" 参数以开启严格模式")])]),t._v(" "),e("blockquote",[e("p",[t._v("注 1：如果项目已经配置过 ESLint、stylelint 等 Linter，执行 "),e("code",[t._v("encode-f2elint init")]),t._v(" 将会提示存在冲突的依赖和配置，并在得到确认后进行覆盖：")]),t._v(" "),e("p",[t._v("注 2：如果项目的 .vscode/ 目录被 .gitignore 忽略，可以在拉取项目后单独执行 "),e("code",[t._v("encode-f2elint init --vscode")]),t._v(" 命令写入 "),e("code",[t._v(".vscode/extensions.json")]),t._v(" 和 "),e("code",[t._v(".vscode/settings.json")]),t._v(" 配置文件")])]),t._v(" "),e("h4",{attrs:{id:"encode-f2elint-scan-一键扫描"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint-scan-一键扫描"}},[t._v("#")]),t._v(" "),e("code",[t._v("encode-f2elint scan")]),t._v("：一键扫描")]),t._v(" "),e("p",[t._v("在项目的根目录执行命令，即可扫描项目的规范问题：")]),t._v(" "),e("p",[t._v("支持下列参数：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-q")]),t._v(" "),e("code",[t._v("--quiet")]),t._v(" 仅报告 error 级别的问题")]),t._v(" "),e("li",[e("code",[t._v("-o")]),t._v(" "),e("code",[t._v("--output-report")]),t._v(" 输出扫描出的规范问题日志")]),t._v(" "),e("li",[e("code",[t._v("-i")]),t._v(" "),e("code",[t._v("--include <dirpath>")]),t._v(" 指定要进行规范扫描的目录")]),t._v(" "),e("li",[e("code",[t._v("--no-ignore")]),t._v(" 忽略 eslint 的 ignore 配置文件和 ignore 规则")])]),t._v(" "),e("blockquote",[e("p",[t._v("注 1：事实上，你可以在任意目录执行 "),e("code",[t._v("encode-f2elint scan")]),t._v(" "),e("code",[t._v("encode-f2elint")]),t._v(" 会根据文件类型、JSON 等特征嗅探项目类型。但我们还是推荐在执行过 "),e("code",[t._v("encode-f2elint init")]),t._v(" 的项目根目录执行 "),e("code",[t._v("encode-f2elint scan")]),t._v("，以得到最准确的扫描结果。")]),t._v(" "),e("p",[t._v("注 2: "),e("code",[t._v("encode-f2elint")]),t._v(" 会根据项目内有无 eslint 和 stylelint 配置文件判断使用项目的配置文件还是 "),e("code",[t._v("encode-f2elint")]),t._v(" 默认配置进行扫描。若使用项目的，在未安装依赖时会帮其安装（执行 npm i）。若使用项目配置扫描失败，则使用默认配置扫描")])]),t._v(" "),e("h4",{attrs:{id:"encode-f2elint-fix-一键修复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint-fix-一键修复"}},[t._v("#")]),t._v(" "),e("code",[t._v("encode-f2elint fix")]),t._v("：一键修复")]),t._v(" "),e("p",[t._v("在项目的根目录执行命令，即可修复部分规范问题：")]),t._v(" "),e("p",[t._v("支持下列参数：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-i")]),t._v(" "),e("code",[t._v("--include <dirpath>")]),t._v(" 指定要进行修复扫描的目录")]),t._v(" "),e("li",[e("code",[t._v("--no-ignore")]),t._v(" 忽略 eslint 的 ignore 配置文件和 ignore 规则")])]),t._v(" "),e("p",[t._v("注意请 review 下修复前后的代码，以免工具误修的情况。")]),t._v(" "),e("h4",{attrs:{id:"encode-f2elint-commit-file-scan-提交文件扫描"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint-commit-file-scan-提交文件扫描"}},[t._v("#")]),t._v(" "),e("code",[t._v("encode-f2elint commit-file-scan")]),t._v(" 提交文件扫描")]),t._v(" "),e("p",[t._v("在 git commit 时对提交文件进行规范问题扫描，需配合 git 的 pre-commit 钩子使用。")]),t._v(" "),e("p",[t._v("支持下列参数：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("-s")]),t._v(" "),e("code",[t._v("--strict")]),t._v(" 严格模式，对 warn 和 error 问题都卡口，默认仅对 error 问题卡口")])]),t._v(" "),e("h4",{attrs:{id:"encode-f2elint-commit-msg-scan-提交信息扫描"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encode-f2elint-commit-msg-scan-提交信息扫描"}},[t._v("#")]),t._v(" "),e("code",[t._v("encode-f2elint commit-msg-scan")]),t._v(" 提交信息扫描")]),t._v(" "),e("p",[t._v("git commit 时对 commit message 的格式进行扫描（使用 commitlint），需配合 "),e("a",{attrs:{href:"https://www.npmjs.com/package/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 的 commit-msg 钩子使用。")]),t._v(" "),e("h2",{attrs:{id:"node-js-api-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-api-使用"}},[t._v("#")]),t._v(" Node.js API 使用")]),t._v(" "),e("h3",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" encode-f2elint "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v("\n")])])]),e("h3",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("h4",{attrs:{id:"init-初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-初始化"}},[t._v("#")]),t._v(" init：初始化")]),t._v(" "),e("ul",[e("li",[t._v("encode-f2elint.init(config)：将项目一键接入规范，效果等同于 "),e("code",[t._v("encode-f2elint init")])])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" encode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n  fe "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n  lint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("eslintType")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableESLint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableStylelint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableMarkdownlint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enablePrettier")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("disableNpmInstall")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("config 参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cwd")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("项目绝对路径")])]),t._v(" "),e("tr",[e("td",[t._v("eslintType")]),t._v(" "),e("td",[t._v("ESLintType")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("语言和框架类型，如果不配置，等同于 encode-f2elint init，控制台会出现选择器，如果配置，控制台就不会出现选择器")])]),t._v(" "),e("tr",[e("td",[t._v("enableESLint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是否启用 ESLint，如果不配置默认值为 true，即默认启用 ESLint")])]),t._v(" "),e("tr",[e("td",[t._v("enableStylelint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("是否启用 stylelint，如果不配置，等同于 encode-f2elint init，控制台会出现选择器，如果配置，控制台就不会出现选择器")])]),t._v(" "),e("tr",[e("td",[t._v("enableMarkdownlint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("是否启用 markdownlint，如果不配置，等同于 encode-f2elint init，控制台会出现选择器，如果配置，控制台就不会出现选择器")])]),t._v(" "),e("tr",[e("td",[t._v("enablePrettier")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("是否启用 Prettier")])]),t._v(" "),e("tr",[e("td",[t._v("disableNpmInstall")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是否禁用自动在初始化完成后安装依赖")])])])]),t._v(" "),e("h5",{attrs:{id:"eslinttype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eslinttype"}},[t._v("#")]),t._v(" ESLintType")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("default")]),t._v(": JavaScript 项目（未使用 React 和 Vue 的 JS 项目）")]),t._v(" "),e("li",[e("code",[t._v("react")]),t._v(": JavaScript + React 项目")]),t._v(" "),e("li",[e("code",[t._v("vue")]),t._v(": JavaScript + Vue 项目")]),t._v(" "),e("li",[e("code",[t._v("typescript/default")]),t._v(": TypeScript 项目（未使用 React 和 Vue 的 TS 项目）")]),t._v(" "),e("li",[e("code",[t._v("typescript/react")]),t._v(": TypeScript + React 项目")]),t._v(" "),e("li",[e("code",[t._v("typescript/vue")]),t._v(": TypeScript + Vue 项目")]),t._v(" "),e("li",[e("code",[t._v("es5")]),t._v(": ES5 及之前版本的 JavaScript 老项目")])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[e("code",[t._v("encode-f2elint")]),t._v(" 基于一份配置进行扫描（但你也可以零配置使用），支持的配置参数有：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("enableESLint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是否启用 ESLint")])]),t._v(" "),e("tr",[e("td",[t._v("enableStylelint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是否启用 stylelint")])]),t._v(" "),e("tr",[e("td",[t._v("enableMarkdownlint")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是否启用 markdownlint")])]),t._v(" "),e("tr",[e("td",[t._v("enablePrettier")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("是否启用 Prettier")])]),t._v(" "),e("tr",[e("td",[t._v("eslintOptions")]),t._v(" "),e("td",[t._v("ESLint.Options")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("ESLint 配置项，若未设置将使用执行目录下或内置的默认 eslintrc 和 eslintignore 进行扫描")])]),t._v(" "),e("tr",[e("td",[t._v("stylelintOptions")]),t._v(" "),e("td",[t._v("stylelint.LinterOptions")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("stylelint 配置项，若未设置将使用执行目录下或内置的默认 stylelintrc 和 stylelintignore 进行扫描")])]),t._v(" "),e("tr",[e("td",[t._v("markdownlintOptions")]),t._v(" "),e("td",[t._v("markdownlint.Options")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("markdownlint 配置项，若未设置将使用执行目录下或内置的默认 markdownlint 配置文件进行扫描")])])])]),t._v(" "),e("p",[e("code",[t._v("encode-f2elint")]),t._v(" 会读取执行目录下的 "),e("code",[t._v("encode-f2elint.config.js")]),t._v(" 作为配置文件。"),e("code",[t._v("encode-f2elint init")]),t._v(" 会在执行目录下新增如下的 "),e("code",[t._v("encode-f2elint.config.js")]),t._v(" 文件：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableESLint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableStylelint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enableMarkdownlint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enablePrettier")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h3",{attrs:{id:"typescript-项目扫描性能问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-项目扫描性能问题"}},[t._v("#")]),t._v(" TypeScript 项目扫描性能问题")]),t._v(" "),e("p",[t._v("如果你的 TS 项目 commit 卡口和 "),e("code",[t._v("encode-f2elint scan")]),t._v(" 运行时间很长，可以通过如下在 "),e("code",[t._v(".eslintrc.js")]),t._v(" 中增加以下配置提升性能：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parserOptions")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for lint performance")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("createDefaultProgram")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for lint performance")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/dot-notation'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for lint performance")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/restrict-plus-operands'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for lint performance")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
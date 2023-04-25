# :wave: Say hi to Shopify Store 2.0

> `storefront` 指前台站点，`storeadmin` 指站点后台

## Shopify Render File

### `layout` folder

`layout` 为入口文件，[content_for_header](https://shopify.dev/docs/themes/architecture/layouts#content_for_header) 会加载 `shopify` 站点需要的脚本以及样式；[content_for_layout](https://shopify.dev/docs/themes/architecture/layouts#content_for_layout) 会根据页面的切换自动载入 `template` folder 下的 `.liquid` 文件

### `templates` folder

承载不同 `url` 下的页面内容，渲染方式如上。详情见：<https://shopify.dev/docs/api/liquid/tags/layout>

### `sections` folder

页面中的组成（“代码块”），渲染方式为 `{% section 'xxx' %}`。详情见：<https://shopify.dev/docs/api/liquid/tags/section>

### `snippets` folder

页面或代码块中的代码片段，渲染方式为 `{% render 'xxx' %}`。详情见：<https://shopify.dev/docs/api/liquid/tags/render>

### `assets` folder

静态资源文件，渲染方式为 `{{ 'xxx' | asset_url }}`。详情见：<https://shopify.dev/docs/api/liquid/filters/asset_url>

需要注意，如果想在样式或静态资源文件中使用 `liquid` 变量则需要添加 `.liquid` 后缀，详情见：<https://shopify.dev/docs/themes/architecture#assets>。[javascript tag](https://shopify.dev/docs/api/liquid/tags/javascript) 以及 [stylesheet tag](https://shopify.dev/docs/api/liquid/tags/stylesheet) 不允许使用 `liquid` 变量

## Shopify Liquid Object

> 大部分内容与 store admin 配置相匹配，斜线内容为 shopify 提供的内置对象

1. linklists/linklist/link => store admin => online store => Navigation => menus
2. _routes：shopify 内置页面的 url 集合_

## Q&A

Q1：如何渲染静态资源（`svg`）源码，而不是获得 `svg url`？

A1：将 `assets` 中的资源移入 `snippets` folder，建议都使用 `url` 的方式，因为 `shopify` 提供了 `cdn` 服务

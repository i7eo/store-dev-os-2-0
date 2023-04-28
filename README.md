# :wave: Say hi to Shopify Store 2.0

> `storefront` 指前台站点，`storeadmin` 指站点后台，`theme editor` 指站点后台的主题编辑器

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
3. _shop：shopify 内置关于当前店铺信息的对象_

## Section Schema

> 通常在代码中定义、编写后会在 store admin 产生相应的 UI。在一个 `section` 文件中只允许出现一个 `schema`，可以在 `section schema` 中使用 JSON。

`section schema` 是 liquid 提供的一个标签，允许开发人员用来定义或描述一个 `section`。其中 `block` 是 `section` 的一部分（子元素）。

`section schema` 包含以下属性：

1. [name](https://shopify.dev/docs/themes/architecture/sections/section-schema#name)
2. [tag](https://shopify.dev/docs/themes/architecture/sections/section-schema#tag)
3. [class](https://shopify.dev/docs/themes/architecture/sections/section-schema#class)
4. [limit](https://shopify.dev/docs/themes/architecture/sections/section-schema#limit)
5. [settings](https://shopify.dev/docs/themes/architecture/sections/section-schema#settings)
    - [settings standard attributes](https://shopify.dev/docs/themes/architecture/settings/input-settings#standard-attributes)
6. [blocks](https://shopify.dev/docs/themes/architecture/sections/section-schema#blocks)
7. [max_blocks](https://shopify.dev/docs/themes/architecture/sections/section-schema#max_blocks)
8. [presets](https://shopify.dev/docs/themes/architecture/sections/section-schema#presets)
9. [default](https://shopify.dev/docs/themes/architecture/sections/section-schema#default)
10. [locales](https://shopify.dev/docs/themes/architecture/sections/section-schema#locales)
11. [enabled_on](https://shopify.dev/docs/themes/architecture/sections/section-schema#enabled_on)
12. [disabled_on](https://shopify.dev/docs/themes/architecture/sections/section-schema#disabled_on)

## Hide Login/

storeadmin => settings => customer accounts => accounts in online store and checkout => unchecked "Show login link in the header of online store and at checkout"

## Q&A

Q1：如何渲染静态资源（`svg`）源码，而不是获得 `svg url`？

A1：将 `assets` 中的资源移入 `snippets` folder，建议都使用 `url` 的方式，因为 `shopify` 提供了 `cdn` 服务

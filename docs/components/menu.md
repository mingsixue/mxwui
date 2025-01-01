# Menu 底部导航组件

页面底部导航，适用于在不同页面之间进行切换。

![扫码查看](../imgs/menu_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-menu": "/components/mxwui/menu/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
data: {
    options: [
        {
            url: '/pages/index/index'
            text: '首页',
            iconName: 'home',
        },
    ]
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-menu options={{options}} />
```

## 更多用法示例
### # 数据项 options
属性：`options`，导航配置数据。

参数：`url` 小程序页面路径，必填参数。

参数：`text` 导航项名称，必填参数。

参数：`iconName`，图标名称，只支持图标库中图标。

参数：`textSize` 字号，默认 `28`，不带单位，数字，默认使用rpx。

```html
<mx-menu options={{options}} />
```

- 基础配置
```js
// js
data: {
    options: [
        {
            url: '/pages/index/index',
            text: '首页',
            iconName: '图标名称',
        },
    ]
}
```

- 自定义图标
配置中传入 `iconUrl` 字段 和 `iconSelectUrl` 字段，也就是说需要2张自定义图片。
```js
// js
data: {
    options: [
        {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
            iconSelectUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/set.png',
        },
    ]
}
```

- 是否显示小红点
配置中传入 `dot` 字段，并设置为 `true`。
```js
// js
data: {
    options: [
        {
            dot: true
        },
    ]
}
```

- 判断是否要登录
配置中传入 `isLogin` 字段，并设置为 `true`，将在点击的时候拦截跳转事件，抛出 `bind:menuTap` 自定义事件，需要在该事件回调中自行处理判断登录、跳转等逻辑。
```html
<mx-menu options="{{options}}" bind:menuTap="handleTap" />
```
```js
// js
data: {
    options: [
        {
            isLogin: true
        },
    ]
}
```

### # 指定选中项 current
属性：`current`，默认 `0`，从 0 开始的下标值。

```html
<mx-menu current="1" />
```

### # 文本/图标 颜色 color
属性：`color`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-menu color="#777" />
```

### # 选中项文本/图标 颜色 selectColor
属性：`selectColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

```html
<mx-menu selectColor="#1677FF" />
```

### # 文本字号 textSize
属性：`textSize`，默认 `28`，数字，不带单位，使用rpx。

只建议在纯文本导航中使用。

```html
<mx-menu textSize="32" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `518`，需要比 Mask组件的层级（520）低。

```html
<mx-menu zIndex="1" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/menu_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|options|Array|是|||数据项|
|current|Number|是|数字|`0`|当前选中项|
|color|String||颜色值|`#040A23`|文本/图标颜色，支持任何合法的颜色值|
|selectColor|String||颜色值|`#CA0E2D`|选中项文本/图标颜色，支持任何合法的颜色值|
|textSize|Number||数字|`28`|文本字号|
|zIndex|Number||数字|`518`|层级|
|bind:menu_tap|Handle Event||||点击事件，`options[x].isLogin` 时生效|

### options:
|参数|类型|必填|可选值|参数描述|
|----|----|----|----|----|
|text|String|是||名称|
|iconName|String||图标库中名称|图标名称，只支持图标库中图标|
|iconUrl|String|||图标图片地址，传入则 `iconName` 无效|
|iconSelectUrl|String|||选中时图标图片地址|
|dot|Boolean||`true`、`false`|是否显示小红点|
|isLogin|Boolean||`true`、`false`|判断是否要登录，配合 `menuTap` 事件使用|

## 其他说明
- 需要判断是否登录时，传入 `options[x].isLogin`，则不会再默认跳转，通过 `menuTap` 事件接收返回值，然后需要自行处理登录校验和跳转逻辑
- 底部导航栏的高度是 100rpx，兼容了刘海屏底部，页面太长的地方用到的话需要注意下是否盖住了内容。
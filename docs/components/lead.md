# Lead 引导组件

适用于新功能引导、功能强调等场景。

![扫码查看](../imgs/lead_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-lead": "/components/mxwui/lead/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-lead visible="{{true}}" />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `false` 不显示，必填。

- 显示
```html
<mx-lead visible />

<mx-lead visible="{{true}}" />
```

- 不显示
```html
<mx-lead />

<mx-lead visible="{{false}}" />
```

### # 留白区距离顶部距离 top
属性：`top`，默认 `0`，数字，必填，只支持px。

```html
<mx-lead top="24" />
```

### # 留白区距离左侧距离 left
属性：`left`，默认 `0`，数字，必填，只支持px。
```html
<mx-lead left="24" />
```

### # 留白区宽度 width
属性：`width`，默认 `0`，数字，必填，只支持px。
```html
<mx-lead width=”120“ />
```

### # 留白区高度 height
属性：`height`，默认 `0`，数字，必填，只支持px。
```html
<mx-lead height="24" />
```

### # 留白区圆角 radius
属性：`radius`，默认 `16`，数字。
```html
<mx-lead radius="4" />
```

### # 是否显示蒙层 showMask
属性：`showMask`，默认 `ture` 显示。

- 显示蒙层
```html
<mx-lead />

<mx-lead showMask />

<mx-lead showMask="{{true}}" />
```

- 不显示蒙层
```html
<mx-lead showMask="{{false}}" />
```

### # 蒙层透明度 opacity
属性：`opacity`，默认 `0.5`，0-1之间数字。
```html
<mx-lead opacity="0.6" />
```

### # 引导文案 text
属性：`text`，内容文案。
```html
<mx-lead text="内容" />
```

### # 引导文案文本色 textColor
属性：`textColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-lead textColor="#1677FF" />
```

### # tipsDirection xx
属性：`tipsDirection`，可选 `top`、`left`、`right`、`bottom`，默认 `top` 箭头朝上。

- 箭头朝上 `tipsDirection="top"`
```html
<mx-lead tipsDirection="top" />
```

- 箭头朝下 `tipsDirection="bottom"`
```html
<mx-lead tipsDirection="bottom" />
```

- 箭头朝左 `tipsDirection="left"`
```html
<mx-lead tipsDirection="left" />
```

- 箭头朝右 `tipsDirection="right"`
```html
<mx-lead tipsDirection="right" />
```

### # tips距离留白top距离 tipsTop
属性：`tipsTop`，默认 `130`，数字。
```html
<mx-lead tipsTop="150" />
```

### # tips距离留白left距离 tipsLeft
属性：`tipsLeft`，默认 `-30`，数字。
```html
<mx-lead tipsLeft="20" />
```

### # tips宽度 tipsWidth
属性：`tipsWidth`，默认 `240`，数字。
```html
<mx-lead tipsWidth="260" />
```

### # tips箭头距离留白top距离 tipsArrowsTop
属性：`tipsArrowsTop`，默认 `-20`，数字。
```html
<mx-lead tipsArrowsTop="-30" />
```

### # tips箭头距离留白left距离 tipsArrowsLeft
属性：`tipsArrowsLeft`，默认 `70`，数字。
```html
<mx-lead tipsArrowsLeft="60" />
```

### # tips文本前图标 tipsIcon
属性：`tipsIcon`，图标配置项。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，任何合法的颜色值。

参数：`iconSize`，图标大小，默认 `80`，不带单位，默认使用 rpx。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconWidth`，图片宽度，默认 `80`，不带单位，默认使用 rpx。

参数：`iconHeight`，图片高度，默认 `80`，不带单位，默认使用 rpx。

- 自定义图标
```js
// js
data: {
    tipsIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconSize: 32
    },
}
```
```html
<mx-lead tipsIcon="{{tipsIcon}}" />
```

- 自定义图片
```js
// js
data: {
    tipsIcon: {
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconWidth: 80,
        iconHeight: 80
    },
}
```
```html
<mx-lead tipsIcon="{{tipsIcon}}" />
```

### # tips背景色 tipsBgColor
属性：`tipsBgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-lead tipsBgColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-lead zIndex="1" />
```

### # 点击蒙层是否可以关闭 isCloseMask
属性：`isCloseMask`，默认 `ture` 可关闭。

- 可关闭
```html
<mx-lead />

<mx-lead isCloseMask />

<mx-lead isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-lead isCloseMask="{{false}}" />
```

### # 引导内容完全自定义
使用 `<slot></slot>` 方式，但是留白区的top、left、width、height还是需要传入的。

```html
<mx-lead>自定义内容及样式</mx-lead>
```

## 自定义事件
事件：`bind:lead_close`，引导关闭事件。

```html
<mx-xxx 
    bind:lead_close="handleClose" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/lead_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|top|Number|是|数字|`0`|留白区距离顶部距离，不带单位，默认使用px|
|left|Number|是|数字|`0`|留白区距离左侧距离，不带单位，默认使用px|
|width|Number|是|数字|`0`|留白区宽度，不带单位，默认使用px|
|height|Number|是|数字|`0`|留白区高度，不带单位，默认使用px|
|radius|Number||数字|`16`|留白区圆角，不带单位，默认使用rpx|
|showMask|Boolean||`true`、`false`|`true`|是否显示蒙层|
|opacity|Number||0-1之间|`0.5`|蒙层透明度，数字|
|text|String||||引导文案|
|textColor|String||颜色值|`#040A23`|引导文案文本色，支持任何合法的颜色值|
|tipsDirection|String||`top`、`left`、`bottom`、`right`|`top`|tips箭头方向|
|tipsTop|Number||数字|`130`|tips距离留白top距离，不带单位，默认使用rpx|
|tipsLeft|Number||数字|`-30`|tips距离留白left距离，不带单位，默认使用rpx|
|tipsWidth|Number||数字|`240`|tips宽度，不带单位，默认使用rpx|
|tipsArrowsTop|Number||数字|`-20`|tips箭头距离留白top距离，不带单位，默认使用rpx|
|tipsArrowsLeft|Number||数字|`70`|tips箭头距离留白left距离，不带单位，默认使用rpx|
|tipsIcon|Object||||tips文本前图标|
|tipsBgColor|String||颜色值|`#FFFFFF`|tips背景色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭|

### tipsIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#040A23`|图标颜色，任何合法的颜色值|
|iconSize|Number|`80`|图标大小，不带单位，默认rpx|
|iconUrl|String||图标自定义图片地址，传入则 `iconName`、`iconColor` 无效|
|iconWidth|Number|`80`|图片宽度，不带单位，默认rpx|
|iconHeight|Number|`80`|图片高度，不带单位，默认rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:lead_close|Click||引导关闭事件|

## 其他说明
无
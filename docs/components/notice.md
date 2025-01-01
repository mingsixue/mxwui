# Notice 通知栏组件

一般用于活动提醒或者系统权限申请等吸引用户关注但又不强制用户去处理的场景。

![扫码查看](../imgs/notice_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-xxx": "/components/mxwui/notice/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-notice visible="{{true}}" text="内容" />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `false` 不显示。

- 显示
```html
<mx-notice visible />

<mx-notice visible="{{true}}" />
```

- 不显示
```html
<mx-notice />

<mx-notice visible="{{false}}" />
```

### # 样式类型 styleType
属性：`styleType`，可选：`default` 默认、`operate` 可操作、`roll` 滚动，默认 `default`。

- 默认样式 `styleType="default"`
```html
<mx-notice />

<mx-notice styleType="default" />
```

- 可操作样式 `styleType="operate"`

可关闭、可点击按钮、可显示箭头

```html
<mx-notice styleType="operate" />
```

- 滚动样式 `styleType="滚动"`

可横向滚动（跑马灯效果）、纵向滚动，配合 `rollType` 字段使用。

横向滚动：`rollType="marquee"`，可设置滚动动画时间 `rollSpeed`，默认 `8s`。

纵向滚动：`rollType="vertical"`，需要配合 `message` 字段使用，传入多条内容，可设置切换时间 `interval`，默认 `3000`，单位是毫秒。

```html
<mx-notice styleType="滚动" rollType="marquee" rollSpeed="8s" />

<mx-notice styleType="滚动" rollType="vertical" interval="3000" message="{{message}}" />
```
```js
// js
data: {
    message: [
        {text: '内容1'},
        {text: '内容2'}
    ]
}
```

### # 内容 text
属性：`text`，内容文本。

```html
<mx-notice text="内容" />
```

### # 文本超出是否显示省略号 ellipsis
属性：`ellipsis`，默认 `false`，不显示，默认换行展示。

默认样式 `styleType="default"` 时生效。

- 显示省略号
```html
<mx-notice ellipsis />

<mx-notice ellipsis="{{true}}" />
```

- 不显示省略号
```html
<mx-notice />

<mx-notice ellipsis="{{false}}" />
```

### # 自定义文本颜色 textColor
属性：`textColor`，默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-notice textColor="#1677FF" />
```

### # 自定义背景颜色 bgColor
属性：`bgColor`，默认 `#C2996C`，支持任何合法的颜色值。

```html
<mx-notice bgColor="#1677FF" />
```

### # 图标颜色 iconColor
属性：`iconColor`，默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-notice bgColor="#1677FF" />
```

### # 图标大小 iconSize
属性：`iconSize`，默认 `32`，数字，不带单位，默认使用rpx。

```html
<mx-notice iconSize="34" />
```

### # 是否可关闭 showClose
属性：`showClose`，默认 `true` 可关闭操作，显示可关闭按钮。

需要配合 `styleType == "operate"` 使用。

- 显示关闭按钮
```html
<mx-notice />

<mx-notice showClose />

<mx-notice showClose="{{true}}" />
```

- 不显示关闭按钮
```html
<mx-notice showClose="{{false}}" />
```

### # 是否显示按钮 showBtn
属性：`showBtn`，默认 `false` 不显示按钮。

事件：`bind:notice_btn`，按钮点击事件

需要配合 `styleType == "operate"` 使用。

- 显示按钮
```html
<mx-notice showBtn />

<mx-notice showBtn="{{true}}" bind:notice_btn="handleBtn" />
```

- 不显示按钮
```html
<mx-notice />

<mx-notice showBtn="{{false}}" />
```

### # 按钮相关 
属性：`btnText`，按钮文案，默认 `查看`。

属性：`btnWidth`，按钮宽度，默认 `104rpx`，需要带单位。

属性：`btnType`，按钮类型，默认 `primary`，支持 `primary`、`default`、`ghost`。

属性：`btnColor`，按钮颜色，支持任何合法的颜色值。

- 按钮文案
```html
<mx-notice btnText="按钮文案" />
```

- 按钮宽度
```html
<mx-notice btnWidth="120rpx" />
```

- 按钮类型
```html
<mx-notice btnType="primary" />

<mx-notice btnType="default" />

<mx-notice btnType="ghost" />
```

- 按钮颜色
```html
<mx-notice btnColor="#1677FF" />
```

### # 是否显示箭头 arrows
属性：`arrows`，默认 `false`，不显示。

默认样式 `styleType="default"` 时生效。

- 显示箭头
```html
<mx-notice arrows />

<mx-notice arrows="{{true}}" />
```

- 不显示箭头
```html
<mx-notice />

<mx-notice arrows="{{false}}" />
```

### # 滚动效果 rollType
属性：`rollType`，可选：`vertical` 垂直滚动、`marquee` 跑马灯效果，默认 `marquee`。

- 垂直滚动

`rollType="vertical"`，不传 `text` 字段，传 `message` 字段，由下到上滚动，配合 `interval` 字段，控制滚动间隔。

```html
<mx-notice rollType="vertical" />
```

- 跑马灯效果

`rollType="marquee"`，从右到左滚动。配合 `rollSpeed` 字段，可以控制动画时间。
```html
<mx-notice rollType="marquee" />
```

### # 滚动动画时间 rollSpeed
属性：`rollSpeed`，默认 `8s`，秒或者毫秒，播放一遍文本的时间。

```html
<mx-notice rollSpeed="3s" />
```

### # 垂直滚动文本 message
属性：`message`，垂直滚动文本，这里需要多条文本，数组格式，`message` 必须要有 `text` 字段，同时和 `message` 同级的 `text` 字段将失效。

```js
// js
data: {
    message: [
        {text: '滚动文本一'},
        {text: '滚动文本二'}
    ]
}
```
```html
<mx-notice message="{{message}}" />
```

### # 垂直滚动自动切换时间 interval
属性：`interval`，默认 `3000`，单位是毫秒。

```html
<mx-notice interval="5000" />
```

## 自定义事件
属性：`bind:notice_close`，关闭回到事件
属性：`bind:notice_btn`，按钮点击事件
属性：`bind:notice_tap`，内容点击事件
```html
<mx-xxx 
    bind:notice_close="handleClose" 
    bind:notice_btn="handleBtn" 
    bind:notice_tap="handleTap" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/notice_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|styleType|String|是|`default` 默认、`operate` 可操作、`roll` 滚动|`default`|样式类型|
|text|String||||内容|
|textColor|String||颜色值|`#FFFFFF`|自定义文本颜色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#C2996C`|自定义背景颜色，支持任何合法的颜色值|
|iconColor|String||颜色值|`#FFFFFF`|图标颜色，支持任何合法的颜色值|
|iconSize|Number||数字|`32`|图标大小，不带单位，默认使用rpx|

### 默认样式 styleType="default"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|ellipsis|Boolean||`true`、`false`|`false`|文本超出是否显示省略号|
|arrows|String|||`false`|是否显示箭头|

### 可操作样式 styleType="operate"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|showClose|Boolean||`true`、`false`|`true`|是否可关闭|
|showBtn|Boolean||`true`、`false`|`false`|是否显示按钮|
|btnText|String|||`查看`|按钮文案|
|btnWidth|String|||`104rpx`|按钮宽度，带单位|
|btnType|String||`primary`、`default`、`ghost`|`primary`|按钮类型|
|btnColor|String||颜色值||按钮颜色，支持任何合法的颜色值|

### 滚动样式 styleType="roll"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|rollType|String||`vertical` 垂直滚动、`marquee` 跑马灯效果|`marquee`|滚动效果|
|rollSpeed|String|||`8s`|滚动动画时间|
|message|Array||||垂直滚动文本，适用于多条|
|interval|String||毫秒|`3000`|垂直滚动自动切换时间，毫秒|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:notice_close|Click||关闭回到事件|
|bind:notice_btn|Click||按钮点击事件|
|bind:notice_tap|Click||内容点击事件|

## 其他说明
无
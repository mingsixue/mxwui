# TabsFilter 筛选栏组件

和标签页组件类似，不同的是筛选栏组件只用于筛选。支持 Tabs 项左对齐、宽度均分，支持自定义文本色、背景色。

![扫码查看](../imgs/tabsFilter_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-btn": "/components/mxwui/tabs-filter/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
data: {
    options: [ 
        {text: '选项A', value: 1},
        {text: '选项B', value: 2},
        {text: '选项C', value: 3},
    ],
},
```

页面 `.wxml` 文件中使用组件
```html
<mx-tabs-filter options="{{options}}" bind:tabs_filter_tap="handleClick" />
```

## 更多用法示例
### # 数据项 options
属性：`options`，数据项配置。

参数：`text`，Tab项名称，用于界面显示。

参数：`value`，Tab项值，主要用于传给后端。

参数：`iconName`，图标名称，只支持图标库中的图标。

参数：`iconColor`，图标颜色，支持任何合法的颜色值。

参数：`iconSelectColor`，选中时图标颜色，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址。

参数：`iconSelectUrl`，选中时自定义图片地址。

参数：`iconSize`，图标大小，默认 `32`，数字，不带单位，使用rpx。

- 基础使用
```js
// js
data: {
    options: [ 
        {text: 'Tab项名称', value: 'Tab项值'},
    ],
},
```

- 自定义图标
```js
// js
data: {
    options: [ 
        {text: 'Tab项名称', value: 'Tab项值', iconName: '图标名称', iconColor: '文本色', iconSelectColor: '选中文本色', iconSize: '30'},
    ],
},
```
- 自定义图片
```js
// js
data: {
    options: [ 
        {text: 'Tab项名称', value: 'Tab项值', iconUrl: '图片地址', iconSelectUrl: '图片地址', iconSize: '28'},
    ],
},
```

```html
<mx-tabs-filter options="{{options}}" />
```

### # 指定选中项 current
属性：`current`，默认 `0`，从 0 开始的数字。
```html
<mx-tabs-filter current="1" />
```

### # 主题 theme
属性：`theme`，可选值：`light` 浅色主题、`dark` 深色主题，默认 `light`，默认浅色主题。

- 深色主题 `theme="dark"`
```html
<mx-tabs-filter theme="dark" />
```

- 浅色主题 `theme="light"`
```html
<mx-tabs-filter theme="light" />
```

### # 左对齐 isLeft
属性：`isLeft`，默认 `false`，默认居中对齐。

- 居中对齐
```html
<mx-tabs-filter isLeft="{{false}}" />

<mx-tabs-filter />
```

- 居左对齐
```html
<mx-tabs-filter isLeft />

<mx-tabs-filter isLeft="{{true}}" />
```

### # 自定义文本色 textColor
属性：`textColor`，会根据主题判断，`light` 时默认 `#040A23`，`dark` 时默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-tabs-filter textColor="#999" />
```

### # 自定义选中文本色 textCurrentColor
属性：`textCurrentColor`，会根据主题判断，`light` 时默认 `#CA0E2D`，`dark` 时默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-tabs-filter textCurrentColor="#1677ff" />
```

### # 自定义选中项背景色 currentColor
属性：`currentColor`，会根据主题判断，`light` 时默认 `#CA0E2D`，`dark` 时默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-tabs-filter currentColor="#1677FF" />
```

### # 文本字号 textSize
属性：`textSize`，默认 `28`，数字，不带单位，默认使用rpx。

```html
<mx-tabs-filter textSize="30" />
```

### # Bar自定义背景色 bgColor
属性：`bgColor`，，会根据主题判断，`light` 时默认 `#CA0E2D`，`dark` 时默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-tabs-filter bgColor="#e4b856" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/tabsFilter_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|options|Array|是|||Tabs数据项|
|current|Number|是||`0`|默认选中项，数组下标位置|
|theme|String||`light`、`dark`|`light`|主题，浅色、深色|
|isLeft|Boolean||`true`、`false`|`false`|是否左对齐，默认是居中|
|textColor|String||颜色值||自定义文本色，支持任何合法的颜色值|
|textCurrentColor|String||颜色值||自定义选中文本色，支持任何合法的颜色值|
|currentColor|String||颜色值||自定义选中项背景色，支持任何合法的颜色值|
|textSize|Number||数字|`28`|文本字号，数字，不带单位，默认使用rpx|
|bgColor|String||颜色值||自定义背景色，支持任何合法的颜色值|

### options:
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|是|||Tab项名称|
|value|String / Number|是|||Tab项值|
|iconName|String||图标库中图标||图标名称|
|iconColor|String||颜色值||图标颜色，支持任何合法的颜色值|
|iconSelectColor|String||颜色值||选中时图标颜色，支持任何合法的颜色值|
|iconUrl|String||||自定义图片地址|
|iconSelectUrl|String||||选中时自定义图片地址|
|iconSize|Number||数字|`32`|图标大小，不带单位，默认使用rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:tabs_filter_tap|Click|`event.detail`|点击事件回调事件，返回 `item` 和 `current` 字段，`item` 字段值为传入的值原样返回， `current` 字段值为点击的下标序号，从 0 开始|

## 其他说明
无
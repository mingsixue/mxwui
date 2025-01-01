# Tabs 标签页组件

用于内容组之间进行导航切换。支持 Tabs 项左对齐、宽度均分，支持自定义文本色、背景色，支持带小红点、带数字显示，支持排序、升序、降序。

![扫码查看](../imgs/tabs_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-btn": "/components/mxwui/tabs/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
data: {
    options: [
        {text: '选项一', value: 1},
        {text: '选项二', value: 2},
        {text: '选项三', value: 3},
        {text: '选项四', value: 4},
    ],
},
```

页面 `.wxml` 文件中使用组件
```html
<mx-tabs options="{{options}}" bind:tabs_tap="handleClick" />
```

## 更多用法示例
### # 数据项 options
属性：`options`，数据项配置。

参数：`text`，Tab项名称，用于界面显示。

参数：`value`，Tab项值，主要用于传给后端。

```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值'},
    ],
},
```

- 带红点

参数：`dot`，设为 `true`。

```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值', dot: true},
    ],
},
```

- 带数字

参数：`num`，数字或字符串都可，需要配合 `isShowNum` 字段使用。

```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值', num: 8},
    ],
},
```

- 选项带图标

参数：`iconName`，图标名称，只支持图标库中图标。

参数：`iconColor`，图标颜色，默认颜色 `light` 主题时为 `#040A23`，`dark` 时为 `#FFFFFF`，支持任何合法的颜色值。

参数：`iconSize`，图标大小，默认 `32`，数字，不带单位，使用rpx。

```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值', iconName: '图标名称', iconColor: '#CA0E2d', iconSize: 30},
    ],
},
```

- 选项图标自定义图片

参数：`iconUrl`，自定义图片地址。

参数：`iconSize`，图片大小，默认 `32`，数字，不带单位，使用rpx。
```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值', iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png', iconSize: 28},
    ],
},
```

- 排序

参数：`sort`，可选值：`default` 默认排序、`asc` 升序、`desc` 降序。

```js
// js
data: {
    options: [
        {text: '默认排序', value: 1, sort: 'default'},
        {text: '升序', value: 2, sort: 'asc'},
        {text: '降序', value: 3, sort: 'desc'},
    ],
},
```

```html
<mx-tabs options="{{options}}" />
```

### # 指定选中项 current
属性：`current`，默认 `0`，从 0 开始的数字。

```html
<mx-tabs current="1" />
```

### # 宽度是否均分 average
属性：`average`，默认 `false`，默认不均分靠左展示。

- 均分 居中
```html
<mx-tabs average />

<mx-tabs average="{{true}}" />
```

- 不均分 靠左
```html
<mx-tabs average="{{false}}" />

<mx-tabs />
```

### # 主题 theme
属性：`theme`，可选值：`light`、`dark`， 默认 `light` 浅色主题。

- 深色主题 `theme="dark"`
```html
<mx-tabs theme="dark" />
```

- 浅色主题 `theme="light"`
```html
<mx-tabs theme="light" />
```

### # 自定义文本色 textColor
属性：`textColor`，默认 `#656979`，支持任何合法的颜色值。
```html
<mx-tabs textColor="#999" />
```

### # 自定义选中文本色 textCurrentColor
属性：`textCurrentColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-tabs textCurrentColor="#1677ff" />
```

### # 文本字号 textSize
属性：`textSize`，默认 `32`，数字，不带单位，默认使用rpx。
```html
<mx-tabs textSize="30" />
```

### # 选中文本字号 textCurrentSize
属性：`textCurrentSize`，默认 `32`，数字，不带单位，默认使用rpx。
```html
<mx-tabs textCurrentSize="34" />
```

### # 自定义背景色 bgColor
属性：`bgColor`，根据主题区分，`light` 浅色主题时默认为 `#F8F9FA`，`dark` 深色主题时默认为 `#CA0E2D`。

```html
<mx-tabs bgColor="#e4b856" />
```

### # 是否显示数字 isShowNum
属性：`isShowNum`，默认为 `false` 不显示数字，需要和 `options.num` 配合使用。

- 显示
```html
<mx-tabs isShowNum />

<mx-tabs isShowNum="{{true}}" />
```

- 不显示
```html
<mx-tabs />

<mx-tabs isShowNum="{{false}}" />
```

### # 下划线样式 lineMode
属性：`lineMode`，可选值为：`short` 短下划线、`full` 跟选项一样长下划线，默认为 `short` 短下划线。

```html
<mx-tabs lineMode="short" />

<mx-tabs lineMode="full" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/tabs_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|options|Array|是|||Tabs数据项|
|current|Number|是||`0`|默认选中项，数组下标位置|
|average|Boolean||`true`、`false`|`false`|宽度是否均分，默认不均分居左|
|theme|String||`light`、`dark`|`light`|主题，浅色、深色|
|textColor|String||颜色值||自定义文本色，支持任何合法的颜色值|
|textCurrentColor|String||颜色值||自定义选中文本色，支持任何合法的颜色值|
|textSize|Number||数字|`32`|自定义文本字号|
|textCurrentSize|Number||数字|`32`|自定义选中文本字号|
|bgColor|String||颜色值||自定义背景色，支持任何合法的颜色值|
|isShowNum|Boolean||`true`、`false`|`false`|是否显示数字，需要和 `options` 里的 `num` 字段配合使用|
|lineMode|String||`short`、`full`|`short`|下划线样式|

### options:
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|是|||Tab项名称|
|value|String / Number|是|||Tab项值|
|dot|Boolean||||是否显示红点|
|num|Number||||数量|
|iconName|String||图标库中名称||图标名称，只支持图标库中图标|
|iconColor|String||颜色值|light `#040A23` 或 dark `#FFFFFF`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||||自定义图片地址，传入则 `iconName` 和 `iconColor` 无效|
|iconSize|Number||数字|`32`|图标大小，不带单位，默认使用rpx|
|sort|String||`default`、`asc`、`desc`||默认排序、升序、降序|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:tabs_tap|Click|`event.detail`|点击事件回调事件，返回 `item` 和 `current` 字段，`item` 字段值为传入的值原样返回， `current` 字段值为点击的下标序号，从 0 开始|

## 其他说明
无
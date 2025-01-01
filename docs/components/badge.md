# Badge 角标组件

主要用于商品的左上角、右上角的标识性角标。

![扫码查看](../imgs/badge_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-badge": "/components/mxwui/badge/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-badge text="内容" />
```

## 更多用法示例
### # 角标类型 type
属性：`type`，可选 `image` 图片、`text` 文本，默认 `text` 文本角标。

- 文本角标
```html
<mx-badge type="text" />
```

- 图片角标
```html
<mx-badge type="image" />
```

### # 角标位置 position
属性：`position`，可选 `lt` 左上角、`rt` 右上角、`lb` 左下角、`rb` 右下角，默认 `lt` 在左上角位置。

- 左上角 lt

字段 `top` 和 `left` 有效。
```html
<mx-badge position="lt" />
```

- 右上角 rt

字段 `top` 和 `right` 有效。
```html
<mx-badge position="rt" />
```

- 左下角 lb

字段 `bottom` 和 `left` 有效。
```html
<mx-badge position="lb" />
```

- 右下角 rb

字段 `bottom` 和 `right` 有效。
```html
<mx-badge position="rb" />
```

### # 角标文案 text
属性：`text`，文案最好4个字以内，不要太长。
```html
<mx-badge text="内容" />
```

### # 角标文案文本色 textColor
属性：`textColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-badge textColor="#1677FF" />
```

### # 文案字号 textSize
属性：`textSize`，默认 `24`，数字，不带单位，默认使用rpx。
```html
<mx-badge textSize="32" />
```

### # 角标背景色 bgColor
属性：`bgColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-badge bgColor="#1677FF" />
```

### # 角标圆角 radius
属性：`radius`，默认 `16`，数字，不带单位，默认使用rpx。
```html
<mx-badge radius="32" />
```

### # 距离顶部 top
属性：`top`，默认 `0`，数字，不带单位，默认使用rpx。
```html
<mx-badge top="24" />
```

### # 距离左侧 left
属性：`left`，默认 `0`，数字，不带单位，默认使用rpx。
```html
<mx-badge left="24" />
```

### # 距离右侧 right
属性：`right`，默认 `0`，数字，不带单位，默认使用rpx。
```html
<mx-badge right="24" />
```

### # 距离底部 bottom
属性：`bottom`，默认 `0`，数字，不带单位，默认使用rpx。
```html
<mx-badge bottom="24" />
```

### # 角标自定义图片 imgUrl
属性：`imgUrl`，自定义图片地址。
```html
<mx-badge imgUrl="图片地址" />
```

### # 角标图片宽度 imagWidth
属性：`imagWidth`，数字，不带单位，默认使用rpx。
```html
<mx-badge imagWidth="24" />
```

### # 角标图片高度 imgHeight
属性：`imgHeight`，默认 `48`，数字，不带单位，默认使用rpx。
```html
<mx-badge imgHeight="24" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/badge_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|type|String|是|`image` 图片、`text` 文本|`text`|角标类型|
|position|String|是|`lt` 左上角、`rt` 右上角、`lb` 左下角、`rb` 右下角|`lt`|角标位置|
|top|Number||数字|`0`|距离顶部，不带单位，默认使用rpx|
|left|Number||数字|`0`|距离左侧，不带单位，默认使用rpx|
|right|Number||数字|`0`|距离右侧，不带单位，默认使用rpx|
|bottom|Number||数字|`0`|距离底部，不带单位，默认使用rpx|

### type="text"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|是|||角标文案|
|textColor|String||颜色值|`#FFFFFF`|角标文案文本色，支持任何合法的颜色值|
|textSize|Number||数字|`24`|文案字号，不带单位，默认使用rpx|
|bgColor|String||颜色值|`#CA0E2D`|角标背景色，支持任何合法的颜色值|
|radius|Number||数字|`16`|角标圆角|

### type="image"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|imgUrl|String|是|||角标自定义图片|
|imagWidth|Number||数字||角标图片宽度，不带单位，默认使用rpx|
|imgHeight|Number||数字|`48`|角标图片高度，不带单位，默认使用rpx|

## 其他说明
无
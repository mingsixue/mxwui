# Level 等级组件

适用于用户等级、卖家等级、会员等级等场景。

![扫码查看](../imgs/level_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-level": "/components/mxwui/level/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-level level="1" />
```

## 更多用法示例
### # 等级 level
属性：`level`，默认 `1`，数字。
```html
<mx-level level="1" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#CA0E2D`，支持任何合法的颜色值，支持传入渐变。
```html
<mx-level level="1" bgColor="#1677FF" />

<mx-level level="1" bgColor="linear-gradient(270deg, #4A4030 0%, #000000 100%)" />
```

### # 背景宽度 bgWidth
属性：`bgWidth`，默认 `56`，数字，不带单位，默认使用rpx。
```html
<mx-level level="1" bgWidth="84" />
```

### # 背景高度 bgHeight
属性：`bgHeight`，默认 `32`，数字，不带单位，默认使用rpx。
```html
<mx-level level="1" bgHeight="52" />
```

### # 背景圆角 bgRadius
属性：`bgRadius`，默认 `16`，数字，不带单位，默认使用rpx。
```html
<mx-level level="1" bgRadius="32" />
```

### # 文本色 textColor
属性：`textColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-level level="1" textColor="#1677FF" />
```

### # 文本字号 textSize
属性：`textSize`，默认 `36`，数字，不带单位，默认使用rpx。
```html
<mx-level level="1" textSize="48" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/level_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|level|Number|是|数字|`1`|等级|
|bgColor|String||颜色值|`#CA0E2D`|背景色，支持任何合法的颜色值，支持传入渐变|
|bgWidth|Number||数字|`56`|背景宽度，不带单位，默认使用rpx|
|bgHeight|Number||数字|`32`|背景高度，不带单位，默认使用rpx|
|bgRadius|Number||数字|`16`|背景圆角，不带单位，默认使用rpx|
|textColor|String||颜色值|`#FFFFFF`|文本色，支持任何合法的颜色值|
|textSize|Number||数字|`36`|文本字号，不带单位，默认使用rpx|

## 其他说明
无
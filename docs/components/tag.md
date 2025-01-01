# Tag 标签组件

常用于标题后、跟随标题，展示商品的运营信息、辅助信息等。

![扫码查看](../imgs/tag_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-tag": "/components/mxwui/tag/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-tag text="包邮" />
```

## 更多用法示例
### # 标签文案 text
属性：`text`，用于显示标签中的文本。
```html
<mx-tag text="包邮" />
```

### # 标签文案文本色 textColor
属性：`textColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-tag text="包邮" textColor="#C49C71" />
```

### # 标签边框颜色 borderColor
属性：`borderColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-tag text="包邮" borderColor="#C49C71" />
```

### # 标签背景色 bgColor
属性：`bgColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-tag text="包邮" bgColor="#C49C71" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/tag_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|是|||标签文案|
|textColor|String||颜色值|`#CA0E2D`|标签文案文本色，支持任何合法的颜色值|
|borderColor|String||颜色值|`#CA0E2D`|标签边框颜色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#FFFFFF`|标签背景色，支持任何合法的颜色值|

## 其他说明
无
# SaleItem 商品卡片组件

适用于列表商品展示的场景。

![扫码查看](../imgs/saleItem_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-sale-item": "/components/mxwui/sale-item/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-sale-item cover="" title="" />
```

## 更多用法示例
### # 下标值 index
属性：`index`，主要用于确认是哪个saleitem触发的事件。
```html
<mx-sale-item index="0" />
```

### # 商品封面 cover
属性：`cover`，图片地址，必填。
```html
<mx-sale-item cover="图片地址" />
```

### # 标题 title
属性：`title`，标题内容，必填。
```html
<mx-sale-item title="标题" />
```

### # 标题文本色 titleColor
属性：`titleColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-sale-item titleColor="#1677FF" />
```

### # 标题显示行数 lineClamp
属性：`lineClamp`，默认 `1`，数字。
```html
<mx-sale-item lineClamp="2" />
```

### # 标题前标签 label
属性：`label`，标签内容。
```html
<mx-sale-item label="促销" />
```

### # 标题前标签文本色 labelColor
属性：`labelColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-sale-item labelColor="#1677FF" />
```

### # 标题前标签背景色 labelBgColor
属性：`labelBgColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-sale-item labelBgColor="#1677FF" />
```

### # 价格单位 priceUnit
属性：`priceUnit`，默认 `¥`，默认人民币符号。
```html
<mx-sale-item priceUnit="$" />
```

### # 价格 price
属性：`price`，默认 `0`，数字。
```html
<mx-sale-item price="520" />
```

### # 价格颜色 priceColor
属性：`priceColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-sale-item priceColor="#1677FF" />
```

### # 价格后扩展文本 extendText
属性：`extendText`，可用于显示原价或其他信息。
```html
<mx-sale-item extendText="文本" />
```

### # 扩展文本颜色 extendColor
属性：`extendColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-sale-item extendColor="#1677FF" />
```

### # 扩展文本是否有删除线 lineThrough
属性：`lineThrough`，默认 `false`，没有删除线。

- 显示删除线
```html
<mx-sale-item lineThrough />

<mx-sale-item lineThrough="{{true}}" />
```

- 不显示删除线
```html
<mx-sale-item />

<mx-sale-item lineThrough="{{false}}" />
```

### # 属性标签组 tags
属性：`tags`，数组。

参数：`text`，标签文案，必填。

参数：`textColor`，标签文案文本色，默认 `#CA0E2D`，支持任何合法的颜色值。

参数：`borderColor`，标签边框色，默认 `#CA0E2D`，支持任何合法的颜色值。

参数：`bgColor`，标签背景色，默认 `#FFFFFF`，支持任何合法的颜色值。

```js
data: {
    tags: [
        {
            text: '包邮',
            textColor: '#FFFFFF',
            borderColor: '#1677FF',
            bgColor: '#1677FF'
        }
    ]
}
```
```html
<mx-sale-item tags="tags" />
```

### # 按钮文案 btnText
属性：`btnText`，按钮文案，有则展示按钮。
```html
<mx-sale-item btnText="购买" />
```

### # 按钮文本色 btnTextColor
属性：`btnTextColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-sale-item btnTextColor="#1677FF" />
```

### # 按钮边框颜色 btnBorderColor
属性：`btnBorderColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-sale-item btnBorderColor="#1677FF" />
```

### # 按钮背景色 btnBgColor
属性：`btnBgColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-sale-item btnBgColor="#1677FF" />
```

## 自定义事件
事件：`bind:sale_item_tap`，卡片点击事件，返回 `event.detail.index`。

事件：`bind:sale_item_btn_tap`，按钮点击事件，返回 `event.detail.index`。
```html
<mx-sale-item 
    bind:sale_item_tap="handleItem" 
    bind:sale_item_btn_tap="handleBtn" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/saleItem_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|index|Number||数字||下标值|
|cover|String|是|||商品封面|
|title|String|是|||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|lineClamp|Number||数字|`1`|标题显示行数|
|label|String||||标题前标签|
|labelColor|String||颜色值|`#FFFFFF`|标题前标签文本色，支持任何合法的颜色值|
|labelBgColor|String||颜色值|`#CA0E2D`|标题前标签背景色，支持任何合法的颜色值|
|priceUnit|String|||`¥`|价格单位|
|price|Number||数字|`0`|价格|
|priceColor|String||颜色值|`#CA0E2D`|价格颜色，支持任何合法的颜色值|
|extendText|String||||价格后扩展文本|
|extendColor|String||颜色值|`#9AA0B1`|扩展文本颜色，支持任何合法的颜色值|
|lineThrough|Boolean||`true`、`false`|`false`|扩展文本是否有删除线|
|tags|Array||||属性标签组|
|btnText|String||||按钮文案|
|btnTextColor|String||颜色值|`#FFFFFF`|按钮文本色，支持任何合法的颜色值|
|btnBorderColor|String||颜色值|`#CA0E2D`|按钮边框颜色，支持任何合法的颜色值|
|btnBgColor|String||颜色值|`#CA0E2D`|按钮背景色，支持任何合法的颜色值|

### tags 属性标签组
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String||||标签文本|
|textColor|String||颜色值|`#CA0E2D`|标签文本色，支持任何合法的颜色值|
|borderColor|String||颜色值|`#CA0E2D`|标签边框色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#FFFFFF`|标签背景色，支持任何合法的颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:sale_item_tap|Click|`event`|卡片点击事件，返回 `event.detail.index`|
|bind:sale_item_btn_tap|Click|`event`|按钮点击事件，返回 `event.detail.index`|

## 其他说明
无
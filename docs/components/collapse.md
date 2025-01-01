# Collapse 折叠面板组件

适用于帮助、问题分类等场景。

![扫码查看](../imgs/collapse_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-collapse": "/components/mxwui/collapse/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-collapse />
```

## 更多用法示例
### # 数据项 list
属性：`list`，数组。

参数：`title`，标题。

参数：`content`，内容。

参数：`show`，是否展开，建议只设置一个选项为 `true`。

```js
// js
data: {
    list: [
        {title: '', content: ''},
        {title: '', content: '', show: true},
    ]
}
```
```html
<mx-collapse list="{{list}}" />
```

### # 是否开启手风琴模式 accordion
属性：`accordion`，默认 `false`。

- 手风琴模式
```html
<mx-collapse accordion />

<mx-collapse accordion="{{true}}" />
```

- 非手风琴模式
```html
<mx-collapse />

<mx-collapse accordion="{{false}}" />
```

### # 标题文本色 titleColor
属性：`titleColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-collapse titleColor="#1677FF" />
```

### # 内容文本色 contentColor
属性：`contentColor`，默认 `#656979`，支持任何合法的颜色值。
```html
<mx-collapse contentColor="#1677FF" />
```

### # 箭头颜色 arrowsColor
属性：`arrowsColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-collapse arrowsColor="#1677FF" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/collapse_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|list|Array|是|||数据项|
|accordion|Boolean||`true`、`false`|`false`|是否开启手风琴模式|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|contentColor|String||颜色值|`#656979`|内容文本色，支持任何合法的颜色值|
|arrowsColor|String||颜色值|`#9AA0B1`|箭头颜色，支持任何合法的颜色值|

### list
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|title|String|是|||标题|
|content|String|是|||内容|
|show|String||`true`、`false`||是否展开|

## 其他说明
无
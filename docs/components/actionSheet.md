# ActionSheet 按钮操作栏组件

由底部出现的列表形式的操作按钮栏弹窗。

![扫码查看](../imgs/actionSheet_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-action-sheet": "/components/mxwui/action-sheet/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
options: [
    {text: '行动点1'},
    {text: '行动点2'},
    {text: '行动点3'}
]
```

页面 `.wxml` 文件中使用组件
```html
<mx-action-sheet options={{options}} />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示。

- 显示
```html
<mx-action-sheet visible />

<mx-action-sheet visible="{{true}}" />

```
- 不显示
```html
<mx-action-sheet visible="{{false}}" />

<mx-action-sheet />
```

### # 数据项 options
属性：`options`，每一项按钮的配置数据，`text` 字段是必填，按钮文案，可通过 `color` 改变文案的文本颜色。

参数：`iconName`，图标名称，只支持图标库中图标。

参数：`iconColor`，图标颜色，默认颜色为 `#040A23`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认大小为 `48`，不带单位，使用rpx。

```html
<mx-action-sheet options="{{options}}" />
```
```js
// js
options: [
    {text: '按钮一', color: '#f00', ...},
    {text: '按钮二', ...},
    {text: '按钮三', ...}
]
```

- 自定义图标及自定义图片
```js
// js
options: [
    {text: '自定义图标', iconName: '图标名称', iconColor: '颜色', iconSize: '数字', ...},
    {text: '自定义图片', iconUrl: '图片地址', iconSize: '数字', ...},
]
```

### # 标题 title
属性：`title`，标题文案，不传或设在为空则不显示标题区域。

```html
<mx-action-sheet title="自定义标题" />
```

### # 标题文本色 titleColor
属性：`titleColor`，标题文案文本色，默认颜色为 `#040A23`，支持任何合法的颜色值。

```html
<mx-action-sheet title="自定义标题颜色" titleColor="#1677FF" />
```

### # 是否显示取消按钮 showCancel
属性：`showCancel`，默认 `true` 显示取消按钮。

- 显示
```html
<mx-action-sheet />

<mx-action-sheet showCancel />

<mx-action-sheet showCancel="{{true}}" />
```

- 不显示
```html
<mx-action-sheet showCancel="{{false}}" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-action-sheet zIndex="1" />
```

### # 蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true` 可关闭。

事件：`bind:action_sheet_close`，弹窗关闭回调事件，返回 `type` 字段，值为 `close`。

- 可关闭
```html
<mx-action-sheet />

<mx-action-sheet isCloseMask />

<mx-action-sheet isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-action-sheet isCloseMask="{{false}}" />
```

## 自定义事件
```html
<mx-action-sheet bind:action_sheet_tap="handleItem" bind:action_sheet_close="handleClose" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/actionSheet_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|options|Array|是|||数据项|
|title|String||||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|showCancel|Boolean||`true`、`false`|`true`|是否显示取消按钮|
|zIndex|Number|是|数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|蒙层是否可以关闭弹窗|

### options:
|参数|类型|可选值|默认值|参数描述|
|----|----|----|----|----|
|text|String|||文案名称|
|color|String|颜色值|`#040A23`|文本颜色，支持任何合法的颜色值|
|iconName|String|||图标名称，只支持图标库中图标|
|iconColor|String|颜色值|`#040A23`|图标颜色，支持任何合法的颜色值|
|iconUrl|String|||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|数字|`48`|图标大小，不带单位，默认使用rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:action_sheet_tap|Click|`event.detail`|操作项点击回调事件，返回 `index` 和 `item` 传入的数据原样返回|
|bind:action_sheet_close|Click|`event.detail`|取消或弹窗关闭回调事件，返回 `type` 字段，值为 `cancel` 是取消按钮点击后回调，值为 `close` 则是蒙层点击后回调|

## 其他说明
无
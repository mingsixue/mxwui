# DialogBasic 底部弹窗组件

由底部出现的展示弹窗。

![扫码查看](../imgs/dialogBasic_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-dialog-basic": "/components/mxwui/dialog-basic/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-dialog-basic visible="{{true}}"></mx-dialog-basic>
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-dialog-basic visible></mx-dialog-basic>

<mx-dialog-basic visible="{{true}}"></mx-dialog-basic>
```

- 不显示
```html
<mx-dialog-basic visible="{{fasle}}"></mx-dialog-basic>

<mx-dialog-basic></mx-dialog-basic>
```

### # 是否显示外部关闭按钮 showWrapClose
属性：`showWrapClose`，默认 `false` 不显示外部关闭按钮。

- 显示
```html
<mx-dialog-basic showWrapClose></mx-dialog-basic>

<mx-dialog-basic showWrapClose="{{true}}"></mx-dialog-basic>
```

- 不显示
```html
<mx-dialog-basic showWrapClose="{{fasle}}"></mx-dialog-basic>

<mx-dialog-basic></mx-dialog-basic>
```

### # 是否显示返回按钮 showBack
属性：`showBack`，默认 `true` 显示返回按钮。

- 显示
```html
<mx-dialog-basic></mx-dialog-basic>

<mx-dialog-basic showBack></mx-dialog-basic>

<mx-dialog-basic showBack="{{true}}"></mx-dialog-basic>
```

- 不显示
```html
<mx-dialog-basic showBack="{{fasle}}"></mx-dialog-basic>
```

### # 返回按钮 backIcon
属性：`backIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:dialog_basic_back`，返回按钮点击事件。

```js
// js
data: {
    backIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 48
    },
}
```

```html
<mx-dialog-basic backIcon="{{backIcon}}"></mx-dialog-basic>
```

### # 是否显示关闭按钮 showClose
属性：`showClose`，默认 `true` 显示关闭按钮。

- 显示
```html
<mx-dialog-basic></mx-dialog-basic>

<mx-dialog-basic showClose></mx-dialog-basic>

<mx-dialog-basic showClose="{{true}}"></mx-dialog-basic>
```

- 不显示
```html
<mx-dialog-basic showClose="{{false}}"></mx-dialog-basic>
```

### # 关闭按钮 closeIcon
属性：`closeIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:dialog_basic_close`，关闭按钮点击事件，返回 `type`，值为 `cancel`。

```js
// js
data: {
    closeIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 48
    },
}
```
```html
<mx-dialog-basic closeIcon="{{closeIcon}}"></mx-dialog-basic>
```

### # 标题 title
属性：`title`，标题文案。
```html
<mx-dialog-basic title="标题"></mx-dialog-basic>
```

### # 标题文本色 titleColor
属性：`titleColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog-basic titleColor="#1677FF"></mx-dialog-basic>
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-dialog-basic zIndex="1"></mx-dialog-basic>
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

事件：`bind:dialog_basic_close`，弹窗关闭回调事件，返回 `type` 字段，值为 `close`。

- 可关闭
```html
<mx-dialog-basic></mx-dialog-basic>

<mx-dialog-basic isCloseMask></mx-dialog-basic>

<mx-dialog-basic isCloseMask="{{true}}"></mx-dialog-basic>
```

- 不可关闭
```html
<mx-dialog-basic isCloseMask="{{false}}"></mx-dialog-basic>
```

### # 自定义高度 height
属性：`height`，默认高度 `65vh`，需要带单位。
```html
<mx-dialog-basic height="70vh"></mx-dialog-basic>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/dialogBasic_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|showWrapClose|Boolean||`true`、`false`|`false`|是否显示外部关闭按钮|
|showBack|Boolean||`true`、`false`|`true`|是否显示返回|
|backIcon|Object||||返回按钮自定义|
|showClose|Boolean||`true`、`false`|`true`|是否显示关闭按钮|
|closeIcon|Object||||关闭按钮自定义|
|title|String||||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|蒙层是否可以关闭弹窗|
|height|String|||`65vh`|自定义高度，需带单位|

### backIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

### clsoeIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:dialog_basic_back|Click||返回按钮点击事件回调|
|bind:dialog_basic_close|Click|`event.detail`|关闭按钮或弹窗关闭回调事件，返回 `type` 字段，值为 `cancel` 是关闭按钮点击后回调，值为 `close` 则是蒙层点击后回调|

## 其他说明
无
# DialogBottom 底部基础弹窗组件

由底部出现的弹出层容器，用于展示弹窗、信息提示等内容。

![扫码查看](../imgs/dialogBottom_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-dialog-bottom": "/components/mxwui/dialog-bottom/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-dialog-bottom visible="{{true}}" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-dialog-bottom visible></mx-dialog-bottom>

<mx-dialog-bottom visible="{{true}}"></mx-dialog-bottom>
```

- 不显示
```html
<mx-dialog-bottom visible="{{false}}"></mx-dialog-bottom>

<mx-dialog-bottom></mx-dialog-bottom>
```

### # 是否显示关闭按钮 showClose
属性：`showClose`，默认 `true` 显示关闭按钮。

事件：`bind:dialog_bottom_close`，关闭按钮回调事件，返回 `type` 字段，值为 `close`。

- 显示
```html
<mx-dialog-bottom></mx-dialog-bottom>

<mx-dialog-bottom showClose></mx-dialog-bottom>

<mx-dialog-bottom showClose="{{true}}"></mx-dialog-bottom>
```

- 不显示
```html
<mx-dialog-bottom showClose="{{false}}"></mx-dialog-bottom>
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`。
```html
<mx-dialog-bottom zIndex="1"></mx-dialog-bottom>
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

事件：`bind:dialog_bottom_close`，弹窗关闭回调事件，返回 `type` 字段，值为 `maskClose`。

- 可关闭
```html
<mx-dialog-bottom></mx-dialog-bottom>

<mx-dialog-bottom isCloseMask></mx-dialog-bottom>

<mx-dialog-bottom isCloseMask="{{true}}"></mx-dialog-bottom>
```

- 不可关闭
```html
<mx-dialog-bottom isCloseMask="{{false}}"></mx-dialog-bottom>
```

### # 自定义高度 height
属性：`height`，默认高度 `65vh`。
```html
<mx-dialog-bottom height="70vh"></mx-dialog-bottom>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/dialogBottom_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|showClose|Boolean||`true`、`false`|`true`|是否显示关闭按钮|
|zIndex|Number|||`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|
|height|String|||`65vh`|自定义高度，需带单位|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:dialog_bottom_close|Click|`event.detail`|关闭按钮或弹窗关闭回调事件，返回 `type` 字段，值为 `close` 是关闭按钮点击后回调，值为 `maskClose` 则是蒙层点击后回调|

## 其他说明
无
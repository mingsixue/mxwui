# Popup 侧边弹窗组件

适用于侧边打开弹窗的场景，提供容器，内容完全自定义。

![扫码查看](../imgs/popup_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-popup": "/components/mxwui/popup/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-popup />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。
- 显示
```html
<mx-popup visible>内容</mx-popup>

<mx-popup visible="{{true}}">内容</mx-popup>
```

- 不显示
```html
<mx-popup visible="{{false}}">内容</mx-popup>

<mx-popup>内容</mx-popup>
```

### # 弹窗方向 type
属性：`type`，可选值：`left`、`right`，默认 `right` 右侧弹出。

- 左侧弹出
```html
<mx-popup type="left">
    // 内容
</mx-popup>
```
- 右侧弹出
```html
<mx-popup>
    // 内容
</mx-popup>

<mx-popup type="right">
    // 内容
</mx-popup>
```

### # 自定义弹窗宽度
属性：`width`，默认 `80vw`，需要带单位。
```html
<mx-popup width="50vw">
    // 内容
</mx-popup>

<mx-popup width="50%">
    // 内容
</mx-popup>

<mx-popup width="500rpx">
    // 内容
</mx-popup>

<mx-popup width="300px">
    // 内容
</mx-popup>
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-popup zIndex="2">
    // 内容
</mx-popup>
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true`，可关闭弹窗。

- 可关闭
```html
<mx-popup>
    // 可关闭
</mx-popup>

<mx-popup isCloseMask>
    // 可关闭
</mx-popup>

<mx-popup isCloseMask="{{true}}">
    // 可关闭
</mx-popup>
```

- 不可关闭
```html
<mx-popup isCloseMask="{{false}}">
    // 不可关闭
</mx-popup>
```

## 事件
事件：`popup_close`，弹窗关闭回调事件
```html
<mx-popup bind:popup_close="handleClose">
    // 可关闭
</mx-popup>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/popup_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|type|String|是|`left`、`right`|`right`|类型，左侧弹窗、右侧弹窗|
|width|String|||`80vw`|宽度，需带单位|
|zIndex|Number|||`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:popup_close|Click||弹窗关闭回调事件|

## 其他说明
- 内容通过 `<slot></slot>` 插槽方式自定义
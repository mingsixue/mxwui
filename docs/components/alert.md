# Alert 信息弹窗组件

适用于消息通知、用户操作反馈等无需用户确认的场景，基于基础弹窗组件封装，提供少量可修改属性，如有定制需求请用基础弹窗组件（Dialog 组件）。

![扫码查看](../imgs/alert_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-alert": "/components/mxwui/alert/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-alert />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗；必填字段。

- 显示
```html
<mx-alert visible />

<mx-alert visible="{{true}}" />
```

- 不显示
```html
<mx-alert visible="{{false}}" />

<mx-alert />
```

### # 标题 title
属性：`title`，显示标题，默认标题为 `系统消息`，如果不传或设为空，则不显示标题区域。
```html
<mx-alert title="自定义标题" />
```

### # 内容 content
属性：`content`，显示内容，必填字段。
```html
<mx-alert content="这是自定义内容" />
```

### # 确认按钮相关
属性：`confirmBtnText`，确认按钮文案，默认文案为 `确定`。

属性：`confirmBtnColor`，确认按钮文案颜色，默认颜色 `#CA0E2D`，支持任何合法的颜色值。

事件：`bind:alert_confirm`，确认按钮回调事件

- 确认按钮文案
```html
<mx-alert confirmBtnText="保存"  />
```

- 确认按钮文本色
```html
<mx-alert confirmBtnText="保存" confirmBtnColor="#1677FF" />
```

- 确认按钮回调事件
```html
<mx-alert bind:alert_confirm="handleConfirm" />
```

### # 层级 zIndex
属性：`zIndex`，默认为 `1`。
```html
<mx-alert zIndex="1" />
```

### # 点击蒙层是否可关闭弹窗 isCloseMask
属性：`isCloseMask`，默认为 `true` 蒙层可关闭弹窗。

事件：`bind:alert_close`，弹窗关闭回调事件

- 可关闭
```html
<mx-alert />

<mx-alert isCloseMask />

<mx-alert isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-alert isCloseMask="{{false}}" />
```

- 弹窗关闭回调事件
```html
<mx-alert bind:alert_close="handleClose" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/alert_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|title|String|||`系统消息`|标题|
|content|String|是|||内容|
|confirmBtnText|String|是||`确定`|确认按钮文案|
|confirmBtnColor|String|||`#CA0E2D`|确认按钮文本色|
|zIndex|Number|||`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:alert_confirm|Click||确认按钮回调事件|
|bind:alert_close|Click||弹窗关闭回调事件|

## 其他说明
无
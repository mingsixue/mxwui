# Confirm 确认弹窗组件

适用于需要用户操作确认的场景，只能通过按钮来关闭，基于基础弹窗组件的封装。

![扫码查看](../imgs/confirm_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-confirm": "/components/mxwui/confirm/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-confirm visible={{true}} content="内容" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗；必填参数。

- 显示
```html
<mx-confirm visible />

<mx-confirm visible="{{true}}" />
```

- 不显示
```html
<mx-confirm visible="{{false}}" />

<mx-confirm />
```

### # 标题 title
属性：`title`，默认标题 `系统消息`，自定义标题文案；

设置为空则不显示标题区域。

```html
<mx-confirm title="自定义标题" />
```

### # 内容 content
属性：`content`，自定义内容；必填参数。
```html
<mx-confirm content="这是自定义内容" />
```

### # 确定按钮相关
属性：`confirmBtnText`，确认按钮文案，默认文案 `确定`。

属性：`confirmBtnColor`，确认按钮文本色，默认 `#CA0E2D`，支持任何合法的颜色值。

属性：`bind:confirm`，确认按钮回调事件。

- 确定按钮文案
```html
<mx-confirm confirmBtnText="保存" />
```

- 确定按钮文本色
```html
<mx-confirm confirmBtnColor="#1677FF" />
```

- 确定按钮回调事件
```html
<mx-confirm bind:confirm="handleConfirm" />
```

### # 取消按钮相关
属性：`cancelBtnText`，取消按钮文案，默认文案 `取消`。

属性：`cancelBtnColor`，取消按钮文本色，默认 `#656979`，支持任何合法的颜色值。

属性：`bind:cancel`，取消按钮回调事件。


- 取消按钮文案
```html
<mx-confirm cancelBtnText="{{cancelBtnText}}" />
```

- 取消按钮文本色
```html
<mx-confirm cancelBtnColor="{{cancelBtnColor}}" />
```

- 取消按钮回调事件
```html
<mx-confirm bind:cancel="handleCancel" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`。
```html
<mx-confirm zIndex="1" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/confirm_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|title|String|||`系统消息`|标题|
|content|String|是|||内容|
|confirmBtnText|String|||`确定`|确认按钮文案|
|confirmBtnColor|String||颜色值|`#CA0E2D`|确认按钮文本色，支持任何合法的颜色值|
|cancelBtnText|String|||`取消`|取消按钮文案|
|cancelBtnColor|String||颜色值|`#656979`|取消按钮文本色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:cancel|Clici||取消事件回调|
|bind:confirm|Click||确定事件回调|

## 其他说明
无
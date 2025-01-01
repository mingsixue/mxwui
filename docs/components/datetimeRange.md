# DatetimeRange 日期时间范围组件

适用于需要同时选择日期时间范围的场景，一般是一个时间段。

![扫码查看](../imgs/datetimeRange_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-datetime-range": "/components/mxwui/datetime-range/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-datetime-range />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `flase` 默认不显示。

- 显示
```html
<mx-datetime-range visible />

<mx-datetime-range visible="{{true}}" />
```

- 不显示
```html
<mx-datetime-range />

<mx-datetime-range visible="{{false}}" />
```

### # 开始时间 startTime
属性：`startTime`，年月日时分，YYYY-MM-DD HH:mm 格式。

```html
<mx-datetime-range startTime="2024-05-20 13:14" />
```

### # 结束时间 endTime
属性：`endTime`，年月日时分，YYYY-MM-DD HH:mm 格式。

```html
<mx-datetime-range endTime="2024-05-20 13:14" />
```

### # 开始时间文案 startText
属性：`startText`，默认 `开始时间`。

```html
<mx-datetime-range startText="开始" />
```

### # 结束时间文案 endText
属性：`endText`，默认 `结束时间`。

```html
<mx-datetime-range endText="结束" />
```

### # 标题 title
属性：`title`，标题文案。

```html
<mx-datetime-range title="时间选择" />
```

### # 取消按钮文案 cancelText
属性：`cancelText`，默认 `取消`。

```html
<mx-datetime-range cancelText="放弃" />
```

### # 取消按钮文本色 cancelColor
属性：`cancelColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

```html
<mx-datetime-range cancelColor="#1677FF" />
```

### # 确定按钮文案 confirmText
属性：`confirmText`，默认 `确定`。

```html
<mx-datetime-range confirmText="保存" />
```

### # 确定按钮文本色 confirmColor
属性：`confirmColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

```html
<mx-datetime-range confirmColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。

```html
<mx-datetime-range zIndex="1" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true`，可关闭。

- 可关闭
```html
<mx-datetime-range />

<mx-datetime-range isCloseMask />

<mx-datetime-range isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-datetime-range isCloseMask="{{false}}" />
```

## 自定义事件
事件：`bind:datetime_range_close`，关闭回调事件，返回字段 `type`，值为 `close` 点击 mask 关闭 或 `cancel` 点击取消按钮关闭。

事件：`bind:datetime_range_confirm`，确定按钮回调事件，返回字段 `start` 和 `end` 返回格式化后的时间。
```html
<mx-datetime-range 
    bind:datetime_range_close="handleClose" 
    bind:datetime_confirm="handleConfirm" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/datetimeRange_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|startTime|String||YYYY-MM-DD HH:mm||开始时间|
|endTime|String||YYYY-MM-DD HH:mm||结束时间|
|startText|String|||`开始时间`|开始时间文案|
|endText|String|||`结束时间`|结束时间文案|
|title|String||||标题|
|cancelText|String|||`取消`|取消按钮文案|
|cancelColor|String||颜色值|`#9AA0B1`|取消按钮文本色，支持任何合法的颜色值|
|confirmText|String|||`确定`|确定按钮文案|
|confirmColor|String||颜色值|`#CA0E2D`|确定按钮文本色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:datetime_range_close|Click|`event`|关闭回调事件，返回字段 `type`，值为 `close` 点击 mask 关闭 或 `cancel` 点击取消按钮关闭|
|bind:datetime_range_confirm|Click|`event`|确定按钮回调事件，返回字段 `start` 和 `end` 返回格式化后的时间|


## 其他说明
无
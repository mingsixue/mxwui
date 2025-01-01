# Stepper 步进器组件

由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

![扫码查看](../imgs/stepper_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-stepper": "/components/mxwui/stepper/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-stepper bind:stepper_change="changeValue" />
```

## 更多用法示例
### # 默认值 value
属性：`value`，默认 `0`，数字。
```html
<mx-stepper value="{{1}}" />
```

### # 最小值限制 min
属性：`min`，最小值限制，默认 `0`，数字。

当 `value` 的值不论是传入还是输入的，小于 `min` 时将自动赋值为 `min` 的值。

```html
<mx-stepper min="{{5}}" value="{{1}}" />
```

### # 最大值限制 max
属性：`max`，最大值限制，默认 `9999`，数字。

当 `value` 的值不论是传入还是输入的，大于 `max` 时将自动赋值为 `max` 的值。

```html
<mx-stepper max="{{10}}" />
```

### # 指定步长 step
属性：`step`，默认 `1`，数字。

每次加或者减会根据步长加上或减去相应的值。

```html
<mx-stepper step="{{5}}" />
```

### # 是否禁用 disabled
属性：`disabled`，默认 `false`，不禁用，这里的禁用是整个组件禁用。

- 禁用
```html
<mx-stepper disabled />

<mx-stepper disabled="{{true}}" />
```

- 不禁用
```html
<mx-stepper disabled="{{false}}" />

<mx-stepper />
```

### # 是否禁用输入框 disabledInput
属性：`disabledInput`，默认 `false`，默认不禁用输入框。

- 禁用
```html
<mx-stepper disabledInput />

<mx-stepper disabledInput="{{true}}" />
```

- 不禁用
```html
<mx-stepper disabledInput="{{false}}" />

<mx-stepper disabledInput />
```

### # 输入框光标颜色 cursorColor
属性：`cursorColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

```html
<mx-stepper cursorColor="#1677FF" />
```

### # 事件
属性：`bind:stepper_change`，值变更回调事件。
```html
<mx-stepper bind:stepper_change="changeValue" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/stepper_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|value|Number|是|数字|`0`|默认值|
|min|Number||数字|`0`|最小值|
|max|Number||数字|`9999`|最大值|
|step|Number|是|数字|`1`|步长|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|disabledInput|Boolean||`true`、`false`|`false`|是否禁用输入框|
|cursorColor|Boolean||颜色值|`#CA0E2D`|输入框光标颜色，支持任何合法的颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:stepper_change|Change|`event.detail`|值变更回调事件，返回 `value` 字段|

## 其他说明
无
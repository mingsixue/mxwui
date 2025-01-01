# FootInput 吸底输入框组件

常用于浮动输入的场景，比如评论、回复等。

![扫码查看](../imgs/footInput_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-foot-input": "/components/mxwui/foot-input/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-foot-input visible="{{true}}" />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `false` 不显示。

- 显示
```html
<mx-foot-input visible />

<mx-foot-input visible="{{true}}" />
```

- 不显示
```html
<mx-foot-input />

<mx-foot-input visible="{{false}}" />
```

### # 值 value
属性：`value`，默认值或输入的值。
```html
<mx-foot-input value="" />
```

### # 占位文本 placeholder
属性：`placeholder`，默认 `请输入`。
```html
<mx-foot-input placeholder="请输入内容" />
```

### # 占位文本颜色 placeholderColor
属性：`placeholderColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-foot-input placeholderColor="#1677FF" />
```

### # 光标颜色 cursorColor
属性：`cursorColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-foot-input cursorColor="#1677FF" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-foot-input bgColor="#1677FF" />
```

### # 输入框背景色 inputBgColor
属性：`inputBgColor`，默认 `#F4F6F7`，支持任何合法的颜色值。
```html
<mx-foot-input inputBgColor="#1677FF" />
```

### # 按钮类型 btnType
属性：`btnType`，可选 `primary`、`default`、`ghost`，默认值 `primary`。

```html
<mx-foot-input btnType="primary" />

<mx-foot-input btnType="default" />

<mx-foot-input btnType="ghost" />
```

### # 按钮文案 btnText
属性：`btnText`，默认 `发送`。
```html
<mx-foot-input btnText="确定" />
```

### # 按钮颜色 btnColor
属性：`btnColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-foot-input btnColor="#1677FF" />
```

### # 按钮宽度 btnWidth
属性：`btnWidth`，默认 `104rpx`，带单位。
```html
<mx-foot-input btnWidth="120rpx" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-foot-input zIndex="2" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true` 可关闭。

- 可关闭
```html
<mx-foot-input />

<mx-foot-input isCloseMask />

<mx-foot-input isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-foot-input isCloseMask="{{false}}" />
```

## 自定义事件
事件：`bind:foot_input_close`，关闭回调事件。

事件：`bind:foot_input_done`，发送按钮回调事件，返回字段 `e.detail.value` 输入的内容值。
```html
<mx-xxx 
    bind:foot_input_close="hendleClose" 
    bind:foot_input_done="handleDone"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/footInput_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|value|String||||值|
|placeholder|String|||`请输入`|占位文本|
|placeholderColor|String||颜色值|`#9AA0B1`|占位文本颜色，支持任何合法的颜色值|
|cursorColor|String||颜色值|`#CA0E2D`|光标颜色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|
|inputBgColor|String||颜色值|`#F4F6F7`|输入框背景色，支持任何合法的颜色值|
|btnType|String||`primary`、`default`、`ghost`|`primary`|按钮类型|
|btnText|String|||`发送`|按钮文案|
|btnColor|String||颜色值|`#CA0E2D`|按钮颜色，支持任何合法的颜色值|
|btnWidth|String||颜色值|`104rpx`|按钮宽度，带单位|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:foot_input_close|Click||关闭回调事件|
|bind:foot_input_done|Click|`event`|发送按钮回调事件，返回字段 `e.detail.value` 输入的内容值|

## 其他说明
无
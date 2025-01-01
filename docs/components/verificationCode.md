# VerificationCode 验证码组件

适用于手机号验证码发送、输入和确认场景。

![扫码查看](../imgs/verificationCode_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-verification-code": "/components/mxwui/verification-code/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-verification-code styleType="form" />
```

## 更多用法示例
### # 样式类型 styleType
属性：`styleType`，可选 `dialog` 弹窗类型、`form` 表单类型，默认 `form`。

- 弹窗类型

需要做手机号的前置验证。

```html
<mx-verification-code styleType="dialog" />
```
- 表单类型

结合表单使用的类型，支持的属性会多一些。

```html
<mx-verification-code styleType="form" />
```

### # 是否显示 visible
属性：`visible`，默认 `false` 默认不显示。

当样式类型为 `styleType="dialog"` 时生效。

- 显示
```html
<mx-verification-code visible />

<mx-verification-code visible="{{true}}" />
```

- 不显示
```html
<mx-verification-code />

<mx-verification-code visible="{{false}}" />
```

### # 手机号 phone
属性：`phone`，传入数字，11位。

当样式类型为 `styleType="dialog"` 时生效。

```html
<mx-verification-code phone="13100000000" />
```

### # 验证码位数 digit
属性：`digit`，传入数字，默认 `4`，一般是4位或6位。

```html
<mx-verification-code digit="4" />

<mx-verification-code digit="6" />
```

### # 倒计时秒数 countdown
属性：`countdown`，传入数字，默认 `60`，不传单位，默认是秒。

```html
<mx-verification-code countdown="90" />
```

### # 是否禁用获取验证码按钮 disabled
属性：`disabled`，默认 `false`，不禁用。

可以配合前置的手机号验证来使用。

当样式类型为 `styleType="form"` 时生效。

- 禁用按钮
```html
<mx-verification-code disabled />

<mx-verification-code disabled="{{true}}" />
```

- 不禁用按钮
```html
<mx-verification-code />

<mx-verification-code disabled="{{false}}" />
```

### # 发送/获取验证码 按钮颜色 sendBtnColor
属性：`sendBtnColor`，默认 `#CA0E2D`，只支持十六进制颜色值。

```html
<mx-verification-code sendBtnColor="#1677FF" />
```

### # 确定按钮文案 confirmBtnText
属性：`confirmBtnText`，默认 `确定`。

当样式类型为 `styleType="dialog"` 时生效。

```html
<mx-verification-code confirmBtnText="完成" />
```

### # 确定按钮颜色 confirmBtnColor
属性：`confirmBtnColor`，默认 `#CA0E2D`，只支持十六进制颜色值。

当样式类型为 `styleType="dialog"` 时生效。

```html
<mx-verification-code confirmBtnColor="#1677FF" />
```

### # 光标颜色 cursorColor
属性：`cursorColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

```html
<mx-verification-code cursorColor="#1677FF" />
```

### # 占位文本 placeholder
属性：`placeholder`，默认 `请输入验证码`。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code placeholder="请输入" />
```

### # 占位文本颜色 placeholderColor
属性：`placeholderColor`，默认 `#9AA0B1`。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code placeholderColor="请输入" />
```

### # 标签文本位置 labelPosition
属性：`labelPosition`，可选值：`inline` 内联、`block` 独占一行， 默认 `inline` 内联。

当样式类型为 `styleType="form"` 时生效。

- 内联
```html
<mx-verification-code />

<mx-verification-code labelPosition />

<mx-verification-code labelPosition="inline" />
```
- 独占一行
```html
<mx-verification-code labelPosition="block" />
```

### # 标签文本 label
属性：`label`，文本文案。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code label="验证码" />
```

### # 标签文本文本色 labelColor
属性：`labelColor`，默认 `#040A23`。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code labelColor="#1677FF" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用。
- 左对齐
```html
<mx-verification-code />

<mx-verification-code labelAlign="left" />
```

- 居中对齐
```html
<mx-verification-code labelAlign="center" />
```

- 右对齐
```html
<mx-verification-code labelAlign="right" />
```

### # 标签文本自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用rpx。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code leftWidth="200" />
```

### # 是否显示必填星号 required
属性：`required`，默认 `false` 不显示星号。

当样式类型为 `styleType="form"` 时生效。

- 显示
```html
<mx-verification-code required />

<mx-verification-code required="{{true}}" />
```

- 不显示
```html
<mx-verification-code />

<mx-verification-code required="{{false}}" />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值：`left` 标签左侧、`right` 标签右侧，默认 `right` 在标签右侧。

当样式类型为 `styleType="form"` 时生效。

- 在标签右侧
```html
<mx-verification-code />

<mx-verification-code requiredPosition />

<mx-verification-code requiredPosition="right" />
```

- 在标签左侧
```html
<mx-verification-code requiredPosition="left" />
```

### # 标签前图标配置 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:verification_code_firstIcon`，标签前图标点击事件。

当样式类型为 `styleType="form"` 时生效。

```js
// js
data: {
    firstIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 48
    },
}
```

```html
<mx-verification-code firstIcon="{{firstIcon}}" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:verification_code_lastIcon`，标签后图标点击事件。

当样式类型为 `styleType="form"` 时生效。

```js
// js
data: {
    lastIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 32
    },
}
```

```html
<mx-verification-code lastIcon="{{lastIcon}}" />
```

### # 描述 desc
属性：`desc`，描述内容。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code desc="描述内容" />
```

### # 描述文本色 descColor
属性：`descColor`，默认 `#9AA0B1`。

当样式类型为 `styleType="form"` 时生效。

```html
<mx-verification-code descColor="#1677FF" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认 `false`，不显示分隔线。

当样式类型为 `styleType="form"` 时生效。

- 显示
```html
<mx-verification-code showLine />

<mx-verification-code showLine="{{true}}" />
```

- 不显示
```html
<mx-verification-code />

<mx-verification-code showLine="{{false}}" />
```

## 自定义事件
事件：`bind:verification_code_send`，发送/获取验证码 按钮点击事件。

事件：`bind:verification_code_close`，弹窗关闭回调。

事件：`bind:verification_code_back`，弹窗返回回调。

事件：`bind:verification_code_confirm`，验证码输入完成回调事件，返回 `e.detail.value`。

事件：`bind:verification_code_firstIcon`，标签前按钮点击回调。

事件：`bind:verification_code_lastIcon`，标签后按钮点击回调。
```html
<mx-xxx 
    bind:verification_code_send="handleSend" 
    bind:verification_code_close="handleClose"
    bind:verification_code_back="handleBack"
    bind:verification_code_confirm="handleConfirm"
    bind:verification_code_firstIcon="handleFirstIcon"
    bind:verification_code_lastIcon="handleLastIcon"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/verificationCode_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`dialog` 弹窗类型、`form` 表单类型|`form`|样式类型|
|digit|Number||数字|`4`|验证码位数， 4位或6位|
|countdown|Number||数字|`60`|倒计时秒数|
|cursorColor|String||颜色值|`#CA0E2D`|光标颜色，支持任何合法的颜色值|

### styleType="dialog"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|phone|Number||数字||手机号|
|sendBtnColor|String||颜色值|`#CA0E2D`|发送按钮颜色，只支持十六进制颜色值|
|confirmBtnText|String|||`确定`|确定按钮文案|
|confirmBtnColor|String||颜色值|`#CA0E2D`|确定按钮颜色，只支持十六进制颜色值|

### styleType="form"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|disabled|Boolean||`true`、`false`|`false`|是否禁用获取验证码按钮|
|sendBtnColor|String||颜色值|`#CA0E2D`|获取验证码按钮颜色，只支持十六进制颜色值|
|placeholder|String|||`请输入验证码`|占位文本|
|placeholderColor|String||颜色值|`#9AA0B1`|占位文本颜色，支持任何合法的颜色值|
|labelPosition|String||`inline` 内联、`block` 独占一行|`inline`|标签文本位置|
|label|String||||标签文本|
|labelColor|String||颜色值|`#040A23`|标签文本文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||标签文本自定义宽度，不带单位，默认使用rpx|
|required|Boolean||`true`、`false`|`false`|是否显示必填星号|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标配置|
|lastIcon|Object||||标签后图标配置|
|desc|String||||描述|
|descColor|String||颜色值|`#656979`|描述文本色，支持任何合法的颜色值|

### firstIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#040A23`|图标颜色，任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

### lastIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`32`|图标大小，不带单位，默认rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:verification_code_send|Click||发送/获取验证码 按钮点击事件|
|bind:verification_code_close|Click||弹窗关闭回调|
|bind:verification_code_back|Click||弹窗返回回调|
|bind:verification_code_confirm|Click|`e.detail`|验证码输入完成回调事件，返回 `e.detail.value`|
|bind:verification_code_firstIcon|Click||标签前按钮点击回调|
|bind:verification_code_lastIcon|Click||标签后按钮点击回调|

## 其他说明
无
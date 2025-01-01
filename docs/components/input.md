# Input 输入框组件

一般用在表单，需要进行信息的收集的地方，提供输入功能，基于微信小程序 input 组件的封装。

![扫码查看](../imgs/input_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-input": "/components/mxwui/input/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-input />
```

## 更多用法示例
### # 样式类型 styleType
提供4种样式，属性：`styleType`，可选 `normal`、`horizontal`、`vertical`、`web`，默认 `normal`。

- 样式一：normal
```html
<mx-input styleType="normal" />
```
<!-- ![normal](../imgs/input_styletype_normal.png) -->

- 样式二：horizontal
```html
<mx-input styleType="horizontal" />
```
<!-- ![horizontal](../imgs/input_styletype_horizontal.png) -->

- 样式三：vertical
```html
<mx-input styleType="vertical" />
```
<!-- ![vertical](../imgs/input_styletype_vertical.png) -->

- 样式四：web 风格
```html
<mx-input styleType="web" />
```
<!-- ![web](../imgs/input_styletype_web.png) -->

### # 类型 type
属性：`type`，可选 `text`、`number`、`idcard`、`digit`、`nickname`，默认 `text`。

同微信小程序的类型，参考官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/input.html

- 文本输入键盘 `type="text"`
```html
<mx-input type="text" />
```
<!-- ![web](../imgs/input_type_text.png) -->

- 数字输入键盘 `type="number"`
```html
<mx-input type="number" />
```
<!-- ![web](../imgs/input_type_number.png) -->

- 身份证输入键盘 `type="idcard"`
```html
<mx-input type="idcard" />
```
<!-- ![web](../imgs/input_type_idcard.png) -->

- 带小数点的数字键盘 `type="digit"`
```html
<mx-input type="digit" />
```
<!-- ![web](../imgs/input_type_digit.png) -->

- 昵称输入键盘 `type="nickname"`
```html
<mx-input type="nickname" />
```
<!-- ![web](../imgs/input_type_nickname.png) -->

### # 是否是密码类型 password
属性：`password`，默认 `false` 不是密码类型。

- 是密码类型
```html
<mx-input password />

<mx-input password="{{true}}" />
```
- 不是密码类型
```html
<mx-input password="{{false}}" />

<mx-input />
```

### # 值 value
属性：`value`，可用来设置默认值及用户输入的值。
```html
<mx-input value="内容" />
```

### # 占位文本 placeholder
属性：`placeholder`，用来设置输入框的默认文案，默认为 `请输入`。

如果不需要显示默认文案，请设为空 `placeholder=""`。
```html
<mx-input placeholder="请输入内容" />
```

### # 占位文本颜色 placeholderColor
属性：`placeholderColor`，用来设置输入框默认文案的文本色，默认为 `#9AA0B1`，支持任何合法的颜色值。

需要配合 `placeholder` 属性一起使用。
```html
<mx-input placeholderColor="#f00" />
```

### # 是否禁用输入框 disabled
属性：`disabled`，用来禁用输入框，默认 `false` 不禁用。

禁用后无法输入内容，样式上文本/背景透明度要低一些，无法操作。
- 禁用
```html
<mx-input disabled />

<mx-input disabled="{{true}}" />
```
- 不禁用
```html
<mx-input disabled="{{false}}" />

<mx-input />
```

### # 最大输入长度 maxLength
属性：`maxLength`，默认限制长度为 `140`，设置为 `-1` 则不限制最大长度。
```html
<mx-input maxLength="5" />

<mx-input maxLength="-1" />
```

### # 指定光标与键盘的距离 cursorSpacing
属性：`cursorSpacing`，默认为 `0`，指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
```html
<mx-input cursorSpacing="0" />
```

### # 获取焦点 focus
属性：`focus`，默认为 `false` 不获取焦点。
- 获取焦点
```html
<mx-input focus />

<mx-input focus="{{true}}" />
```
- 不获取焦点
```html
<mx-input focus="{{false}}" />

<mx-input />
```

### # 设置键盘右下角按钮的文字 confirmType
属性：`confirmType`，支持5种文案，可选值 `send`、`search`、`next`、`go`、`done`，默认为 `done`。

仅在 `type="text"` 时生效

- 右下角按钮为“发送” `confirmType="send"`
```html
<mx-input type="text" confirmType="send" />
```

- 右下角按钮为“搜索” `confirmType="search"`
```html
<mx-input type="text" confirmType="search" />
```

- 右下角按钮为“下一个” `confirmType="next"`
```html
<mx-input type="text" confirmType="next" />
```

- 右下角按钮为“前往” `confirmType="go"`
```html
<mx-input type="text" confirmType="go" />
```

- 右下角按钮为“完成” `confirmType="done"`，默认文案
```html
<mx-input type="text" confirmType="done" />
```

### # 强制 input 处于同层状态 alwaysEmbed
属性：`alwaysEmbed`，默认值 `false`，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
- 强制同层
```html
<mx-input alwaysEmbed />

<mx-input alwaysEmbed="{{true}}" />
```
- 不强制同层
```html
<mx-input alwaysEmbed="{{false}}" />

<mx-input />
```

### # 点击键盘右下角按钮时是否保持键盘不收起 confirmHold
属性：`confirmHold`，默认值 `false` 保持收起。
- 收起
```html
<mx-input confirmHold="{{false}}" />

<mx-input />
```
- 不收起
```html
<mx-input confirmHold />

<mx-input confirmHold="{{true}}" />
```

### # 指定focus时的光标位置 cursor
属性：`cursor`，填写数字。
```html
<mx-input cursor="3" />
```

### # 光标颜色 cursorColor
属性：`cursorColor`，默认值 `#CA0E2D`。

- ios下支持十六进制颜色值。
```html
<mx-input cursorColor="#1677FF" />
```

- Android下只支持 `default` 和 `green`。
```html
<mx-input cursorColor="default" />

<mx-input cursorColor="green" />
```

### # 光标起始位置 selectionStart
属性：`selectionStart`，默认值 `-1`，自动聚焦时有效，需与 `selectionEnd` 搭配使用。
```html
<mx-input selectionStart="2" />
```

### # 光标结束位置 selectionEnd
属性：`selectionEnd`，默认值 `-1`，自动聚焦时有效，需与 `selectionStart` 搭配使用。
```html
<mx-input selectionEnd="5" />
```

### # 键盘弹起时，是否自动上推页面 adjustPosition
属性：`adjustPosition`，默认 `true` 往上推。

- 往上推
```html
<mx-input adjustPosition />

<mx-input adjustPosition="{{true}}" />
```

- 不往上推
```html
<mx-input adjustPosition="{{false}}" />

<mx-input />
```

### # focus时，点击页面的时候不收起键盘 holdKeyboard
属性：`holdKeyboard`，默认 `false` 收起键盘。

- 收起键盘
```html
<mx-input holdKeyboard="{{false}}" />

<mx-input />
```

- 不收起键盘
```html
<mx-input holdKeyboard />

<mx-input holdKeyboard="{{true}}" />
```

### # 描述或错误文案 desc
属性：`desc`，用于辅助说明文案或错误提示文案，在输入框下方。
```html
<mx-input desc="描述内容" />
```

### # 描述或错误文案颜色 descColor
属性：`descColor`，默认值 `#656979`，支持任何合法的颜色值。
```html
<mx-input descColor="#CA0E2D" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认值 `true` 显示分隔线，用于区域之间的分隔。

只在 `styleType` 为 `normal` 和 `horizontal` 有效，`vertical` 和 `web` 时在样式设计上没有分隔线，所以不需要。

- 显示分隔线
```html
<mx-input />

<mx-input showLine />

<mx-input showLine="{{true}}" />
```

- 不显示分隔线
```html
<mx-input showLine="{{false}}" />
```

### # 标签文案 label
属性：`label`，常用于表单填写项的名称。
```html
<mx-input label="标签文案" />
```

### # 标签文案文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。

需要配合 `label` 属性一起使用。
```html
<mx-input labelColor="#1677FF" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用。
- 左对齐
```html
<mx-input />

<mx-input labelAlign="left" />
```

- 居中对齐
```html
<mx-input labelAlign="center" />
```

- 右对齐
```html
<mx-input labelAlign="right" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用 rpx。

```html
<mx-input leftWidth="300" />
```

### # 是否显示必填星号 required
属性：`required`，默认值 `false` 不显示必填星号。

- 显示星号
```html
<mx-input required />

<mx-input required="{{true}}" />
```

- 不显示星号
```html
<mx-input required="{{false}}" />

<mx-input />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值 `left`、`right`，默认值 `right` 在标签文本后面。

- 星号在标签后
```html
<mx-input required />

<mx-input required requiredPosition />

<mx-input required requiredPosition="right" />
```

- 星号在标签前
```html
<mx-input required requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:input_firstIcon`，标签前图标点击事件。

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
<mx-input firstIcon="{{firstIcon}}" bind:input_firstIcon="事件函数" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:input_lastIcon`，标签后图标点击事件。

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
<mx-input lastIcon="{{lastIcon}}" bind:input_lastIcon="事件函数" />
```

### # 输入框文本对齐方式 inputAlign
属性：`inputAlign`，可选值 `left`、`right`，默认值 `left` 文本左对齐。

- 左对齐
```html
<mx-input />

<mx-input inputAlign />

<mx-input inputAlign="left" />
```

- 右对齐
```html
<mx-input inputAlign="right" />
```

### # 是否显示清除按钮 clear
属性：`clear`，默认值 `true` 显示清除按钮，有内容时会显示，在输入框的右侧，方便删除所有内容。

点击后会触发 `input_change` 自定义事件，返回 `value` 值为空。

- 显示
```html
<mx-input />

<mx-input clear />

<mx-input clear="{{true}}" />
```

- 不显示
```html
<mx-input clear="{{false}}" />
```

### # 输入框宽度 inputWidth
属性：`inputWidth`，自定义输入框的宽度，默认 `702`，不带单位，使用 rpx。

样式类型为 `styleType="web"` 时有效。

```html
<mx-input styleType="web" inputWidth="300" />
```

### # 输入框背景色 inputBgColor
属性：`inputBgColor`，自定义输入框的背景色，默认 `#FFF` 白色，支持任何合法的颜色值。

样式类型为 `styleType="web"` 时有效。

```html
<mx-input styleType="web" inputBgColor="#e2e2e2" />
```

### # 横向布局 horizontal
属性：`horizontal`，将布局变为横向，默认 `false` 纵向布局。

样式类型为 `styleType="web"` 时有效。

- 横向布局
```html
<mx-input styleType="web" horizontal />

<mx-input styleType="web" horizontal="{{true}}" />
```

- 纵向布局
```html
<mx-input styleType="web" horizontal="{{false}}" />

<mx-input styleType="web" />
```

## 自定义事件
事件：`bind:input_change`，值变更回调事件，返回 `event.detail` 里返回字段 `value`、`cursor`、 `keyCode`。

事件：`bind:input_focus`，获取焦点回调事件，返回 `event.detail` 里返回字段 `value`、`height`。

事件：`bind:input_blur`，失去焦点回调事件，返回 `event.detail` 里返回字段 `value`、`cursor`。

事件：`bind:input_confirm`，点击完成时回调事件，返回 `event.detail` 里返回字段 `value`。

事件：`bind:input_keyboard_height_change`，键盘高度发生变化的回调事件，返回 `event.detail` 里返回字段 `height`、`duration`。


```html
<mx-input 
    bind:input_change="inputChange" 
    bind:input_focus="inputFocus" 
    bind:input_blur="inputBlur" 
    bind:input_confirm="inputConfirm" 
    bind:input_keyboard_height_change="inputKeyboardHeightChange" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/input_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`normal`、`horizontal`、`vertical`、`web`|`normal`|输入框样式类型|
|type|String|是|`text` 文本、`number` 数字、`idcard` 身份证、`digit` 带小数、`nickname` 昵称|`text`|类型，同微信小程序类型|
|password|Boolean||`true`、`false`|`false`|是否是密码类型|
|value|String||||值|
|placeholder|String|||`请输入`|占位文本|
|placeholder|String||颜色值|`#9AA0B1`|占位文本颜色，任何合法的颜色值|
|disabled|Boolean||`true`、`false`|`false`|是否禁用输入框|
|maxLength|Number||数字|`140`|最大输入长度，`-1`则不限制|
|cursorSpacing|Number||数字|`0`|指定光标与键盘的距离|
|focus|Boolean||`true`、`false`|`false`|获取焦点|
|alwaysEmbed|Boolean||`true`、`false`|`false`|强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)|
|confirmHold|Boolean||`true`、`false`|`false`|点击键盘右下角按钮时是否保持键盘不收起|
|cursor|Number||数字||指定focus时的光标位置|
|cursorColor|String||颜色值、`default`、`green`|`#CA0E2D`|光标颜色，ios任何合法的颜色值，安卓只支持 `default`、`green`|
|selectionStart|Number||数字|`-1`|光标起始位置，自动聚集时有效，需与selection-end搭配使用|
|selectionEnd|Number||数字|`-1`|光标结束位置，自动聚集时有效，需与selection-start搭配使用|
|adjustPosition|Boolean||`true`、`false`|`true`|键盘弹起时，是否自动上推页面|
|holdKeyboard|Boolean||`true`、`false`|`false`|focus时，点击页面的时候不收起键盘|
|desc|String||||描述或错误文案|
|descColor|String||颜色值|`#656979`|描述或错误文案颜色，任何合法的颜色值|
|showLine|Boolean||`true`、`false`|`true`|是否显示分隔线|
|label|String|是|||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|
|clear|Boolean||`true`、`false`|`true`|是否显示清除按钮|

### type="text"
|参数|类型|可选值|默认值|参数描述|
|----|----|----|----|----|
|confirmType|String|`send` 发送、`search` 搜索、`next` 下一个、`go` 前往、`done` 完成|`done`|设置键盘右下角按钮的文字|

### styleType="horizontal"
|参数|类型|可选值|默认值|参数描述|
|----|----|----|----|----|
|inputAlign|String|`left`、`right`|`left`|输入框对齐方式|

### styleType="web"
|参数|类型|可选值|默认值|参数描述|
|----|----|----|----|----|
|inputWidth|Number||`702`|输入框宽度，不带单位，默认rpx|
|inputBgColor|String|颜色值|`#FFF`|输入框背景色，任何合法的颜色值|
|horizontal|Boolean|`true`、`false`|`false`|是否横向布局，设为 `true` 则 `inputWidth` 无效|

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
|bind:input_change|Change|`event.detail`|值变更回调事件，返回 `event.detail` 里返回字段 `value`、`cursor`、 `keyCode`|
|bind:input_focus|Focus|`event.detail`|获取焦点回调事件，返回 `event.detail` 里返回字段 `value`、`height`|
|bind:input_blur|Blur|`event.detail`|失去焦点回调事件，返回 `event.detail` 里返回字段 `value`、`cursor`|
|bind:input_confirm|Confirm|`event.detail`|点击完成时回调事件，返回 `event.detail` 里返回字段 `value`|
|bind:input_keyboard_height_change|Change|`event.detail`|键盘高度发生变化的回调事件，返回 `event.detail` 里返回字段 `height`、`duration`|
|bind:input_firstIcon|Click||标签前图标点击事件|
|bind:input_lastIcon|Click||标签后图标点击事件|

## 其他说明
- 微信小程序原生参数参考：https://developers.weixin.qq.com/miniprogram/dev/component/input.html
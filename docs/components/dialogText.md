# DialogText 底部文本弹窗组件

由底部出现的展示弹窗，展示基本的文本和按钮。

![扫码查看](../imgs/dialogText_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-dialog-text": "/components/mxwui/dialog-text/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-dialog-text visible="{{true}}" title="标题" content="这是内容哦这是内容哦这是内容哦" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-dialog-text visible />

<mx-dialog-text visible="{{true}}" />
```

- 不显示
```html
<mx-dialog-text visible="{{false}}" />

<mx-dialog-text />
```

### # 标题 title
属性：`title`，自定义标题。
```html
<mx-dialog-text title="标题" />
```

### # 标题文本色 title
属性：`titleColor`，自定义标题文本色，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog-text titleColor="#1677FF" />
```

### # 内容 content
属性：`content`，内容，适合简单的文本内容。
```html
<mx-dialog-text content="内容" />
```

### # 内容文本色 contentColor
属性：`contentColor`，自定义标题文本色，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog-text contentColor="#1677FF" />
```

### # 自定义内容及样式
通过 `<slot></slot>` 插槽方式，内容和样式完全自定义，使用这种方式就不需要传 `content` 和 `contentColor` 了。
```html
<mx-dialog-text>
    // 自定义内容
</mx-dialog-text>
```

### # 主按钮文案 mainBtnText
属性：`mainBtnText`，主按钮文案，默认文案 `确定`。
```html
<mx-dialog-text mainBtnText="主按钮" />
```

### 主按钮颜色
属性：`mainBtnColor`，主按钮颜色，默认颜色 `#CA0E2D`，只支持十六进制颜色值。
```html
<mx-dialog-text mainBtnColor="#1677FF" />
```

### # 是否显示辅助按钮 showMinor
属性：`showMinor`，默认 `false` 不显示辅助按钮。

- 显示
```html
<mx-dialog-text showMinor />

<mx-dialog-text showMinor="{{true}}" />
```

- 不显示
```html
<mx-dialog-text showMinor="{{false}}" />

<mx-dialog-text />
```

### # 辅助按钮文案 minorBtnText
属性：`minorBtnText`，辅助按钮文案，默认文案 `取消`。
```html
<mx-dialog-text minorBtnText="辅助按钮" />
```

### # 辅助按钮颜色 minorBtnColor
属性：`minorBtnColor`，辅助按钮颜色，默认颜色 `#656979`，只支持十六进制颜色值。
```html
<mx-dialog-text minorBtnColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`。
```html
<mx-dialog-text zIndex="1" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

事件：`bind:dialog_text_close`，弹窗关闭回调事件。

- 可关闭
```html
<mx-dialog-text />

<mx-dialog-text isCloseMask />

<mx-dialog-text isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-dialog-text isCloseMask="{{false}}" />
```

## 事件
```html
<mx-dialog-text 
    bind:dialog_text_close="handleClickClose" 
    bind:dialog_text_main="handleClickMain" 
    bind:dialog_text_minor="handleClickMinor" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/dialogBottom_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|title|String||||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|content|String|是|||内容，或者通过 `<slot>` 方式|
|contentColor|String||颜色值|`#040A23`|内容文本色，支持任何合法的颜色值|
|mainBtnText|String|||`确定`|主按钮文案|
|mainBtnColor|String||颜色值|`#CA0E2D`|主按钮颜色，只支持十六进制颜色值|
|showMinor|Boolean||`true`、`false`|`false`|是否显示辅助按钮|
|minorBtnText|String|||`取消`|辅助按钮文案|
|minorBtnColor|String||颜色值|`#656979`|辅助按钮颜色，只支持16进制颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:dialog_text_close|Click||关闭弹窗回调事件|
|bind:dialog_text_main|Click||主按钮点击回调事件|
|bind:dialog_text_minor|Click||辅助按钮点击回调事件|

## 其他说明
无
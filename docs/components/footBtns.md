# FootBtns 吸底按钮组组件

适用于固定在底部的按钮组场景，支持一个按钮、两个按钮、图标+按钮、自定义+按钮等样式。

![扫码查看](../imgs/footBtns_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-foot-btns": "/components/mxwui/foot-btns/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-foot-btns />
```

## 更多用法示例
### # 样式类型 styleType
属性：`styleType`，可选 `single` 单按钮、`double` 双按钮、`combination` 图标按钮组合、`custom` 左侧自定义，默认 `single`，默认是单按钮样式。

- 单按钮

独占一行的主按钮。

```html
<mx-foot-btns styleType="single" mainBtnText="单按钮" />
```

- 双按钮

辅助按钮在左侧，主按钮在右侧，主按钮比辅助按钮宽。

```html
<mx-foot-btns styleType="double" mainBtnText="主按钮" minorBtnText="次按钮" />
```

- 图标 + 按钮组合

左侧是1-3个图标，超出3个图标则只使用前3个图标。

右侧是主按钮或者次按钮+主按钮。

```html
<mx-foot-btns styleType="combination" mainBtnText="主按钮" leftIcons="{{leftIcons}}" />
```

- 左侧自定义 + 按钮

左侧是自定义区域，通过 `<slot></slot>` 方式插入。

右侧是主按钮。

```html
<mx-foot-btns styleType="custom" mainBtnText="主按钮">
    // 自定义内容
</mx-foot-btns>
```

### # 主按钮文案 mainBtnText
属性：`mainBtnText`，按钮上的文案。
```html
<mx-foot-btns mainBtnText="主按钮" />
```

### # 主按钮类型 mainBtnType
属性：`mainBtnType`，可选 `primary`、`default`、`ghost`，默认 `primary`。
```html
<mx-foot-btns mainBtnType="default" />
```

### # 主按钮颜色 mainBtnColor
属性：`mainBtnColor`，默认 `#CA0E2D`，只支持十六进制颜色值。
```html
<mx-foot-btns mainBtnColor="#1677FF" />
```

### # 主按钮是否禁用 mainBtnDisabled
属性：`mainBtnDisabled`，默认 `false` 不禁用。

- 禁用
```html
<mx-foot-btns mainBtnDisabled />

<mx-foot-btns mainBtnDisabled="{{true}}" />
```

- 不禁用
```html
<mx-foot-btns />

<mx-foot-btns mainBtnDisabled="{{false}}" />
```

### # 辅助按钮文案 minorBtnText
属性：`minorBtnText`，按钮上的文案。
```html
<mx-foot-btns minorBtnText="次按钮" />
```

### # 辅助按钮类型 minorBtnType
属性：`minorBtnType`，可选 `primary`、`default`、`ghost`，默认 `ghost`。
```html
<mx-foot-btns minorBtnType="primary" />
```

### # 辅助按钮颜色 minorBtnColor
属性：`minorBtnColor`，默认 `#9AA0B1`，只支持十六进制颜色值。
```html
<mx-foot-btns minorBtnColor="#1677FF" />
```

### # 辅助按钮是否禁用 minorBtnDisabled
属性：`minorBtnDisabled`，默认 `false` 不禁用。

- 禁用
```html
<mx-foot-btns minorBtnDisabled />

<mx-foot-btns minorBtnDisabled="{{true}}" />
```

- 不禁用
```html
<mx-foot-btns />

<mx-foot-btns minorBtnDisabled="{{false}}" />
```

### # 左侧图标组 leftIcons
属性：`leftIcons`，左侧图标组配置。

参数：`iconName`，图标名称，只支持图标库中图标。

参数：`iconColor`，图标颜色，默认`#040A23`，支持任何合法的颜色值。

参数：`iconUrl`，图标图片地址，传入则 `iconName`、`iconColor` 无效。

参数：`iconSize`，图标大小，默认`48`，不带单位，默认rpx。

参数：`text`，文本，4个字以内。

参数：`textColor`，文本颜色，默认`#040A23`，支持任何合法的颜色值。

事件：`bind:foot_btns_icon`，图标点击事件，返回字段 `event.detail.item` 和 `event.detail.index`。

当样式类型为 `styleType="combination"` 有效

```html
<mx-foot-btns leftIcons="{{leftIcons}}" />
```

### # 层级 zIndex
属性：`zIndex`，数字。
```html
<mx-foot-btns zIndex="2" />
```

## 自定义事件
事件：`bind:foot_btns_main`，主按钮点击事件。

事件：`bind:foot_btns_minor`，辅助按钮点击事件。

事件：`bind:foot_btns_icon`，图标点击事件，返回字段 `event.detail.item` 和 `event.detail.index`。

```html
<mx-foot-btns 
    bind:foot_btns_main="handleMain" 
    bind:foot_btns_minor="handleMinor" 
    bind:foot_btns_icon="handleIcon" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/footBtns_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`single` 单按钮、`double` 双按钮、`combination` 组合按钮、`custom` 左侧自定义|`xxx`|样式类型|
|mainBtnText|String|是|||主按钮文案|
|mainBtnType|String||`primary`、`default`、`ghost`|`primary`|主按钮类型|
|mainBtnColor|String||颜色值|`#CA0E2D`|主按钮颜色，只支持十六进制颜色值|
|mainBtnDisabled|Boolean||`true`、`false`|`false`|主按钮是否禁用|
|minorBtnText|String||||辅助按钮文案|
|minorBtnType|String||`primary`、`default`、`ghost`|`primary`|辅助按钮类型|
|minorBtnColor|String||颜色值|`#9AA0B1`|辅助按钮颜色，只支持十六进制颜色值|
|minorBtnDisabled|Boolean||`true`、`false`|`false`|辅助按钮是否禁用|
|leftIcons|Array||||左侧图标组，最多配置3个，超出只使用前3个图标配置|
|zIndex|Number||数字|`1`|层级|

### leftIcons 左侧图标组配置
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#040A23`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|48|图标大小，不带单位，默认rpx|
|text|String|是|文本|
|textColor|String|`#040A23`|文本颜色，支持任何合法的颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:foot_btns_main|Click||主按钮点击事件|
|bind:foot_btns_minor|Click||辅助按钮点击事件|
|bind:foot_btns_icon|Click|`event`|图标点击事件，返回字段 `event.detail.item` 和 `event.detail.index`|

## 其他说明
无
# Empty 空数据组件

用于展示空数据时的情况，支持自定义图标，支持引导按钮，单按钮、双按钮。

![扫码查看](../imgs/empty_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-empty": "/components/mxwui/empty/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-empty />
```

## 更多用法示例
### # 缺省文案 text
属性：`text`，默认 `暂无数据`。

```html
<mx-empty text="暂无内容" />
```

### # 缺省文案文本色 textColor
属性：`textColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

```html
<mx-empty textColor="#1677FF" />
```

### # 文案描述 desc
属性：`desc`，自定义描述内容。
```html
<mx-empty desc="这是文案描述" />
```

### # 描述文案文本色 descColor
属性：`descColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

```html
<mx-empty descColor="#1677FF" />
```

### # 缺省图标/图片
属性：`iconName`，默认图标 `empty`，只支持图标库中的图标。

属性：`iconColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

属性：`iconUrl`，自定义图片地址，传入则 `iconName` 和 `iconColor` 无效。

属性：`iconSize`，默认 `200`，不带单位，使用rpx。

- 自定义图标
```html
<mx-empty iconName="order" iconColor="#1677FF" iconSize="160" />
```

- 自定义图片
```html
<mx-empty iconUrl="http://cdn.mingsixue.com/xcx/MXWUI/remind2.png" iconSize="240" />
```

### # 单按钮
单按钮只需要设置主按钮属性即可。

属性：`mainBtnText`，主按钮文案

属性：`mainBtnType`，主按钮按钮类型，支持 `primary`、`default`、`ghost`，默认 `primary`。

属性：`mainBtnColor`，主按钮颜色，默认 `#CA0E2D`，只支持十六进制颜色值。

事件：`bind:empty_main_tap`，主按钮点击回调事件

```html
<mx-empty mainBtnText="主按钮" bind:empty_main_tap="handleMainBtn" />
```

- 主按钮按钮类型
```html
<mx-empty mainBtnType="primary" />

<mx-empty mainBtnType="default" />

<mx-empty mainBtnType="ghost" />
```

- 主按钮自定义颜色
```html
<mx-empty mainBtnThemeColor="#1677FF" />
```

### # 双按钮
双按钮需要同时设置主按钮属性和次按钮属性。

属性：`minorBtnText`，次按钮文案

属性：`minorBtnType`，次按钮按钮类型，支持 `primary`、`default`、`ghost`，默认 `default`。

属性：`minorBtnColor`，次按钮颜色，默认 `#CA0E2D`，只支持十六进制颜色值。

事件：`bind:empty_minor_tap`，主按钮点击回调事件

```html
<mx-empty mainBtnText="主按钮" bind:empty_main_tap="handleMainBtn" minorBtnText="次按钮" bind:empty_minor_tap="handleMinorBtn"  />
```

- 次按钮按钮类型
```html
<mx-empty mainBtnType="default" />

<mx-empty mainBtnType="primary" />

<mx-empty mainBtnType="ghost"  />
```

- 次按钮自定义颜色
```html
<mx-empty minorBtnThemeColor="#1677FF"  />
```

### # 设置距离顶部距离
属性：`top`，默认 `0`，数字。
```html
<mx-empty top="300" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/empty_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|||`暂无数据`|缺省文案|
|textColor|String||颜色值|`#9AA0B1`|缺省文案文本色，支持任何合法的颜色值|
|desc|String||||描述文案|
|descColor|String||颜色值|`#9AA0B1`|描述文案文本色，支持任何合法的颜色值|
|iconName|String|是||`empty`|图标名称，只支持图标库中图标|
|iconColor|String||颜色值|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconSize|Number|||`200`|图标大小，不带单位，默认使用rpx|
|iconUrl|String|是|||图标自定义图片，传了则`iconName`、`iconColor`、`iconSize` 无效|
|top|Number||`0`|距离顶部距离，单位rpx|
|mainBtnText|String||||主按钮文案|
|mainBtnType|String||`primary`、`default`、`ghost`|`primary`|主按钮按钮类型|
|mainBtnColor|String||颜色值|`#CA0E2D`|主按钮自定义颜色，只支持十六进制颜色值|
|minorBtnText|String||||次按钮文案|
|minorBtnType|String||`primary`、`default`、`ghost`|`default`|次按钮按钮类型|
|minorBtnColor|String||颜色值|`#CA0E2D`|次按钮自定义颜色，只支持十六进制颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:empty_main_tap|Click||主按钮点击事件回调|
|bind:empty_minor_tap|Click||次按钮点击事件回调|

## 其他说明
- 次按钮必须和主按钮配合使用，不能单独使用次按钮
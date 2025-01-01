# Search 搜索组件

搜索场景的输入框组件，在信息池中缩小范围，快速而轻松地获取目标信息。

![扫码查看](../imgs/search_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-search": "/components/mxwui/search/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-search />
```

## 更多用法示例
### # 搜索栏样式 styleType
属性：`styleType`，可选 `normal`、`insert`，默认 `normal`。

- 样式一 `styleType="normal"`
```html
<mx-search />

<mx-search styleType="normal" />
```

- 样式二 `styleType="insert"`
```html
<mx-search styleType="insert" />
```

### # 值 value
属性：`value`，默认值或者输入的值。
```html
<mx-search value="纳兰忱" />
```

### # 是否显示搜索图标 showSearchIcon
属性：`showSearchIcon`，默认 `true` 默认显示。

- 显示
```html
<mx-search />

<mx-search showSearchIcon />

<mx-search showSearchIcon="{{true}}" />
```

- 不显示
```html
<mx-search showSearchIcon="{{false}}" />
```

### # 搜索图标颜色 searchIconColor
属性：`searchIconColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

```html
<mx-search searchIconColor="#1677FF" />
```

### # 搜索图标大小 searchIconSize
属性：`searchIconSize`，默认 `48`，数字，不带单位。

```html
<mx-search searchIconSize="40" />
```

### # 占位文本 placeholder
属性：`placeholder`，默认 `请输入`。

```html
<mx-search placeholder="40" />
```

### # 占位文本颜色 placeholderColor
属性：`placeholderColor`，默认 `#9AA0B1`，支持任何合法的颜色值。

```html
<mx-search placeholderColor="#1677FF" />
```

### # 光标颜色 cursorColor
属性：`cursorColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

```html
<mx-search cursorColor="#1677FF" />
```

### # 是否显示清除按钮 showClear
属性：`showClear`，默认 `true` 显示清除。

- 显示
```html
<mx-search />

<mx-search showClear />

<mx-search showClear="{{true}}" />
```

- 不显示
```html
<mx-search showClear="{{false}}" />
```

### # 是否显示按钮 showBtn
属性：`showBtn`，默认 `false` 显示按钮。

- 显示
```html
<mx-search />

<mx-search showBtn />

<mx-search showBtn="{{true}}" />
```

- 不显示
```html
<mx-search showBtn="{{false}}" />
```

### # 按钮文案 btnText
属性：`btnText`，默认 `搜索`。

```html
<mx-search btnText="取消" />
```

### # 按钮文本色 btnColor
属性：`btnColor`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-search btnColor="#1677FF" />
```

### # 搜索栏背景色 bgColor
属性：`bgColor`，默认 `#EFF0F5`，支持任何合法的颜色值。

```html
<mx-search bgColor="#1677FF" />
```

### # 预设关键词文本 keyword
属性：`keyword`，预设关键词文本。
```html
<mx-search keyword="手机" />
```

### # 预设关键词背景色 keywordBgColor
属性：`keywordBgColor`，默认 `#FFFFFF` 或 `#EFF0F5`，支持任何合法的颜色值。

```html
<mx-search keywordBgColor="#1677FF" />
```

### # 预设关键词文本色 keywordColor
属性：`keywordColor`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-search keywordColor="#1677FF" />
```

### # 是否显示返回按钮 showBack
属性：`showBack`，默认 `false` 不显示返回按钮。

- 显示
```html
<mx-search showBack />

<mx-search showBack="{{true}}" />
```

- 不显示
```html
<mx-search />

<mx-search showBack="{{false}}" />
```

### # 返回图标颜色 keywordColor
属性：`backColor`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-search backColor="#1677FF" />
```

## 自定义事件
属性：`bind:search_change`，值变更事件，返回 `event.detail` 里返回字段 `value`、`cursor`、 `keyCode`、`keyword` 和 `from`；`from` 表示事件发生来源，值有 `input` 输入框、`btn` 按钮、`clear` 清除图标。

属性：`bind:search_back`，返回按钮点击事件。
```html
<mx-xxx 
    bind:search_change="handleChange"
    bind:search_back="handleBack" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/search_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`normal`、`insert`|`normal`|搜索栏样式|
|value|String||||值|
|showSearchIcon|Boolean||`true`、`false`|`true`|是否显示搜索图标|
|searchIconColor|String||颜色值|`#9AA0B1`|搜索图标颜色，支持任何合法的颜色值|
|searchIconSize|Number||数字|`48`|搜索图标大小|
|placeholder|String|||`请输入`|占位文本|
|placeholderColor|String||颜色值|`#9AA0B1`|占位文本颜色，支持任何合法的颜色值|
|cursorColor|String||颜色值|`#CA0E2D`|光标颜色，支持任何合法的颜色值|
|showClear|Boolean||`true`、`false`|`true`|是否显示清除按钮|
|showBtn|Boolean||`true`、`false`|`false`|是否显示按钮|
|btnText|String|||`搜索`|按钮文案|
|btnColor|String||颜色值|`#040A23`|按钮文本色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#EFF0F5`|搜索栏背景色，支持任何合法的颜色值|
|keyword|String||||预设关键词文本|
|keywordBgColor|String||颜色值|`#FFF` 或 `#EFF0F5`|预设关键词背景色，支持任何合法的颜色值|
|keywordColor|String||颜色值|`#040A23`|预设关键词文本色，支持任何合法的颜色值|
|showBack|Boolean||`true`、`false`|`false`|是否显示返回按钮|
|backColor|String||颜色值|`#040A23`|返回图标颜色，支持任何合法的颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:search_change|Change|`event.detail`|值变更事件，返回 `event.detail` 里返回字段 `value`、`cursor`、 `keyCode`、`keyword` 和 `from`；`from` 表示事件发生来源，值有 `input` 输入框、`btn` 按钮、`clear` 清除图标|
|bind:search_back|Click||返回按钮点击事件|

## 其他说明
无
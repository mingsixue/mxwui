# 复选框 Checkbox组件

用于选项之间的选择，一般用于在一组选项中选择多个值。

![扫码查看](../imgs/checkbox_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-checkbox": "/components/mxwui/checkbox/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-checkbox />
```

## 更多用法示例
### # 文案 text
属性：`text`，标签文案。
```html
<mx-checkbox text="自定义文案" />
```

### # 文案颜色 textColor
属性：`textColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-checkbox text="标签" textColor="#1677FF" />
```

### # 是否选中 checked
属性：`checked`，默认 `false` 不选中。

- 选中
```html
<mx-checkbox checked />

<mx-checkbox checked="{{true}}" />
```

- 未选中
```html
<mx-checkbox />

<mx-checkbox checked="{{false}}" />
```

### # 是否禁用 disabled
属性：`disabled`，默认 `false` 不禁用。
- 禁用
```html
<mx-checkbox disabled />

<mx-checkbox disabled="{{true}}" />
```

- 未禁用
```html
<mx-checkbox />

<mx-checkbox disabled="{{false}}" />
```

### # 单选框位置 checkboxPosition
属性：`checkboxPosition`，可选 `after`、`before`，默认 `before` 在标签文案之后。

- 在标签之前
```html
<mx-checkbox />

<mx-checkbox checkboxPosition />

<mx-checkbox checkboxPosition="before" />
```

- 在标签之后
```html
<mx-checkbox checkboxPosition="after" />
```

### # 单选框未选中颜色 checkboxColor
属性：`checkboxColor`，默认 `#9AA0B1`，只支持十六进制颜色值。
```html
<mx-checkbox checkboxColor="#000" />
```

### # 单选框选中颜色 checkboxSelectColor
属性：`checkboxSelectColor`，默认 `#CA0E2D`，只支持十六进制颜色值。
```html
<mx-checkbox checkboxSelectColor="#1677FF" />
```

### # 单选框大小 checkboxSize
属性：`checkboxSize`，默认 `48`，数字，不带单位，默认使用rpx。
```html
<mx-checkbox checkboxSize="32" />
```

## 自定义事件
事件：`bind:checkbox_change`，变更事件，返回字段 `checked`，值为 `true` 或 `false`。
```html
<mx-checkbox 
    bind:checkbox_change="handleChange" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/checkbox_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|text|String|是|||文案|
|textColor|String||颜色值|`#040A23`|文案颜色，支持任何合法的颜色值|
|checked|Boolean||`true`、`false`|`false`|是否选中|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|checkboxPosition|String||`after`、`before`|`before`|单选框位置|
|checkboxColor|String||颜色值|`#9AA0B1`|单选框未选中颜色，只支持十六进制颜色值|
|checkboxSelectColor|String||颜色值|`#CA0E2D`|单选框未选中颜色，只支持十六进制颜色值|
|checkboxSize|Number||数字|`48`|单选框大小，不带单位，默认使用rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:checkbox_change|Change|`event.detail`|变更事件，返回字段 `checked`，值为 `true` 或 `false`|

## 其他说明
无
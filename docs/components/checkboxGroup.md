# 单选框组 CheckboxGroup组件

用于选项之间的选择，一般用于在一组选项中选择多个值。

![扫码查看](../imgs/checkboxGroup_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-checkbox-group": "/components/mxwui/checkbox-group/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
data: {
    options: [
        {text: '选项一', value: 1, checked: false},
        {text: '选项二', value: 2, checked: true},
        {text: '选项三', value: 3, disabled: true},
        {text: '选项四', value: 4, checked: true, disabled: true}
    ]
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-checkbox-group options="{{options}}" />
```

## 更多用法示例
### # 样式类型 styleType
提供4种样式，属性：`styleType`，可选 `normal`、`horizontal`、`vertical`、`web`，默认 `normal`，必填。

- 样式一：normal
```html
<mx-checkbox-group styleType="normal" />
```
<!-- ![normal](../imgs/checkboxGroup_styletype_normal.png) -->

- 样式二：horizontal
```html
<mx-checkbox-group styleType="horizontal" />
```
<!-- ![horizontal](../imgs/checkboxGroup_styletype_horizontal.png) -->

- 样式三：vertical
```html
<mx-checkbox-group styleType="vertical" />
```
<!-- ![vertical](../imgs/checkboxGroup_styletype_vertical.png) -->

- 样式四：web
```html
<mx-checkbox-group styleType="web" />
```
<!-- ![web](../imgs/checkboxGroup_styletype_web.png) -->

### # 数据项 options
属性：`options`，数据项，必填。

参数：`text`，单选项名称，用于界面显示。

参数：`value`，单选项值，主要用于传给后端。

参数：`checked`，单选项是否选中。

参数：`disabled`，单选项是否禁用。

除了以上参数，传入的其他参数会原样返回。

```js
// js
data: {
    options: [
        {text: '选项名', value: '选项值', checked: true, disabled: true},
    ],
},
```
```html
<mx-checkbox-group options="{{options}}" />
```

### # 单选框位置 checkboxPosition
属性：`checkboxPosition`，可选 `after`、`before`，默认 `before` 在项名称之后。

- 在项名称之前
```html
<mx-checkbox-group />

<mx-checkbox-group checkboxPosition />

<mx-checkbox-group checkboxPosition="before" />
```

- 在项名称之后
```html
<mx-checkbox-group checkboxPosition="after" />
```

### # 单选框未选中颜色 checkboxColor
属性：`checkboxColor`，默认 `#9AA0B1`，只支持十六进制颜色值。
```html
<mx-checkbox-group checkboxColor="#000" />
```

### # 单选框选中颜色 checkboxSelectColor
属性：`checkboxSelectColor`，默认 `#CA0E2D`，只支持十六进制颜色值。
```html
<mx-checkbox-group checkboxSelectColor="#1677FF" />
```

### # 单选框大小 checkboxSize
属性：`checkboxSize`，默认 `48`，数字，不带单位，默认使用rpx。
```html
<mx-checkbox-group checkboxSize="32" />
```
### # 描述或错误文案 desc
属性：`desc`，用于辅助说明文案或错误提示文案，在通栏下方。
```html
<mx-checkbox-group desc="描述内容" />
```

### # 描述或错误文案颜色 descColor
属性：`descColor`，默认值 `#656979`，支持任何合法的颜色值。
```html
<mx-checkbox-group descColor="#CA0E2D" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认值 `false` 不显示分隔线，用于区域之间的分隔。

只在 `styleType` 为 `normal` 和 `horizontal` 有效，`vertical` 和 `web` 时在样式设计上没有分隔线，所以不需要。

- 显示分隔线
```html
<mx-checkbox-group showLine />

<mx-checkbox-group showLine="{{true}}" />
```

- 不显示分隔线
```html
<mx-checkbox-group />

<mx-checkbox-group showLine="{{false}}" />
```

### # 文案 label
属性：`label`，常用于表单填写项的名称。
```html
<mx-checkbox-group label="标签文案" />
```

### # 文案文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。

需要配合 `label` 属性一起使用
```html
<mx-checkbox-group labelColor="#1677FF" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用
- 左对齐
```html
<mx-checkbox-group />

<mx-checkbox-group labelAlign="left" />
```

- 居中对齐
```html
<mx-checkbox-group labelAlign="center" />
```

- 右对齐
```html
<mx-checkbox-group labelAlign="right" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用 rpx。

```html
<mx-checkbox-group leftWidth="300" />
```

### # 是否显示必填星号 required
属性：`required`，默认值 `false` 不显示必填星号。

- 显示星号
```html
<mx-checkbox-group required />

<mx-checkbox-group required="{{true}}" />
```

- 不显示星号
```html
<mx-checkbox-group required="{{false}}" />

<mx-checkbox-group />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值 `left`、`right`，默认值 `right` 在标签文本后面。

- 星号在标签后
```html
<mx-checkbox-group required />

<mx-checkbox-group required requiredPosition />

<mx-checkbox-group required requiredPosition="right" />
```

- 星号在标签前
```html
<mx-checkbox-group required requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:checkbox_group_firstIcon`，标签前图标点击事件。

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
<mx-checkbox-group firstIcon="{{firstIcon}}" bind:checkbox_group_firstIcon="事件函数" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:checkbox_group_lastIcon`，标签后图标点击事件。

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
<mx-checkbox-group lastIcon="{{lastIcon}}" bind:checkbox_group_lastIcon="事件函数" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-checkbox-group bgColor="#f2f2f2" />
```

### # 是否横向布局 horizontal
属性：`horizontal`，默认值 `false`，默认纵向布局。

当 `styleType == 'web'` 时有效。

- 横向
```html
<mx-checkbox-group horizontal />

<mx-checkbox-group horizontal="{{true}}" />
```

- 纵向
```html
<mx-checkbox-group />

<mx-checkbox-group horizontal="{{false}}" />
```

## 自定义事件
事件：`bind:checkbox_group_change`，变更事件，返回字段 `index`、`value`、`item`、`options`，返回选中的值，数组。

事件：`bind:checkbox_group_firstIcon`，标签前图标点击事件。

事件：`bind:checkbox_group_lastIcon`，标签后图标点击事件。

```html
<mx-checkbox-group 
    bind:checkbox_groupchange="handleChange" 
    bind:checkbox_group_firstIcon="handleFirstIcon"
    bind:checkbox_group_lastIcon="handleLastIcon"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/checkboxGroup_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`normal`、`horizontal`、`vertical`、`web`|`normal`|样式类型|
|options|Array|是|||数据项|
|checkboxPosition|String||`after`、`before`|`before`|单选框位置|
|checkboxColor|String||颜色值|`#9AA0B1`|单选框未选中颜色，只支持十六进制颜色值|
|checkboxSelectColor|String||颜色值|`#CA0E2D`|单选框未选中颜色，只支持十六进制颜色值|
|checkboxSize|Number||数字|`48`|单选框大小，不带单位，默认使用rpx|
|desc|String||||描述或错误文案|
|descColor|String||颜色值|`#656979`|描述或错误文案颜色，支持任何合法的颜色值|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|

### styleType="normal"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|showLine|Boolean||`true`、`false`|`false`|是否显示分隔线|

### styleType="horizontal"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|showLine|Boolean||`true`、`false`|`false`|是否显示分隔线|
|label|String||||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|

### styleType="vertical"
|label|String||||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|

### styleType="web"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|horizontal|Boolean||`true`、`false`|`false`|是否横向布局|
|label|String||||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|

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
|bind:checkbox_group_change|Change|`event.detail`|变更事件，返回字段 `index`、`value`、`item`、`options`，返回选中的值，数组|
|bind:checkbox_group_firstIcon|Click||标签前图标点击事件|
|bind:checkbox_group_lastIcon|Click||标签后图标点击事件|

## 其他说明
无
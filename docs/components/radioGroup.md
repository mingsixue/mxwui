# 单选框组 RadioGroup组件

用于互斥选项之间的选择，一般用于在一组选项中选择一个值。

![扫码查看](../imgs/radioGroup_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-radio-group": "/components/mxwui/radio-group/index"
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
<mx-radio-group options="{{options}}" />
```

## 更多用法示例
### # 样式类型 styleType
提供3种样式，属性：`styleType`，可选 `normal`、`horizontal`、`vertical`、`web`，默认 `normal`，必填。

- 样式一：normal
```html
<mx-radio-group styleType="normal" />
```
<!-- ![normal](../imgs/radioGroup_styletype_normal.png) -->

- 样式二：horizontal
```html
<mx-radio-group styleType="horizontal" />
```
<!-- ![horizontal](../imgs/radioGroup_styletype_horizontal.png) -->

- 样式三：vertical
```html
<mx-radio-group styleType="vertical" />
```
<!-- ![vertical](../imgs/radioGroup_styletype_vertical.png) -->

- 样式四：web
```html
<mx-radio-group styleType="web" />
```
<!-- ![web](../imgs/radioGroup_styletype_web.png) -->

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
<mx-radio-group options="{{options}}" />
```

### # 单选框位置 radioPosition
属性：`radioPosition`，可选 `after`、`before`，默认 `before` 在项名称之后。

- 在项名称之前
```html
<mx-radio-group />

<mx-radio-group radioPosition />

<mx-radio-group radioPosition="before" />
```

- 在项名称之后
```html
<mx-radio-group radioPosition="after" />
```

### # 单选框未选中颜色 radioColor
属性：`radioColor`，默认 `#9AA0B1`，只支持十六进制颜色值。
```html
<mx-radio-group radioColor="#000" />
```

### # 单选框选中颜色 radioSelectColor
属性：`radioSelectColor`，默认 `#CA0E2D`，只支持十六进制颜色值。
```html
<mx-radio-group radioSelectColor="#1677FF" />
```

### # 单选框大小 radioSize
属性：`radioSize`，默认 `48`，数字，不带单位，默认使用rpx。
```html
<mx-radio-group radioSize="32" />
```
### # 描述或错误文案 desc
属性：`desc`，用于辅助说明文案或错误提示文案，在通栏下方。
```html
<mx-radio-group desc="描述内容" />
```

### # 描述或错误文案颜色 descColor
属性：`descColor`，默认值 `#656979`，支持任何合法的颜色值。
```html
<mx-radio-group descColor="#CA0E2D" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认值 `false` 不显示分隔线，用于区域之间的分隔。

只在 `styleType` 为 `normal` 和 `horizontal` 有效，`vertical` 和 `web` 时在样式设计上没有分隔线，所以不需要。

- 显示分隔线
```html
<mx-radio-group showLine />

<mx-radio-group showLine="{{true}}" />
```

- 不显示分隔线
```html
<mx-radio-group />

<mx-radio-group showLine="{{false}}" />
```

### # 文案 label
属性：`label`，常用于表单填写项的名称。
```html
<mx-radio-group label="标签文案" />
```

### # 文案文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。

需要配合 `label` 属性一起使用
```html
<mx-radio-group labelColor="#1677FF" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用
- 左对齐
```html
<mx-radio-group />

<mx-radio-group labelAlign="left" />
```

- 居中对齐
```html
<mx-radio-group labelAlign="center" />
```

- 右对齐
```html
<mx-radio-group labelAlign="right" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用 rpx。

```html
<mx-radio-group leftWidth="300" />
```

### # 是否显示必填星号 required
属性：`required`，默认值 `false` 不显示必填星号。

- 显示星号
```html
<mx-radio-group required />

<mx-radio-group required="{{true}}" />
```

- 不显示星号
```html
<mx-radio-group required="{{false}}" />

<mx-radio-group />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值 `left`、`right`，默认值 `right` 在标签文本后面。

- 星号在标签后
```html
<mx-radio-group required />

<mx-radio-group required requiredPosition />

<mx-radio-group required requiredPosition="right" />
```

- 星号在标签前
```html
<mx-radio-group required requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:radio_group_firstIcon`，标签前图标点击事件。

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
<mx-radio-group firstIcon="{{firstIcon}}" bind:radio_group_firstIcon="事件函数" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，任何合法的颜色值。

参数：`iconSize`，图标/图片大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:radio_group_lastIcon`，标签后图标点击事件。

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
<mx-radio-group lastIcon="{{lastIcon}}" bind:radio_group_lastIcon="事件函数" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-radio-group bgColor="#f2f2f2" />
```

### # 是否横向布局 horizontal
属性：`horizontal`，默认值 `false`，默认纵向布局。

当 `styleType == 'web'` 时有效。

- 横向
```html
<mx-radio-group horizontal />

<mx-radio-group horizontal="{{true}}" />
```

- 纵向
```html
<mx-radio-group />

<mx-radio-group horizontal="{{false}}" />
```

## 自定义事件
事件：`bind:radio_group_change`，变更事件，返回字段 `index`、`checked`、`value`、`item`、`options`；字段 `checked` 值为 `true` 或 `false` 当前项是否选中；字段 `value` 值为 `true` 或 `false` 当前项的值。

事件：`bind:radio_group_firstIcon`，标签前图标点击事件。

事件：`bind:radio_group_lastIcon`，标签后图标点击事件。

```html
<mx-radio-group 
    bind:radio_groupchange="handleChange" 
    bind:radio_group_firstIcon="handleFirstIcon"
    bind:radio_group_lastIcon="handleLastIcon"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/radioGroup_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`normal`、`horizontal`、`vertical`、`web`|`normal`|样式类型|
|options|Array|是|||数据项|
|radioPosition|String||`after`、`before`|`before`|单选框位置|
|radioColor|String||颜色值|`#9AA0B1`|单选框未选中颜色，只支持十六进制颜色值|
|radioSelectColor|String||颜色值|`#CA0E2D`|单选框未选中颜色，只支持十六进制颜色值|
|radioSize|Number||数字|`48`|单选框大小，不带单位，默认使用rpx|
|desc|String||||描述或错误文案|
|descColor|String||颜色值|`#656979`|描述或错误文案颜色，任何合法的颜色值|
|bgColor|String||颜色值|`#FFFFFF`|背景色，任何合法的颜色值|

### styleType="normal"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|showLine|Boolean||`true`、`false`|`false`|是否显示分隔线|

### styleType="horizontal"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|showLine|Boolean||`true`、`false`|`false`|是否显示分隔线|
|label|String||||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|

### styleType="vertical"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|label|String||||标签文案，`styleType="normal"` 可不填|
|labelColor|String||颜色值||标签文案文本色，任何合法的颜色值|
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
|labelColor|String||颜色值||标签文案文本色，任何合法的颜色值|
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
|iconUrl|Number||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

### lastIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，任何合法的颜色值|
|iconUrl|Number||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`32`|图标大小，不带单位，默认rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:radio_group_change|Change|`event.detail`|变更事件，返回字段 `index`、`checked`、`value`、`item`、`options`；字段 `checked` 值为 `true` 或 `false` 当前项是否选中；字段 `value` 值为 `true` 或 `false` 当前项的值|
|bind:radio_group_firstIcon|Click||标签前图标点击事件|
|bind:radio_group_lastIcon|Click||标签后图标点击事件|

## 其他说明
无
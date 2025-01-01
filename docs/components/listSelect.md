# ListSelect 列表选择组件

列表形式的选择组件，支持单选和多选。

![扫码查看](../imgs/listSelect_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-list-select": "/components/mxwui/list-select/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
options: [
    {text: '选项一', value: 1, checked: false},
    {text: '选项二', value: 2, checked: true},
    {text: '选项三', value: 3, disabled: true},
]
```

页面 `.wxml` 文件中使用组件
```html
<mx-list-select options="{{options}}" />
```

## 更多用法示例
### # 类型 type
属性：`type`，可选 `single` 单选、`multiple` 多选，默认 `single` 单选类型，必填。

- 单选 `type="single"`
```html
<mx-list-select />

<mx-list-select type="single" />
```

- 多选 `type="multiple"`
```html
<mx-list-select type="multiple" />
```

### # 数据项 options
属性：`options`，数据项，必填。

参数：`text`，选项名称，用于界面显示。

参数：`value`，选项值，主要用于传给后端。

参数：`checked`，选项是否选中。

参数：`disabled`，选项是否禁用。

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
<mx-list-select options="{{options}}" />
```

### # 单选框样式 singleIcon
属性：`singleIcon`，可选 `default`、`radio`，默认 `default` 默认样式，必填。

- 默认样式 `singleIcon="default"`
```html
<mx-list-select />

<mx-list-select singleIcon="default" />
```

- radio样式 `singleIcon="radio"`
```html
<mx-list-select singleIcon="radio" />
```

### # 复选框样式 multipleIcon
属性：`multipleIcon`，可选 `default`、`checkbox`，默认 `default` 默认样式，必填。

- 默认样式 `multipleIcon="default"`
```html
<mx-list-select />

<mx-list-select multipleIcon="default" />
```

- checkbox样式 `multipleIcon="checkbox"`
```html
<mx-list-select multipleIcon="checkbox" />
```

### # 单选框/复选框颜色 iconColor
属性：`iconColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-list-select iconColor="#1677FF" />
```

### # 单选框/复选框大小 iconSize
属性：`iconSize`，默认 `48`，数字，不带单位，默认使用rpx。
```html
<mx-list-select iconSize="30" />
```

### # 文本颜色 textColor
属性：`textColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-list-select textColor="#1677FF" />
```

### # 文本选中颜色 textSelectColor
属性：`textSelectColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-list-select textSelectColor="#1677FF" />
```

### # 描述或错误文案 desc
属性：`desc`，用于辅助说明文案或错误提示文案，在通栏下方。
```html
<mx-list-select desc="描述内容" />
```

### # 描述或错误文案颜色 descColor
属性：`descColor`，默认值 `#656979`，支持任何合法的颜色值。
```html
<mx-list-select descColor="#CA0E2D" />
```

### # 标签文案 label
属性：`label`，常用于表单填写项的名称。
```html
<mx-list-select label="标签文案" />
```

### # 标签文案文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。

需要配合 `label` 属性一起使用
```html
<mx-list-select labelColor="#1677FF" />
```

### # 是否显示必填星号 required
属性：`required`，默认值 `false` 不显示必填星号。

- 显示星号
```html
<mx-list-select required />

<mx-list-select required="{{true}}" />
```

- 不显示星号
```html
<mx-list-select required="{{false}}" />

<mx-list-select />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值 `left`、`right`，默认值 `right` 在标签文本后面。

- 星号在标签后
```html
<mx-list-select required />

<mx-list-select required requiredPosition />

<mx-list-select required requiredPosition="right" />
```

- 星号在标签前
```html
<mx-list-select required requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:list_select_firstIcon`，标签前图标点击事件。

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
<mx-list-select firstIcon="{{firstIcon}}" bind:list_select_firstIcon="事件函数" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:list_select_lastIcon`，标签后图标点击事件。

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
<mx-list-select lastIcon="{{lastIcon}}" bind:list_select_lastIcon="事件函数" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-list-select bgColor="#f2f2f2" />
```

## 自定义事件
事件：`bind:list_select_change`，变更事件，返回字段 `type`、`index`、`value`、`item`、`options`，返回选中的值，如果是多选则返回数组。字段 `type` 的值为 `single` 或 `multiple`。

事件：`bind:list_select_firstIcon`，标签前图标点击事件。

事件：`bind:list_select_lastIcon`，标签后图标点击事件。

```html
<mx-list-select 
    bind:list_select_change="handleChange" 
    bind:list_select_firstIcon="handleFirstIcon"
    bind:list_select_lastIcon="handleLastIcon"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/listSelect_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|type|String|是|`single` 单选、`multiple` 多选|`single`|类型|
|options|Array|是|||数据项|
|singleIcon|String|是|`default`、`radio`|`default`|单选框样式|
|multipleIcon|String|是|`default`、`checkbox`|`default`|复选框样式|
|iconColor|String||颜色值|`#040A23`|单选框/复选框颜色，支持任何合法的颜色值|
|iconSize|Number||数字|`48`|单选框/复选框大小，不带单位，默认使用rpx|
|textColor|String||颜色值|`#040A23`|文本颜色，支持任何合法的颜色值|
|textSelectColor|String||颜色值|`#040A23`|文本选中颜色，支持任何合法的颜色值|
|desc|String||||描述或错误文案|
|descColor|String||颜色值|`#656979`|描述或错误文案颜色，支持任何合法的颜色值|
|label|String||||标签文案|
|labelColor|String||颜色值||标签文案文本色，任何合法的颜色值|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标配置|
|lastIcon|Object||||标签后图标配置|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|

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
|bind:list_select_change|Change|`event.detail`|变更事件，返回字段 `type`、`index`、`value`、`item`、`options`，返回选中的值，多选为数组；字段 `type` 的值为 `single` 或 `multiple`|
|bind:list_select_firstIcon|Click||标签前图标点击事件|
|bind:list_select_lastIcon|Click||标签后图标点击事件|

## 其他说明
无
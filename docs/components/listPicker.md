# ListPicker 列表下拉组件

下拉选择器，支持普通选择器、多列选择器、时间选择器、日期选择器和省市区选择器。

![扫码查看](../imgs/listPicker_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-list-picker": "/components/mxwui/list-picker/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-list-picker />
```

## 更多用法示例
### # 样式类型 styleType
提供3种样式，属性：`styleType`，可选 `horizontal`、`vertical`、`web`，默认 `horizontal`。必填。

- 样式一：horizontal
```html
<mx-list-picker styleType="horizontal" />
```
<!-- ![horizontal](../imgs/listPicker_styletype_horizontal.png) -->

- 样式二：vertical
```html
<mx-list-picker styleType="vertical" />
```
<!-- ![vertical](../imgs/listPicker_styletype_vertical.png) -->

- 样式三：web 风格
```html
<mx-list-picker styleType="web" />
```
<!-- ![web](../imgs/listPicker_styletype_web.png) -->

### # 下拉类型 mode
属性：`mode`，可选 `selector` 普通选择器、`multiSelector` 多列选择器、`time` 时间选择器、`date` 日期选择器、`region` 省市区选择器，默认 `selector` 普通选择器。必填。

- 普通选择器：horizontal
```html
<mx-list-picker mode="selector" />
```
<!-- ![selector](../imgs/listPicker_mode_selector.png) -->

- 多列选择器：multiSelector
```html
<mx-list-picker mode="multiSelector" />
```
<!-- ![multiSelector](../imgs/listPicker_mode_multiSelector.png) -->

- 时间选择器：time
```html
<mx-list-picker mode="time" />
```
<!-- ![time](../imgs/listPicker_mode_time.png) -->

- 日期选择器：date
```html
<mx-list-picker mode="date" />
```
<!-- ![time](../imgs/listPicker_mode_date.png) -->

- 省市区选择器：region
```html
<mx-list-picker mode="region" />
```
<!-- ![time](../imgs/listPicker_mode_region.png) -->

### # 数据项 options
属性：`options`，数据配置项，必填。

参数：`label`，选择项名称，必填。

当 `mode="selector"` 普通选择器时为一维数组。

当 `mode="multiSelector"` 多列选择器时为二维数组。

- 普通选择器
```js
// js
data: {
    options: [
        {label: '名称'}
    ]
}
```
```html
<mx-list-picker mode="selector" options="{{options}}" />
```

- 多列选择器
```js
// js
data: {
    options: [
        [
            {label: '第一列'},
        ],
        [
            {label: '第二列'},
        ]
    ]
}
```
```html
<mx-list-picker mode="multiSelector" options="{{options}}" />
```


### # key值 rangeKey
属性：`rangeKey`，默认 `label`，建议不要更改。

当选择器类型为 `mode="selector"` 或 `mode="multiSelector"` 有效。
```html
<mx-list-picker rangeKey="label" />
```

### # 普通选择器下标 index
属性：`index`，从 0 开始的下标值。

当选择器类型为 `mode="selector"` 有效。
```html
<mx-list-picker index="1" />
```

### # 多列选择器下标值 multiIndex
属性：`multiIndex`，每一列都是从 0 开始的下标值，数组形式。

当选择器类型为 `mode="multiSelector"` 有效。
```js
// js
data: {
    multiIndex: [1, 2]
}
```
```html
<mx-list-picker multiIndex="{{multiIndex}}" />
```

### # 时间 time
属性：`time`，时间值，格式为 hh:mm。

当选择器类型为 `mode="time"` 有效。
```html
<mx-list-picker time="13:14" />
```

### # 日期 date
属性：`date`，日期值，格式为 YYYY-MM-DD。

当选择器类型为 `mode="date"` 有效。
```html
<mx-list-picker date="2024-05-20" />
```

### # 开始时间/开始日期 start
- 时间选择器

属性：`start`，时间值，格式为 hh:mm。

当选择器类型为 `mode="time"` 有效。
```html
<mx-list-picker start="13:14" />
```

- 日期选择器

属性：`start`，日期值，格式为 YYYY-MM-DD。

当选择器类型为 `mode="date"` 有效。
```html
<mx-list-picker start="2024-05-20" />
```

### # 结束时间/结束日期 end
- 时间选择器

属性：`end`，时间值，格式为 hh:mm。

当选择器类型为 `mode="time"` 有效。
```html
<mx-list-picker end="13:14" />
```

- 日期选择器

属性：`end`，日期值，格式为 YYYY-MM-DD。

当选择器类型为 `mode="date"` 有效。
```html
<mx-list-picker end="2024-05-20" />
```

### # 日期选择器粒度 fields
属性：`fields`，可选 `year` 年、`month` 月、`day` 天，默认 `day`，默认粒度为天。

- 年
```html
<mx-list-picker fields="year" />
```
<!-- ![year](../imgs/listPicker_fields_year.png) -->

- 年月
```html
<mx-list-picker fields="month" />
```
<!-- ![month](../imgs/listPicker_fields_month.png) -->

- 年月日
```html
<mx-list-picker fields="day" />
```
<!-- ![day](../imgs/listPicker_fields_day.png) -->

### # 省市区选择器值 region
属性：`region`，数组。

当选择器类型为 `mode="region"` 有效。
```js
// js
data: {
    region: ['浙江省', '杭州市', '西湖区']
}
```
```html
<mx-list-picker region="{{region}}" />
```

### # 省市区选择器层级 level
属性：`level`，可选 `province` 省级选择器、`city` 市级选择器、`region` 区级选择器、`sub-district` 街道选择器，默认 `region`，默认层级为区级。

当选择器类型为 `mode="region"` 有效。

- 省级选择器
```html
<mx-list-picker level="province" />
```
<!-- ![province](../imgs/listPicker_level_province.png) -->

- 市级选择器
```html
<mx-list-picker level="city" />
```
<!-- ![city](../imgs/listPicker_level_city.png) -->

- 区级选择器
```html
<mx-list-picker level="region" />
```
<!-- ![region](../imgs/listPicker_level_region.png) -->

- 街道选择器
```html
<mx-list-picker level="sub-district" />
```
<!-- ![sub-district](../imgs/listPicker_level_subdistrict.png) -->


### # 占位文本 placeholder
属性：`placeholder`，默认 `请选择`。
```html
<mx-list-picker placeholder="请选择内容" />
```

### # 占位文本颜色 placeholderColor
属性：`placeholderColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-list-picker placeholderColor="#1677FF" />
```

### # 文本色 textColor
属性：`textColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-list-picker textColor="#1677FF" />
```

### # 是否禁用 disabled
属性：`disabled`，默认 `false`，默认不禁用。

- 禁用
```html
<mx-list-picker />

<mx-list-picker disabled="{{true}}" />
```

- 不禁用
```html
<mx-list-picker />

<mx-list-picker disabled="{{false}}" />
```

### # 右侧内容是否居左 isLeft
属性：`isLeft`，默认 `false`，默认居右。

当 `styleType == 'horizontal'` 时有效。

- 居左
```html
<mx-list-picker isLeft />

<mx-list-picker isLeft="{{true}}" />
```

- 居右
```html
<mx-list-picker />

<mx-list-picker isLeft="{{false}}" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用rpx。

当 `styleType == 'horizontal'` 和 `styleType == 'web'` 时有效。
```html
<mx-list-picker leftWidth="200" />
```

### # 标签文案 label
属性：`label`，标签内容。

```html
<mx-list-picker label="标签" />
```

### # 标签文案文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-list-picker labelColor="#1677FF" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用
- 左对齐
```html
<mx-list-picker />

<mx-list-picker labelAlign="left" />
```

- 居中对齐
```html
<mx-list-picker labelAlign="center" />
```

- 右对齐
```html
<mx-list-picker labelAlign="right" />
```

### # 是否显示必填星号 required
属性：`required`，默认值 `false` 不显示必填星号。

- 显示星号
```html
<mx-list-picker required />

<mx-list-picker required="{{true}}" />
```

- 不显示星号
```html
<mx-list-picker required="{{false}}" />

<mx-list-picker />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值 `left`、`right`，默认值 `right` 在标签文本后面。

- 星号在标签后
```html
<mx-list-picker required />

<mx-list-picker required requiredPosition />

<mx-list-picker required requiredPosition="right" />
```

- 星号在标签前
```html
<mx-list-picker required requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:list_picker_firstIcon`，标签前图标点击事件。

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
<mx-list-picker firstIcon="{{firstIcon}}" bind:list_picker_firstIcon="事件函数" />
```

### # 标签后图标 lastIcon
属性：`lastIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `32`，不带单位，默认使用 rpx。

事件：`bind:list_picker_lastIcon`，标签后图标点击事件。

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
<mx-list-picker lastIcon="{{lastIcon}}" bind:list_picker_lastIcon="事件函数" />
```

### # 是否显示右箭头 arrows
属性：`arrows`，默认值 `true` 显示右箭头。

- 显示右箭头
```html
<mx-list-picker />

<mx-list-picker arrows />

<mx-list-picker arrows="{{true}}" />
```

- 不显示右箭头
```html
<mx-list-picker arrows="{{false}}" />
```

### # 描述或错误文案 desc
属性：`desc`，描述文案。
```html
<mx-list-picker desc="描述文案" />
```

### # 描述或错误文案颜色 descColor
属性：`descColor`，默认 `#656979`，支持任何合法的颜色值。
```html
<mx-list-picker descColor="#1677FF" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认值 `true` 显示分隔线，用于区域之间的分隔。

只在 `styleType` 为 `horizontal` 时有效，`vertical` 和 `web` 时在样式设计上没有分隔线，所以不需要。

- 显示分隔线
```html
<mx-list-picker />

<mx-list-picker showLine />

<mx-list-picker showLine="{{true}}" />
```

- 不显示分隔线
```html
<mx-list-picker showLine="{{false}}" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。

当 `styleType == 'vertical'` 和 `styleType == 'web'` 时有效。
```html
<mx-list-picker bgColor="#1677FF" />
```

### # 是否横向布局 horizontal
属性：`horizontal`，默认值 `false`，默认纵向布局。

当 `styleType == 'web'` 时有效。

- 横向
```html
<mx-list-picker horizontal />

<mx-list-picker horizontal="{{true}}" />
```

- 纵向
```html
<mx-list-picker />

<mx-list-picker horizontal="{{false}}" />
```

## 自定义事件
事件：`bind:list_picker_change`，值变更事件，返回值 `event.detail.type`，普通选择器返回 `event.detail.value`，多列选择器返回 `event.detail.multiIndex`，时间选择器返回 `event.detail.time`，日期选择器返回 `event.detail.date`，省市区选择器返回 `event.detail.region` 和 `event.detail.value`。

事件：`bind:list_picker_cancel`，取消事件回调。

事件：`bind:list_picker_column_change`，列值变更事件，返回值 `event.detail.column` 和 `event.detail.value`。

事件：`bind:list_picker_firstIcon`，标签前图标点击事件。

事件：`bind:list_picker_lastIcon`，标签后图标点击事件。
```html
<mx-list-picker 
    bind:list_picker_change="handleChange" 
    bind:list_picker_cancel="handleCancel" 
    bind:list_picker_column_change="handleColumnChange" 
    bind:list_picker_firstIcon="handleFirstIcon" 
    bind:list_picker_lastIcon="handleLastIcon" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/listPicker_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|styleType|String|是|`horizontal`、`vertical`、`web`|`horizontal`|样式类型|
|mode|String|是|`selector` 普通选择器、`multiSelector` 多列选择器、`time` 时间选择器、`date` 日期选择器、`region` 省市区选择器|`selector`|下拉类型|
|placeholder|String||||占位文本|
|placeholderColor|String||颜色值|`#9AA0B1`|占位文本颜色，支持任何合法的颜色值|
|textColor|String||颜色值|`#040A23`|文本色，支持任何合法的颜色值|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|label|String||||标签文案|
|labelColor|String||颜色值|`#040A23`|标签文案文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|required|Boolean||`true`、`false`|`false`|是否显示必填星号|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|
|arrows|Boolean||`true`、`false`|`true`|是否显示右箭头|
|desc|String||||描述或错误文案|
|descColor|String||颜色值|`#656979`|描述或错误文案颜色，支持任何合法的颜色值|

### styleType="horizontal"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|isLeft|Boolean||`true`、`false`|`false`|右侧内容是否居左|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认使用rpx|
|showLine|Boolean||`true`、`false`|`true`|是否显示分隔线|

### styleType="vertical"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|

### styleType="web"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|isLeft|Boolean||`true`、`false`|`false`|右侧内容是否居左|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认使用rpx|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|
|horizontal|Boolean||`true`、`false`|`false`|是否横向布局|

### mode="selector"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|options|Array|是|||数据项|
|rangeKey|String|||`label`|数据项key名称|
|index|Number||数字||普通选择器下标值，下标从0开始的序号|

### mode="multiSelector"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|options|Array|是|||数据项|
|rangeKey|String|||`label`|数据项key名称|
|multiIndex|Array||数组||多列选择器下标值，每一列的下标，从0开始|

### mode="time"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|time|String||hh:mm||时间值|
|start|String||hh:mm||开始时间限制|
|end|String||hh:mm||结束时间限制|

### mode="date"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|date|String||YYYY-MM-DD||日期值|
|start|String||YYYY-MM-DD||开始日期限制|
|end|String||YYYY-MM-DD||结束日期限制|
|fields|String||`year`、`month`、`day`|`day`|日期选择器粒度|

### mode="region"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|region|Array||||省市区选择器值|
|level|String||`province` 省级选择器、`city` 市级选择器、`region` 区级选择器、`sub-district` 街道选择器|`region`|省市区选择器层级|

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
|bind:list_picker_change|Change|`event`|值变更事件，返回值 `event.detail.type`，普通选择器返回`event.detail.value`，多列选择器返回 `event.detail.multiIndex`，时间选择器返回 `event.detail.time`，日期选择器返回 `event.detail.date`，省市区选择器返回 `event.detail.region` 和 `event.detail.value`|
|bind:list_picker_cancel|Click||取消事件回调|
|bind:list_picker_column_change|Change|`event`|列值变更事件，返回值 `event.detail.column` 和 `event.detail.value`|
|bind:list_picker_firstIcon|Click||标签前图标点击事件|
|bind:list_picker_lastIcon|Click||标签后图标点击事件|

## 其他说明
无
# ListBasic 基础列表组件

常用于个人中心、设置、通用信息列表等场景。

![扫码查看](../imgs/dialogBasic_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-list-basic": "/components/mxwui/list-basic/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-list-basic />
```

## 更多用法示例
### # 标签文本 label
属性：`label`，简单的文本，不要太长。必填字段。

```html
<mx-list-basic label="标签文本" />
```

### # 标签文本文本色 labelColor
属性：`labelColor`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-list-basic labelColor="#CA0E2D" />
```

### # 文案对齐方式 labelAlign
属性：`labelAlign`，可选值：`left`、`center`、`right`，默认 `left`，左对齐。

需要配合 `label` 属性一起使用
- 左对齐
```html
<mx-list-basic />

<mx-list-basic labelAlign="left" />
```

- 居中对齐
```html
<mx-list-basic labelAlign="center" />
```

- 右对齐
```html
<mx-list-basic labelAlign="right" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，数字，不带单位，默认使用rpx。

不设置时左侧宽度自动计算。

```html
<mx-list-basic leftWidth="200" />
```

### # 是否必填 required
属性：`required`，默认 `false` 非必填。

- 必填
```html
<mx-list-basic required />

<mx-list-basic required={{true}} />
```

- 非必填
```html
<mx-list-basic required={{false}} />

<mx-list-basic />
```

### # 必填星号位置 requiredPosition
属性：`requiredPosition`，可选值：`left`、`right`，默认 `right` 默认在标签文本右侧。

- 星号在标签文本右侧
```html
<mx-list-basic label="在右侧" />

<mx-list-basic label="在右侧" requiredPosition />

<mx-list-basic label="在右侧" requiredPosition="right" />
```

- 星号在标签文本左侧
```html
<mx-list-basic label="在左侧" requiredPosition="left" />
```

### # 标签前图标 firstIcon
属性：`firstIcon`，图标配置。

参数：`iconName`，图标名称，只支持图标库中的图标。

参数：`iconColor`，图标颜色，默认 `#040A23`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则 `iconName` 和 `iconColor` 无效。

参数：`iconSize`，图标/图片大小，支持大小设置，默认为 `48`，不带单位，默认使用rpx。

事件：`bind:list_basic_firstIcon`，标签前图标点击事件

- 自定义图标
```html
<mx-list-basic firstIcon="{{firstIcon}}" />
```
```js
// js
data: {
    firstIcon: {
        iconName: '图标名称',
        iconColor: '#CA0E2D',
        iconSize: 40
    },
}
```

- 自定义图片
```html
<mx-list-basic firstIcon="{{firstIcon}}" />
```
```js
// js
data: {
    firstIcon: {
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 40
    },
}
```

### # 标签后图标 lastIcon
属性：`lastIcon`，图标配置。

参数 `iconName`，图标名称，只支持图标库中的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则 `iconName` 和 `iconColor` 无效。

参数：`iconSize`，图标/图片大小，支持大小设置，默认为 `32`，不带单位，默认使用rpx。

事件：`bind:list_basic_lastIcon`，标签后图标点击事件

- 自定义图标
```html
<mx-list-basic lastIcon="{{lastIcon}}" />
```
```js
// js
data: {
    lastIcon: {
        iconName: '图标名称',
        iconColor: '#CA0E2D',
        iconSize: 40
    },
}
```

- 自定义图片
```html
<mx-list-basic lastIcon="{{lastIcon}}" />
```
```js
// js
data: {
    lastIcon: {
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 40
    },
}
```

### # 是否显示右箭头 arrows
属性：`arrows`，默认 `true` 显示右箭头。

- 显示右箭头
```html
<mx-list-basic />

<mx-list-basic arrows />

<mx-list-basic arrows="{{true}}" />
```

- 不显示右箭头
```html
<mx-list-basic arrows="{{false}}" />
```

### # 是否显示小红点 dot
属性：`dot`，默认 `false` 默认不显示。

- 显示小红点
```html
<mx-list-basic dot />

<mx-list-basic dot={{true}} />
```

- 不显示小红点
```html
<mx-list-basic dot={{false}} />

<mx-list-basic />
```

### 显示数量 num
属性：`num`，可以显示具体的数字或者xx+的样式。

```html
<mx-list-basic num="9" />

<mx-list-basic num="99" />

<mx-list-basic num="999" />

<mx-list-basic num="99+" />
```

### # 右侧内容 content
属性：`content`。

```html
<mx-list-basic content="这是右侧内容" />
```

### # 右侧内容文本色 contentColor
属性：`contentColor`，默认 `#040A23`，支持任何合法的颜色值。

```html
<mx-list-basic contentColor="#1677FF" />
```

### 右侧内容是否左对齐 isLeft
属性：`isLeft`，默认 `false` 默认右对齐。

- 右侧内容左对齐
```html
<mx-list-basic isLeft />

<mx-list-basic isLeft="{{true}}" />
```

- 右侧内容右对齐
```html
<mx-list-basic isLeft="{{false}}" />

<mx-list-basic />
```

### # 描述 desc
属性：`desc`，辅助性描述内容。
```html
<mx-list-basic desc="描述内容描述内容描述内容" />
```

### # 描述文本色 descColor
属性：`descColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-list-basic descColor="#CA0E2D" />
```

### # 是否显示分隔线 showLine
属性：`showLine`，默认 `true` 显示分隔线。

- 显示分隔线
```html
<mx-list-basic />

<mx-list-basic showLine />

<mx-list-basic showLine="{{true}}" />
```

- 不显示分隔线
```html
<mx-list-basic showLine="{{false}}" />
```

### # 事件
事件：`bind:list_basic_firstIcon`，标签前图标点击事件

事件：`bind:list_basic_lastIcon`，标签后图标点击事件

事件：`bind:list_basic_content`，右侧内容点击事件
```html
<mx-list-basic 
    label="事件" 
    firstIcon="{{firstIcon}}" 
    lastIcon="{{lastIcon}}" 
    content="有三种点击事件" 
    arrows 
    bind:list_basic_firstIcon="handleFirstIcon" 
    bind:list_basic_lastIcon="handleLastIcon" 
    bind:list_basic_content="handleContent" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/listBasic_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|label|String|是|||标签文案|
|labelColor|String||颜色值|`#040A23`|标签文案文本色，支持任何合法的颜色值|
|labelAlign|String||`left`、`center`、`right`|`left`|标签对齐方式|
|leftWidth|Number||数字||左侧自定义宽度，不带单位，默认rpx|
|required|Boolean||`true`、`false`|`false`|是否必填|
|requiredPosition|String||`left`、`right`|`right`|必填星号位置|
|firstIcon|Object||||标签前图标|
|lastIcon|Object||||标签后图标|
|content|String||||内容|
|contentColor|String||颜色值|`#040A23`|内容文本色，支持任何合法的颜色值|
|isLeft|Boolean||`true`、`false`|`false`|右侧内容是否居左|
|dot|Boolean||`true`、`false`|`false`|是否显示小红点|
|num|String||||显示数量|
|arrows|Boolean||`true`、`false`|`true`|是否显示右箭头|
|desc|String||||描述|
|descColor|String||颜色值|`#9AA0B1`|描述文本色，支持任何合法的颜色值|
|showLine|Boolean||`true`、`false`|`true`|是否显示分隔线|

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
|bind:list_basic_firstIcon|Click||标签前图标点击事件|
|bind:list_basic_lastIcon|Click||标签后图标点击事件|
|bind:list_basic_content|Click||右侧内容点击事件|

## 其他说明
无
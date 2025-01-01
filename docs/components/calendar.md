# Calendar 日历组件

适用于需要日期选择的场景。

![扫码查看](../imgs/calendar_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-calendar": "/components/mxwui/calendar/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-calendar />
```

## 更多用法示例
### # 是否显示日历 visible
属性：`visible`，默认 `false` 默认不显示。

- 显示
```html
<mx-calendar visible />

<mx-calendar visible="{{true}}" />
```

- 不显示
```html
<mx-calendar />

<mx-calendar visible="{{false}}" />
```

### # 选择模式 selectionMode
属性：`selectionMode`，可选 `single` 单个日期选择、`range` 日期范围选择，默认 `single` 当个日期选择。

- 单个日期选择
```html
<mx-calendar />

<mx-calendar selectionMode="single" />
```

- 日期范围选择
```html
<mx-calendar selectionMode="range" />
```

### # 初始值 defaultValue
属性：`defaultValue`，YYYY-MM-DD 格式的日期，`selectionMode="single"`有效。
```html
<mx-calendar selectionMode="single" defaultValue="2024-05-20" />
```

### # 开始日期 startDate
属性：`startDate`，YYYY-MM-DD 格式的日期，`selectionMode="range"` 有效，配合`endDate` 使用。
```html
<mx-calendar selectionMode="range" startDate="2024-05-20" />
```

### # 结束日期 endDate
属性：`endDate`，YYYY-MM-DD 格式的日期，`selectionMode="range"` 有效，配合`startDate` 使用。
```html
<mx-calendar selectionMode="range" endDate="2024-05-20" />
```

### # 最小可选日期 min
属性：`min`，YYYY-MM-DD 格式的日期。
```html
<mx-calendar min="2024-05-20" />
```

### # 最大可选日期 max
属性：`max`，YYYY-MM-DD 格式的日期。
```html
<mx-calendar max="2024-05-20" />
```

### # 第一天是从周一开始还是周日开始 weekStartsOn
属性：`weekStartsOn`，可选 `Monday` 从周一开始、`Sunday` 从周日开始，默认 `Monday` 从周一开始。

- 从周一开始
```html
<mx-calendar />

<mx-calendar weekStartsOn="Monday" />
```

- 从周日开始
```html
<mx-calendar weekStartsOn="Sunday" />
```

### # 是否显示农历 showLunar
属性：`showLunar`，默认 `false` 默认不显示农历。

- 显示
```html
<mx-calendar showLunar />

<mx-calendar showLunar="{{true}}" />
```

- 不显示
```html
<mx-calendar />

<mx-calendar showLunar="{{false}}" />
```

### # 是否显示节气 showSolarTerm
属性：`showSolarTerm`，默认 `false` 默认不显示二十四节气。

- 显示
```html
<mx-calendar showSolarTerm />

<mx-calendar showSolarTerm="{{true}}" />
```

- 不显示
```html
<mx-calendar />

<mx-calendar showSolarTerm="{{false}}" />
```

### # 是否显示节日 showFestival
属性：`showFestival`，默认 `false` 默认不显示节日。

- 显示
```html
<mx-calendar showFestival />

<mx-calendar showFestival="{{true}}" />
```

- 不显示
```html
<mx-calendar />

<mx-calendar showFestival="{{false}}" />
```

### # 标题 title
属性：`title`，标题文案。
```html
<mx-calendar title="选择日期" />
```

### # 取消按钮文案 cancelText
属性：`cancelText`，默认 `取消`。
```html
<mx-calendar cancelText="放弃" />
```

### # 取消按钮文本色 cancelColor
属性：`cancelColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-calendar cancelColor="#1677FF" />
```

### # 确定按钮文案 confirmText
属性：`confirmText`，默认 `确定`。
```html
<mx-calendar confirmText="保存" />
```

### # 确定按钮文本色 confirmColor
属性：`confirmColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-calendar confirmColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-calendar zIndex="1" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true` 可关闭。

- 点蒙层可关闭
```html
<mx-calendar />

<mx-calendar isCloseMask />

<mx-calendar isCloseMask="{{true}}" />
```

- 点蒙层不可关闭
```html
<mx-calendar isCloseMask="{{false}}" />
```

## 自定义事件
事件：`bind:calendar_confirm`，确认回调事件，`selectionMode="single"` 时返回 `type="single"` 和 `value`；`selectionMode="range"` 时返回 `type="range"`、`start` 和 `end`。

返回的时间都是 YYYY-MM-DD 格式。

```html
<mx-xxx 
    bind:calendar_confirm="handleConfirm" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/calendar_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示日历|
|selectionMode|String|是|`single` 单个日期选择、`range` 日期范围选择|`single`|选择模式|
|defaultValue|String||YYYY-MM-DD||初始值，`selectionMode="single"` 有效|
|startDate|String||YYYY-MM-DD||开始日期，`selectionMode="range"` 有效，配合 `endDate` 使用|
|endDate|String||YYYY-MM-DD||结束日期，`selectionMode="range"` 有效，配合 `startDate` 使用|
|min|String||YYYY-MM-DD||最小可选日期|
|max|String||YYYY-MM-DD||最大可选日期|
|weekStartsOn|String|是|`Monday` 从周一开始、`Sunday` 从周日开始|`Monday`|第一天是从周一开始还是周日开始|
|showLunar|Boolean||`true`、`false`|`false`|是否显示农历|
|showSolarTerm|Boolean||`true`、`false`|`false`|是否显示节气|
|showFestival|Boolean||`true`、`false`|`false`|是否显示节日|
|title|String||||标题|
|cancelText|String|||`取消`|取消按钮文案|
|cancelColor|String||颜色值|`#9AA0B1`|取消按钮文本色，支持任何合法的颜色值|
|confirmText|String|||`确定`|确定按钮文案|
|confirmColor|String||颜色值|`#CA0E2D`|确定按钮文本色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:calendar_confirm|Change|`event`|确认回调事件，`selectionMode="single"` 时返回 `type` 和 `value`，`selectionMode="range"` 时返回 `type`、`start` 和 `end`|

## 其他说明
无
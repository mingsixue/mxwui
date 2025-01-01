# Datetime 日期时间组件

适用于需要同时选择日期和时间的场景。

![扫码查看](../imgs/datetime_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-datetime": "/components/mxwui/datetime/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-datetime />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `flase` 默认不显示。

- 显示
```html
<mx-datetime visible />

<mx-datetime visible="{{true}}" />
```

- 不显示
```html
<mx-datetime />

<mx-datetime visible="{{false}}" />
```

### # 默认时间 value
属性：`value`，年月日时分，YYYY-MM-DD HH:mm 格式。

属性：`value`，月日时分，MM-DD HH:mm 格式。

属性：`value`，月日，MM-DD 格式。

属性：`value`，月日时，MM-DD HH 格式。

属性：`value`，月日时分秒，MM-DD HH:mm:ss 格式。

属性：`value`，年月日时分秒，YYYY-MM-DD HH:mm:ss 格式。

- 年月日时分
```html
<mx-datetime value="2024-05-20 13:14" />
```

- 月日时分
```html
<mx-datetime value="05-20 13:14" />
```

- 月日
```html
<mx-datetime value="05-20" />
```

- 月日时
```html
<mx-datetime value="05-20 13" />
```

- 月日时分秒
```html
<mx-datetime value="05-20 13:14:10" />
```

- 年月日时分秒
```html
<mx-datetime value="2024-05-20 13：14:10" />
```

### # 分钟步长 minuteStep
属性：`minuteStep`，默认 `1`，默认1分钟，数字。
```html
<mx-datetime minuteStep="5" />
```

### # 是否显示年 showYear
属性：`showYear`，默认 `true`，显示。

- 显示
```html
<mx-datetime />

<mx-datetime showYear />

<mx-datetime showYear="{{true}}" />
```

- 不显示
```html
<mx-datetime showYear="{{false}}" />
```

### # 是否显示小时 showHour
属性：`showHour`，默认 `true`，显示。

- 显示
```html
<mx-datetime />

<mx-datetime showHour />

<mx-datetime showHour="{{true}}" />
```

- 不显示
```html
<mx-datetime showHour="{{false}}" />
```

### # 是否显示分 showMinute
属性：`showMinute`，默认 `true`，显示。

- 显示
```html
<mx-datetime />

<mx-datetime showMinute />

<mx-datetime showMinute="{{true}}" />
```

- 不显示
```html
<mx-datetime showMinute="{{false}}" />
```

### # 是否显示秒 showSeconds
属性：`showSeconds`，默认 `false`，不显示。

- 显示
```html

<mx-datetime showSeconds />

<mx-datetime showSeconds="{{true}}" />
```

- 不显示
```html
<mx-datetime />

<mx-datetime showSeconds="{{false}}" />
```

### # 年-文案 yearSuffix
属性：`yearSuffix`，默认 `年`。
```html
<mx-datetime yearSuffix="年" />
```

### # 月-文案 monthSuffix
属性：`monthSuffix`，默认 `月`。
```html
<mx-datetime monthSuffix="月" />
```

### # 日-文案 daySuffix
属性：`daySuffix`，默认 `日`。
```html
<mx-datetime daySuffix="日" />
```

### # 小时-文案 hourSuffix
属性：`hourSuffix`，默认 `时`。
```html
<mx-datetime hourSuffix="时" />
```

### # 分钟-文案 minuteSuffix
属性：`minuteSuffix`，默认 `分`。
```html
<mx-datetime minuteSuffix="分" />
```

### # 秒-文案 secondsSuffix
属性：`secondsSuffix`，默认 `秒`。
```html
<mx-datetime secondsSuffix="秒" />
```

### # 最小年份限制 minYearLimit
属性：`minYearLimit`，默认 `1970`，数字。
```html
<mx-datetime minYearLimit="2000" />
```

### # 最大年份限制 maxYearLimit
属性：`maxYearLimit`，默认在当前年+20年。
```html
<mx-datetime maxYearLimit="2025" />
```

### # 标题 title
属性：`title`，标题文案。
```html
<mx-datetime title="选择日期" />
```

### # 取消按钮文案 cancelText
属性：`cancelText`，默认 `取消`。
```html
<mx-datetime cancelText="放弃" />
```

### # 取消按钮文本色 cancelColor
属性：`cancelColor`，默认 `#9AA0B1`。
```html
<mx-datetime cancelColor="#1677FF" />
```

### # 确定按钮文案 confirmText
属性：`confirmText`，默认 `确定`。
```html
<mx-datetime confirmText="保存" />
```

### # 确定按钮文本色 confirmColor
属性：`confirmColor`，默认 `#CA0E2D`。
```html
<mx-datetime confirmColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-datetime zIndex="2" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认 `true`，可关闭。

- 可关闭
```html
<mx-datetime />

<mx-datetime isCloseMask />

<mx-datetime isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-datetime isCloseMask="{{false}}" />
```

## 自定义事件
事件：`bind:datetime_close`，关闭回调事件，返回字段 `type`，值为 `close` 点击 mask 关闭 或 `cancel` 点击取消按钮关闭。

事件：`bind:datetime_confirm`，确定按钮回调事件，返回字段 `value` 返回格式化后的时间。
```html
<mx-datetime 
    bind:datetime_close="handleClose" 
    bind:datetime_confirm="handleConfirm" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/datetime_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|value|String||YYYY-MM-DD HH:mm||默认时间|
|minuteStep|Number||数字|`1`|分钟步长|
|showYear|Boolean||`true`、`false`|`true`|是否显示年|
|showHour|Boolean||`true`、`false`|`true`|是否显示小时|
|showMinute|Boolean||`true`、`false`|`true`|是否显示分|
|showSeconds|Boolean||`true`、`false`|`false`|是否显示秒|
|yearSuffix|String|||`年`|年-文案|
|monthSuffix|String|||`月`|月-文案|
|daySuffix|String|||`日`|日-文案|
|hourSuffix|String|||`时`|小时-文案|
|minuteSuffix|String|||`分`|分钟-文案|
|showSeconds|String|||`秒`|秒-文案|
|minYearLimit|Number||数字|`1970`|最小年份限制|
|maxYearLimit|Number||数字||最大年份限制|
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
|bind:datetime_close|Click|`event`|关闭回调事件，返回字段 `type`，值为 `close` 点击 mask 关闭 或 `cancel` 点击取消按钮关闭|
|bind:datetime_confirm|Click|`event`|确定按钮回调事件，返回字段 `value` 返回格式化后的时间|

## 其他说明
无
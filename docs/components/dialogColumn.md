# DialogColumn 分栏弹窗组件

由底部出现的分栏弹窗，存在级联关系。

![扫码查看](../imgs/dialogColumn_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-dialog-column": "/components/mxwui/dialog-column/index"
    }
}
```

页面 `.js` 文件中定义
```js
// js
options: [
    {
        label: '选项一', 
        value: 1, 
        children: [
            label: '子选项一',
            value: 11,
        ]
    },
]
```

页面 `.wxml` 文件中使用组件
```html
<mx-dialog-column visible="{{true}}" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-dialog-column visible />

<mx-dialog-column visible="{{true}}" />
```

- 不显示
```html
<mx-dialog-column visible="{{fasle}}" />

<mx-dialog-column />
```

### # 数据项 options
属性：`options`，数据项，必填。

参数：`label`，选项名称，用于界面显示。

参数：`value`，选项值，主要用于传给后端。

参数：`children`，选项是否选中。

参数：`children[x].label`，子选项名称。

参数：`children[x].value`，子选项名称。

```js
// js
data: {
    options: [
        {
            label: '选项一', 
            value: 1, 
            children: [
                label: '子选项一',
                value: 11,
            ]
        },
    ]
},
```
```html
<mx-list-select options="{{options}}" />
```


### # 当前选中项 current
属性：`current`，默认 `0`，从 0 开始的下标，数字。
```html
<mx-dialog-column current="1" />
```

### # 当前选中子项 subCurrent
属性：`subCurrent`，默认 `-1`，不选中，从 0 开始的下标，数字。
```html
<mx-dialog-column subCurrent="1" />
```

### # 文本色 textColor
属性：`textColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog-column textColor="#1677FF" />
```

### # 选中项文本色 selectColor
属性：`selectColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-dialog-column selectColor="#1677FF" />
```

### # 确定按钮文案 confirmText
属性：`confirmText`，默认 `确定`。
```html
<mx-dialog-column confirmText="完成" />
```

### # 确定按钮文本色 confirmColor
属性：`confirmColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-dialog-column confirmColor="#1677FF" />
```

### # 取消按钮文案 cancelText
属性：`cancelText`，默认 `取消`。
```html
<mx-dialog-column cancelText="放弃" />
```

### # 确定按钮文本色 cancelColor
属性：`cancelColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-dialog-column cancelColor="#1677FF" />
```

### # 是否显示返回按钮 showBack
属性：`showBack`，默认 `true` 显示返回按钮。

- 显示
```html
<mx-dialog-column />

<mx-dialog-column showBack />

<mx-dialog-column showBack="{{true}}" />
```

- 不显示
```html
<mx-dialog-column showBack="{{fasle}}" />
```

### # 返回按钮 backIcon
属性：`backIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconUrl`，自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:dialog_column_back`，返回按钮点击事件，返回 `type`，值为 `back`；当有选中的子项时返回 `value`、`current`、`item`、`subCurrent`、`subValue` 和 `subItem`。

```js
// js
data: {
    backIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 48
    },
}
```

```html
<mx-dialog-column backIcon="{{backIcon}}" />
```

### # 是否显示关闭按钮 showClose
属性：`showClose`，默认 `true` 显示关闭按钮。

- 显示
```html
<mx-dialog-column />

<mx-dialog-column showClose />

<mx-dialog-column showClose="{{true}}" />
```

- 不显示
```html
<mx-dialog-column showClose="{{false}}" />
```

### # 关闭按钮 closeIcon
属性：`closeIcon`，对象，可以自定义图标或图片，自定义图标大小和颜色。

参数：`iconName`，图标名称，只支持图标库的图标。

参数：`iconUrl` 自定义图片地址，传入则不使用 `iconName` 和 `iconColor`。

参数：`iconColor`，图标颜色，默认 `#9AA0B1`，支持任何合法的颜色值。

参数：`iconSize`，图标/图片支持设置大小，默认 `48`，不带单位，默认使用 rpx。

事件：`bind:dialog_column_close`，关闭按钮点击事件，返回 `type`，值为 `close`。

```js
// js
data: {
    closeIcon: {
        iconName: '图标名',
        iconColor: '#1677FF',
        iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        iconSize: 48
    },
}
```
```html
<mx-dialog-column closeIcon="{{closeIcon}}" />
```

### # 标题 title
属性：`title`，标题文案。
```html
<mx-dialog-column title="标题" />
```

### # 标题文本色 titleColor
属性：`titleColor`，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog-column titleColor="#1677FF" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-dialog-column zIndex="1" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

事件：`bind:dialog_column_close`，弹窗关闭回调事件，返回 `type` 字段，值为 `maskClose`。

- 可关闭
```html
<mx-dialog-column />

<mx-dialog-column isCloseMask />

<mx-dialog-column isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-dialog-column isCloseMask="{{false}}" />
```

### # 自定义高度 height
属性：`height`，默认高度 `75vh`，需要带单位。
```html
<mx-dialog-column height="70vh" />
```

### # 左侧自定义宽度 leftWidth
属性：`leftWidth`，默认高度 `240`，不带单位，默认使用rpx。
```html
<mx-dialog-column leftWidth="70vh" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/dialogColumn_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|options|Array|是|||数据项|
|current|Number||数字|`0`|当前选中项，从0开始的下标|
|subCurrent|Number||数字|`-1`|当前选中子项，从0开始的下标|
|textColor|String||颜色值|`#040A23`|文本色，支持任何合法的颜色值|
|selectColor|String||颜色值|`#CA0E2D`|选中项文本色，支持任何合法的颜色值|
|confirmText|String|||`确定`|确定按钮文案|
|confirmColor|String||颜色值|`#CA0E2D`|确定按钮文本色，支持任何合法的颜色值|
|cancelText|String|||`取消`|取消按钮文案|
|cancelColor|String||颜色值|`#9AA0B1`|取消按钮文本色，支持任何合法的颜色值|
|showBack|Boolean||`true`、`false`|`true`|是否显示返回按钮|
|backIcon|Object||||返回按钮配置|
|showClose|Boolean||`true`、`false`|`true`|是否显示关闭按钮|
|closeIcon|Object||||关闭按钮配置|
|title|String||||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|
|height|String|||`75vh`|自定义高度，需要带单位|
|leftWidth|Number||数字|`240`|左侧自定义宽度，不带单位，默认使用rpx|

### backIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

### clsoeIcon
|参数|类型|默认值|参数描述|
|----|----|----|----|
|iconName|String||图标名称，只支持图标库中图标|
|iconColor|String|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||图标图片地址，传入则 `iconName`、`iconColor` 无效|
|iconSize|Number|`48`|图标大小，不带单位，默认rpx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:dialog_column_back|Click|`event.detail`|返回按钮点击事件，返回 `type`，值为 `back`；当有选中的子项时返回 `value`、`current`、`item`、`subCurrent`、`subValue` 和 `subItem`|
|bind:dialog_column_close|Click|`event.detail`|关闭弹窗事件，返回 `type`，值为 `maskClose` 或 `close` 或 `cancel` 或 `confirm`，不同位置触发的关闭事件；当有选中的子项时返回 `value`、`current`、`item`、`subCurrent`、`subValue` 和 `subItem`|

## 其他说明
无
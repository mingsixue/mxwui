# Dialog 基础弹窗组件

适用于消息通知、用户操作确认、协议展示等场景。

![扫码查看](../imgs/dialog_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-dialog": "/components/mxwui/dialog/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-dialog visible="{{true}}" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-dialog visible />

<mx-dialog visible="{{true}}" />
```

- 不显示
```html
<mx-dialog visible="{{false}}" />

<mx-dialog />
```

### # 标题 title
属性：`title`，自定义标题，如果设置为空则不显示标题区域。
```html
<mx-dialog title="自定义标题" />
```

### # 标题文本色 titleColor
属性：`titleColor`，自定义标题文本色，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog titleColor="#1677FF" />
```

### # 内容 content
属性：`content`，内容，适合简单的文本。
```html
<mx-dialog content="这是自定义内容" />
```

### # 内容文本色 contentColor
属性：`contentColor`，自定义内容文本色，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-dialog content="这是自定义内容" contentColor="#1677FF" />
```

### # 自定义弹窗内容及样式
使用 `<slot></slot>` 插槽方式，用这种方法就不需要传 `content` 字段了。

插槽中的内容和样式，可以自行定义。
```html
<mx-dialog>
    <div class="customContent">
        <div class="h2">自定义内容样式</div>
        <p style="color: #CA0E2D;">自定义弹窗内容自定义弹窗内容自定义弹窗内容自定义弹窗内容自定义弹窗内容</p>
    </div>
</mx-dialog>
```

### # 是否显示确认按钮 confirmBtn
属性：`confirmBtn`，默认 `true` 显示确认按钮。

- 显示
```html
<mx-dialog />

<mx-dialog confirmBtn />

<mx-dialog confirmBtn="{{true}}" />
```

- 不显示
```html
<mx-dialog confirmBtn="{{false}}" />
```

### # 确认按钮相关
属性：`confirmBtnText`，默认文案 `确定`。

属性：`confirmBtnColor`，默认 `#CA0E2D`，支持任何合法的颜色值。

事件：`bind:dialog_confirm`，确认按钮回调事件。

- 确认按钮文案
```html
<mx-dialog confirmBtnText="保存"  />
```

- 确认按钮文本色
```html
<mx-dialog confirmBtnColor="#1677FF" />
```

- 确认按钮回调事件
```html
<mx-dialog bind:dialog_confirm="handleConfirm" />
```

### # 是否显示取消按钮 cancelBtn
属性：`cancelBtn`，默认 `false` 不显示取消按钮。

- 显示
```html
<mx-dialog cancelBtn />

<mx-dialog cancelBtn="{{true}}" />
```

- 不显示
```html
<mx-dialog cancelBtn="{{false}}" />

<mx-dialog />
```

### # 取消按钮相关
属性：`cancelBtnText`，默认文案 `取消`。

属性：`confirmBtnColor`，默认 `#656979`，支持任何合法的颜色值。

事件：`bind:dialog_close`，取消按钮回调事件，返回 `type` 字段，值为 `cancel` 。

- 取消按钮文案
```html
<mx-dialog cancelBtn cancelBtnText="放弃" />
```

- 取消按钮文本色
```html
<mx-dialog cancelBtn cancelBtnColor="#1677FF" />
```

- 取消按钮回调事件
```html
<mx-dialog cancelBtn bind:dialog_close="handleCancel" />
```

### # 层级 zIndex
属性：`zIndex`，默认文案 `1`。
```html
<mx-dialog zIndex="1" />
```

### # 点击蒙层是否可关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

事件：`bind:dialog_close`，弹窗关闭回调事件，返回 `type` 字段，值为 `close`。

- 可关闭
```html
<mx-dialog />

<mx-dialog isCloseMask />

<mx-dialog isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-dialog isCloseMask="{{false}}" />
```

<!-- ## 参数示意图
//Todo 组件分解示意图 -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|title|String||||标题，为空则不显示标题区域|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|content|String||||内容，另一种方法是通过 slot 方式|
|contentColor|String||颜色值|`#040A23`|内容文本色，支持任何合法的颜色值，只在 `content` 字段存在时有效，通过 slot 的方式无效|
|confirmBtn|Boolean||`true`、`false`|`true`|是否显示确认按钮|
|confirmBtnText|String|||`确定`|确认按钮文案|
|confirmBtnColor|String||颜色值|`#CA0E2D`|确认按钮文本色，支持任何合法的颜色值|
|cancelBtn|Boolean||`true`、`false`|`false`|是否显示取消按钮|
|cancelBtnText|String|||`取消`|取消按钮文案|
|cancelBtnColor|String||颜色值|`#656979`|取消按钮文本色，支持任何合法的颜色值|
|zIndex|Number|||`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:dialog_close|Click|`event.detail`|取消或弹窗关闭回调事件，返回 `type` 字段，值为 `cancel` 是取消按钮点击后回调，值为 `close` 则是蒙层点击后回调|
|bind:dialog_confirm|Click||确定按钮事件回调|

## 其他说明
无
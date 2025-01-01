# Protocol 协议组件

适用于一些需要用户确认或同意协议后才能操作的场景。

![扫码查看](../imgs/protocol_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-protocol": "/components/mxwui/protocol/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-protocol content="{{content}}" />
```

## 更多用法示例
### # 内容 content
属性：`content`，内容文案，数组形式。

参数：`text`，文本内容。

参数：`color`，文本颜色，支持任何合法的颜色值。

其他参数，操作时会原样返回，可以添加额外参数用以区分点击了哪部分文案。

```js
// js
data: {
    content: [
        {text: '请先阅读', color: '#040A23'},
        {text: '《用户服务协议》', color: '#1F4886'},
    ]
}
```
```html
<mx-protocol content="{{content}}" />
```

### # 是否选中 checked
属性：`checked`，默认 `false`，默认不选中。

- 选中
```html
<mx-protocol checked />

<mx-protocol checked="{{true}}" />
```

- 不选中
```html
<mx-protocol />

<mx-protocol checked="{{false}}" />
```

### # 是否禁用 disabled
属性：`disabled`，默认 `false`，默认不禁用。

- 禁用
```html
<mx-protocol disabled />

<mx-protocol disabled="{{true}}" />
```

- 不禁用
```html
<mx-protocol />

<mx-protocol disabled="{{false}}" />
```

### # 复选框未选中颜色 checkboxColor
属性：`checkboxColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-protocol checkboxColor="#1677FF" />
```

### # 复选框选中颜色 checkboxSelectColor
属性：`checkboxSelectColor`，默认 `#CA0E2D`，支持任何合法的颜色值。
```html
<mx-protocol checkboxSelectColor="#1677FF" />
```

### # 复选框大小 checkboxSize
属性：`checkboxSize`，默认 `32`，数字，不带单位，默认使用rpx。
```html
<mx-protocol checkboxSize="48" />
```

### # 点击文本是否可以选中或取消 changeChecked
属性：`changeChecked`，默认 `true`，可操作。

- 可操作
```html
<mx-protocol />

<mx-protocol changeChecked />

<mx-protocol changeChecked="{{true}}" />
```

- 不可操作
```html
<mx-protocol changeChecked="{{false}}" />
```

## 自定义事件
事件：`bind:protocol_change`，复选框选中或取消选中变更事件，返回字段 `checked`，值为 `true` 或 `false`。

事件：`bind:protocol_click`，文本段点击回调事件，返回字段 `item`，值为传入的值。

```html
<mx-protocol 
    bind:protocol_change="handleChange" 
    bind:protocol_click="handleClick"
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/protocol_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|content|Array|是|||内容|
|checked|Boolean||`true`、`false`|`false`|是否选中|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|checkboxColor|String||颜色值|`#9AA0B1`|复选框未选中颜色|
|checkboxSelectColor|String||颜色值|`#CA0E2D`|复选框选中颜色|
|checkboxSize|Number||数字|`32`|复选框大小|
|changeChecked|Boolean||`true`、`false`|`true`|点击文本是否可以选中或取消|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:protocol_change|Change|`event.detail.checked`|复选框选中或取消选中变更事件，返回字段 `checked`，值为 `true` 或 `false`|
|bind:protocol_click|Click|`event.detail.item`|文本段点击回调事件，返回字段 `item`，值为传入的值|

## 其他说明
无
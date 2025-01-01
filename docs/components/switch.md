# Switch 开关组件

常用于一些设置操作的场景。

![扫码查看](../imgs/switch_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-switch": "/components/mxwui/switch/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-switch />
```

## 更多用法示例
### # 是否选中 checked
属性：`checked`，默认 `false` 未选中。

- 选中
```html
<mx-switch checked />

<mx-switch checked="{{true}}" />
```

- 未选中
```html
<mx-switch checked="{{false}}" />

<mx-switch />
```

### # 是否禁用 disabled
属性：`disabled`，默认 `false` 未禁用。

- 禁用
```html
<mx-switch disabled />

<mx-switch disabled="{{true}}" />
```

- 未禁用
```html
<mx-switch disabled="{{false}}" />

<mx-switch />
```

### # 自定义颜色 color
属性：`color`，默认 `#098562`，支持任何合法的颜色值。

```html
<mx-switch color="#CA0E2D" />
```

## 事件
事件：`switch_change`，开关回调事件，返回 `value` 字段，值为 `true` 或 `false`。
```html
<mx-switch bind:switch_change="changeSwitch" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/switch_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|checked|Boolean|是|`true`、`false`|`false`|是否选中|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|color|String||颜色值|`#098562`|switch颜色|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:switch_change|Click||开关事件回调，返回 `value` 字段，值为 `true` 或 `false`|

## 其他说明
无
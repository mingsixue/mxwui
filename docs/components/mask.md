# Mask 蒙层组件

统一的蒙层组件，常用于弹窗、引导等场景。

![扫码查看](../imgs/mask_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-mask": "/components/mxwui/mask/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-mask visible="{{true}}" />
```

## 更多用法示例
### # 是否显示蒙层 visible
属性：`visible`，默认 `false` 不显示。必填字段。

- 显示
```html
<mx-mask visible />

<mx-mask visible="{{true}}" />
```

- 不显示
```html
<mx-mask visible="{{false}}" />

<mx-mask />
```

### # 设置透明度 opacity
属性：`opacity`，默认 `0.6`，可选值范围 0-1。

```html
<mx-mask opacity="0.8" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `520`，数字。

```html
<mx-mask visible="{{true}}" zIndex="10" />
```

### # 蒙层点击事件
事件：`bind:mask_tap`，点击事件

```html
<mx-mask bind:mask_tap="handleClick" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/mask_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|蒙层是否显示|
|opacity|String|||`0.6`|蒙层透明度|
|zIndex|Number||数字|`520`|蒙层层级|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:mask_tap|Click|||蒙层点击事件|

## 其他说明
无
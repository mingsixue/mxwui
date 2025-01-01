# Foot 吸底组件

吸附在页面底部位置，做了刘海屏的兼容处理。

![扫码查看](../imgs/fixedFoot_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-fixed-foot": "/components/mxwui/fixed-foot/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-fixed-foot>
    // 内容
</mx-fixed-foot>
```

## 更多用法示例

### # 自定义内容及样式 
通过 `<slot></slot>` 方式，完全放开自定义内容和样式。

```html
<mx-fixed-foot>
    // 自定义内容及样式
</mx-fixed-foot>
```

### # 背景色 bgColor
属性：`bgColor`，默认 `#FFFFFF`，支持任何合法的颜色值。
```html
<mx-fixed-foot bgColor="#1677FF">
</mx-fixed-foot>
```

### # 层级 zIndex
属性：`zIndex`，默认 `1`，数字。
```html
<mx-fixed-foot zIndex="2">
</mx-fixed-foot>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/foot_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bgColor|String||颜色值|`#FFFFFF`|背景色，支持任何合法的颜色值|
|zIndex|Number||数字|`1`|层级|

## 其他说明
无
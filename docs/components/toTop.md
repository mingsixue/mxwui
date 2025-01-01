# ToTop 回到顶部组件

适用于较长的页面，比如列表页，点击可快速回到页面顶部。

![扫码查看](../imgs/toTop_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-to-top": "/components/mxwui/to-top/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-to-top visible="{{true}}" />
```

## 更多用法示例
### # 是否显示 visible
属性：`visible`，默认 `false` 不显示。

正确使用应该是在滑动到一定距离后才出现，比如滑了2屏才出现，回到顶部后消失。

```html
<mx-to-top visible="{{true}}" />
```

### # 底部距离 bottom
属性：`bottom`，默认 `56`，数字，不带单位，默认使用rpx。
```html
<mx-to-top bottom="120" />
```

### # 右侧距离 right
属性：`right`，默认 `64`，数字，不带单位，默认使用rpx。
```html
<mx-to-top right="120" />
```

### # 背景色 bgColor
属性：`bgColor`，默认 `rgba(255,255,255,0.9)`，支持任何合法的颜色值。
```html
<mx-to-top bgColor="#1677FF" />
```

### # 图标颜色 iconColor
属性：`iconColor`，默认 `#9AA0B1`，支持任何合法的颜色值。
```html
<mx-to-top iconColor="#1677FF" />
```

### # 自定义图片 iconUrl
属性：`iconUrl`，自定义图片地址，传入则 `iconColor` 字段失效。
```html
<mx-to-top iconUrl="图片地址" />
```

## 自定义事件
事件：`bind:totop_done`，回到顶部完成回调事件，可以在这里处理隐藏逻辑。

```html
<mx-to-top 
    bind:totop_done="handleTotop" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/toTop_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示|
|bottom|Number||数字|`56`|底部距离，不带单位，默认使用rpx|
|right|Number||数字|`64`|右侧距离，不带单位，默认使用rpx|
|bgColor|String||颜色值|`rgba(255,255,255,0.9)`|背景色，支持任何合法的颜色值|
|iconColor|String||颜色值|`#9AA0B1`|图标颜色，支持任何合法的颜色值|
|iconUrl|String||||自定义图片|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:totop_done|Click||回到顶部完成回调事件，可以在这里处理隐藏逻辑|

## 其他说明
无
# Avatar 头像组件

适用于需要展示用户头像的地方。

![扫码查看](../imgs/avatar_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-avatar": "/components/mxwui/avatar/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-avatar />
```

## 更多用法示例
### # 头像地址 url
属性：`url`，提供了一个默认头像。

默认头像可在 `src/components/mxwui/utils/common.js` 文件中替换常量 `AVATAR`。

```html
<mx-avatar url="图片地址" />
```

### # 头像大小 size
属性：`size`，默认 `140`，数字，不带单位，默认使用rpx。
```html
<mx-avatar size="80" />
```

### # 是否圆形头像 round
属性：`round`，默认 `true`，默认圆形头像。

- 圆形头像
```html
<mx-avatar />

<mx-avatar round />

<mx-avatar round="{{true}}" />
```

- 方形头像
```html
<mx-avatar round="{{false}}" />
```

### # 圆角 radius
属性：`radius`，默认 `4`，数字，不带单位，默认使用rpx。

圆角只对方形头像有效，因为圆形头像默认使用100%。

```html
<mx-avatar radius="16" />
```

### # 边框颜色 borderColor
属性：`borderColor`，默认 `#FFFFFF`，支持任何合法的颜色值。

```html
<mx-avatar borderColor="#CA0E2D" />
```

### # 边框粗细 borderWeight
属性：`borderWeight`，默认 `2`，数字，不带单位，默认使用rpx。

```html
<mx-avatar borderWeight="4" />
```

## 自定义事件
事件：`bind:avatar_tap`，头像点击回调事件。

```html
<mx-avatar 
    bind:avatar_tap="handleAvatar" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/avatar_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|url|String|是|||头像地址|
|size|Number||数字|`140`|头像大小|
|round|Boolean||`true`、`false`|`true`|是否圆形头像|
|radius|Number||数字|`4`|圆角|
|borderColor|String||颜色值|`#FFFFFF`|边框颜色，支持任何合法的颜色值|
|borderWeight|Number||数字|`2`|边框粗细|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:avatar_tap|Click||头像点击回调事件|

## 其他说明
无
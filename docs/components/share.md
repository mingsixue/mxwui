# Share 分享弹窗组件

分享弹窗组件，只提供基础的样式，具体逻辑需要自行实现。

![扫码查看](../imgs/share_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-share": "/components/mxwui/share/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-share visible="{{true}}" />
```

## 更多用法示例
### # 是否显示弹窗 visible
属性：`visible`，默认 `false` 不显示弹窗，必填字段。

- 显示
```html
<mx-share visible />

<mx-share visible="{{true}}" />
```

- 不显示
```html
<mx-share visible="{{false}}" />

<mx-share />
```

### # 标题 title
属性：`title`，自定义标题。
```html
<mx-share title="标题" />
```

### # 标题文本色 titleColor
属性：`titleColor`，标题文本色，默认 `#040A23`，支持任何合法的颜色值。
```html
<mx-share titleColor="#CA0E2D" />
```

### # 描述 desc
属性：`desc`，自定义描述。
```html
<mx-share desc="这是描述" />
```

### # 描述文本色
属性：`descColor`，描述文本色，默认 `#656979`，支持任何合法的颜色值。
```html
<mx-share descColor="#1677FF" />
```

### # 自定义头部图片
属性：`imgUrl`，自定义图片地址，宽度最好是 750rpx 的。

```html
<mx-share imgUrl="图片地址" />
```

### # 是否显示微信好友 showWechat
属性：`showWechat`，默认 `true` 显示微信好友项。

事件：`bind:share_wechat`，微信好友项点击回调事件。

除了唤起分享好友界面外，还提供了点击事件回调。

- 显示
```html
<mx-share />

<mx-share showWechat />

<mx-share showWechat="{{true}}" />
```

- 不显示
```html
<mx-share showWechat="{{false}}" />
```

### # 是否显示微信朋友圈 showFriends
属性：`showFriends`，默认 `false` 不显示微信朋友圈项。

事件：`bind:share_friends`，微信朋友圈项点击回调事件。

- 显示
```html
<mx-share showFriends />

<mx-share showFriends="{{true}}" />
```

- 不显示
```html
<mx-share />

<mx-share showFriends="{{false}}" />
```

### # 是否显示二维码 showQrcode
属性：`showQrcode`，默认 `false` 不显示二维码项。

事件：`bind:share_qrcode`，二维码项点击回调事件。

- 显示
```html
<mx-share showQrcode />

<mx-share showQrcode="{{true}}" />
```

- 不显示
```html
<mx-share />

<mx-share showQrcode="{{false}}" />
```

### # 是否显示复制链接 showCopyLink
属性：`showCopyLink`，默认 `true` 显示复制链接项。

事件：`bind:share_copylink`，复制链接项点击回调事件。

- 显示
```html
<mx-share />

<mx-share showCopyLink />

<mx-share showCopyLink="{{true}}" />
```

- 不显示
```html
<mx-share showCopyLink="{{false}}" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `1` 数字。

```html
<mx-share zIndex="1" />
```

### # 点击蒙层是否可以关闭弹窗 isCloseMask
属性：`isCloseMask`，默认文案 `true` 可关闭弹窗。

- 可关闭
```html
<mx-share />

<mx-share isCloseMask />

<mx-share isCloseMask="{{true}}" />
```

- 不可关闭
```html
<mx-share isCloseMask="{{false}}" />
```

## 事件
```html
<mx-share 
    bind:share_close="handleClose" 
    bind:share_wechat="handleWechat" 
    bind:share_friends="handleFriends" 
    bind:share_qrcode="handleQrcode" 
    bind:share_copylink="handleCopylink" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/share_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|visible|Boolean|是|`true`、`false`|`false`|是否显示弹窗|
|title|String||||标题|
|titleColor|String||颜色值|`#040A23`|标题文本色，支持任何合法的颜色值|
|desc|String||||描述|
|descColor|String||颜色值|`#656979`|描述文本色，支持任何合法的颜色值|
|imgUrl|String||||自定义头部图片，网络地址|
|showWechat|Boolean||`true`、`false`|`true`|是否显示微信好友|
|showFriends|Boolean||`true`、`false`|`false`|是否显示微信朋友圈|
|showQrcode|Boolean||`true`、`false`|`false`|是否显示二维码|
|showCopyLink|Boolean||`true`、`false`|`true`|是否显示复制链接|
|zIndex|Number||数字|`1`|层级|
|isCloseMask|Boolean||`true`、`false`|`true`|点击蒙层是否可以关闭弹窗|

|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:share_wechat|Click||微信好友项点击事件回调|
|bind:share_friends|Click||微信朋友圈项点击事件回调|
|bind:share_qrcode|Click||二维码项点击事件回调|
|bind:share_copylink|Click||复制链接项点击事件回调|
|bind:share_close|Click|`event.detail`|取消按钮或弹窗关闭回调事件，返回 `type` 字段，值为 `cancel` 是取消按钮点击后回调，值为 `close` 则是蒙层点击后回调|

## 其他说明
无
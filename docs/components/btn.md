# Btn 按钮组件

适用于需要用户触发操作的场景。

![扫码查看](../imgs/btn_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-btn": "/components/mxwui/btn/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-btn>默认按钮</mx-btn>
```

## 更多用法示例
### # 按钮类型 type
属性：`type`，可选 `primary`、`default`、`ghost`，默认值 `primary` 主按钮。

按钮类型有 3 种，分为主按钮（有背景色）、次按钮（有边框和浅色背景）和幽灵按钮（只有边框无背景色）。

- 主按钮 `type="primary"`
```html
<mx-btn type="primary">主按钮</mx-btn>

<mx-btn>主按钮</mx-btn>
```

- 次按钮 `type="default"`
```html
<mx-btn type="default">次按钮</mx-btn>
```

- 幽灵按钮 `type="ghost"`
```html 
<mx-btn type="ghost">幽灵按钮</mx-btn>
```

### # 小按钮 small
属性：`samll`，默认 `fasle`，设为 `true` 则显示为小按钮。
```html
<mx-btn small>小按钮</mx-btn>

<mx-btn small="{{true}}">小按钮</mx-btn>
```

### # 圆角 round
属性：`round`，默认 `fasle`，设为 `true` 则显示为圆角样式。
```html
<mx-btn round>圆角按钮</mx-btn>

<mx-btn round="{{true}}">圆角按钮</mx-btn>
```

### # 是否禁用 disabled
属性：`disabled`，默认 `fasle` 不禁用，设为禁用后则无点击事件且是禁用样式。
- 禁用
```html
<mx-btn disabled>禁用</mx-btn>

<mx-btn disabled="{{true}}">禁用</mx-btn>
```
- 不禁用
```html
<mx-btn>不禁用</mx-btn>

<mx-btn disabled="{{false}}">不禁用</mx-btn>
```

### # 是否不可点击 unclickable
属性：`unclickable`，默认 `fasle` 可点击，设为不可点击后则无点击事件且是不可点击样式。
- 不可点击
```html
<mx-btn unclickable>不可点击</mx-btn>

<mx-btn unclickable={{true}}>不可点击</mx-btn>
```

- 不可点击
```html
<mx-btn>可点击</mx-btn>

<mx-btn unclickable={{false}}>可点击</mx-btn>
```

### # 自定义宽度 width
属性：`width`，默认 `702rpx`，带单位。

不传入时大按钮默认宽度为 `702rpx`，如果设置了 `small` 属性，则宽度为 `132rpx`。
```html
<mx-btn width="702rpx">自定义宽度</mx-btn>
```

### # 主题色 themeColor
属性：`themeColor`，默认 `#CA0E2D`，仅支持十六进制的颜色值，因为会涉及背景、边框等颜色的自动计算。
```html
<mx-btn themeColor="#C2996C">自定义主题色</mx-btn>
```

### # 点击事件
事件：`bind:btn_tap` 自定义事件名称
```html
<mx-btn bind:btn_tap="handleTap">点击事件</mx-btn>
```

## 微信开放能力
参考官方文档：https://developers.weixin.qq.com/miniprogram/dev/component/button.html

### # 获取用户信息
属性：`openType="getUserInfo"`
属性：`lang`，指定返回用户信息的语言，`zh_CN` 简体中文，`zh_TW` 繁体中文，`en` 英文，默认 `zh_CN`。

事件：`bind:get_user_info` 自定义事件名称，返回值参考官方文档
```html
<mx-btn openType="getUserInfo" bind:get_user_info="getUserInfo">获取用户信息</mx-btn>
```

### # 获取用户头像
属性：`openType="chooseAvatar"`

事件：`bind:choose_avatar` 自定义事件名称，返回 `avatarUrl` 微信头像地址
```html
<mx-btn openType="chooseAvatar" bind:choose_avatar="chooseAvatar">获取用户头像</mx-btn>
```

### # 手机号快速验证
属性：`openType="getPhoneNumber"`

事件：`bind:get_phone_number` 自定义事件名称

Tips：在触发 bind:get_phone_number 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。

参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
```html
<mx-btn openType="getPhoneNumber" bind:get_phone_number="getPhoneNumber">手机号快速验证</mx-btn>
```

### # 手机号实时验证
属性：`openType="getRealtimePhoneNumber"`

事件：`bind:get_real_time_phone_number` 自定义事件名称

Tips：在触发 bind:get_real_time_phone_number 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。

参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getRealtimePhoneNumber.html
```html
<mx-btn openType="getRealtimePhoneNumber" bind:get_real_time_phone_number="getRealtimePhoneNumber">手机号实时验证</mx-btn>
```

### # 触发分享
属性：`openType="share"`

需要页面开启分享，在页面的 js 文件中 `onShareAppMessage`，然后在函数里面配置分享数据，可通过 `e.from == 'button'` 来判断是通过按钮点击的分享。

微信分享参考：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
```html
<mx-btn openType="share">触发分享</mx-btn>
```

### # 触发客服会话
属性：`openType="contact"`

属性：`sessionFrom`，会话来源，open-type="contact"时有效

属性：`sendMessageTitle`，会话内消息卡片标题，open-type="contact"时有效，默认是当前标题

属性：`sendMessagePath`，会话内消息卡片点击跳转小程序路径，open-type="contact"时有效，默认是当前分享路径

属性：`sendMessageImg`，会话内消息卡片图片，open-type="contact"时有效，默认是当前截图

属性：`showMessageCard`，是否显示会话内消息卡片，默认 `false`，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效

事件：`bind:contact` 自定义事件名称

参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html
```html
<mx-btn openType="contact">触发客服会话</mx-btn>

<mx-btn openType="contact" sessionFrom="来源">触发客服会话</mx-btn>

<mx-btn openType="contact" sendMessageTitle="自定义标题">触发客服会话</mx-btn>

<mx-btn openType="contact" sendMessagePath="自定义链接">触发客服会话</mx-btn>

<mx-btn openType="contact" sendMessageImg="自定义图片">触发客服会话</mx-btn>

<mx-btn openType="contact" showMessageCard="{{false}}">触发客服会话</mx-btn>
```

### # 打开APP
属性：`openType="launchApp"`

属性：`app-parameter`，向 APP 传递的参数，open-type=launchApp时有效

事件：`bind:launch_app`，自定义事件，打开 APP 成功的回调，open-type=launchApp时有效

事件：`bind:error`，自定义事件，当使用开放能力时，发生错误的回调，open-type=launchApp时有效

参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html
```html
<mx-btn openType="launchApp" app-parameter="" bind:launch_app="handleLaunchApp" bind:error="handleError">打开APP</mx-btn>
```

### # 打开授权设置页
属性：`openType="openSetting"`

事件：`bind:open_setting`，自定义事件

```html
<mx-btn openType="openSetting" bind:open_setting="openSetting">打开授权设置页</mx-btn>
```

### # 打开意见反馈
属性：`openType="feedback"`

打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容

```html
<mx-btn openType="feedback">打开意见反馈</mx-btn>
```

### # 用户同意隐私协议按钮
属性：`openType="agreePrivacyAuthorization"`

事件：`bind:agree_privacy_authorization`，自定义事件

用户同意隐私协议按钮。用户点击一次此按钮后，所有已声明过的隐私接口可以正常调用。可通过 bind:agree_privacy_authorization 监听用户同意隐私协议事件。

```html
<mx-btn openType="agreePrivacyAuthorization" bind:agree_privacy_authorization="agreePrivacyAuthorization">用户同意隐私协议按钮</mx-btn>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/btn_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|type|String|是|`primary`、`default`、`ghost`|`primary`|按钮类型|
|small|Boolean||`true`、`false`|`false`|是否小按钮|
|round|Boolean||`true`、`false`|`false`|是否圆角|
|unclickable|Boolean||`true`、`false`|`false`|是否不可点击|
|disabled|Boolean||`true`、`false`|`false`|是否禁用|
|width|String|是||`702rpx`|自定义宽度，需带单位|
|themeColor|String|是|颜色值|`#CA0E2D`|自定义主题色，仅支持十六进制色值|
|openType|String||`getUserInfo`、`chooseAvatar`、`getPhoneNumber`、`getRealtimePhoneNumber`、`share`、`contact`、`launchApp`、`openSetting`、`feedback`、`agreePrivacyAuthorization`||微信开放能力|
|lang|String||`zh_CN`、`zh_TW`、`en`|`zh_CN`|指定返回用户信息的语言|

### openType="getUserInfo"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|lang|String||`zh_CN`、`zh_TW`、`en`|`zh_CN`|指定返回用户信息的语言|
|bind:get_user_info|Handle Event||||获取用户信息事件|

### openType="chooseAvatar"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bind:choose_avatar|Handle Event||||获取用户头像回调事件|

### openType="getPhoneNumber"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bind:get_phone_number|Handle Event||||手机号快速验证回调|

### openType="getRealtimePhoneNumber"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bind:get_real_time_phone_number|Handle Event||||手机号实时验证回调|

### openType="launchApp"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|appParameter|String||||打APP时，向APP传递的参数，需要配合 `openType="launchApp"` 使用|
|bind:launch_app|Handle Event||||打开APP事件|
|bind:error|Handle Event||||打开APP失败事件|

### openType="contact"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|sessionFrom|String||||会话来源|
|sendMessageTitle|String||||会话内消息卡片标题|
|sendMessagePath|String||||会话内消息卡片点击跳转小程序路径|
|sendMessageImg|String||||会话内消息卡片图片|
|showMessageCard|String||`true`、`false`|`false`|是否显示会话内消息卡片|
|bind:contact|Handle Event||||客服消息回调事件|

### openType="openSetting"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bind:open_setting|Handle Event||||在打开授权设置页后回调|

### openType="agreePrivacyAuthorization"
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|bind:agree_privacy_authorization|Handle Event||||用户同意隐私协议事件回调|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:btn_tap|Click||点击事件|

## 其他说明
无
# Nav 顶部导航组件

常用于页面顶部的导航，返回页面等场景。

标题内容支持居中、居左显示，支持自定义图片，图标支持自定义颜色、图标、图片、事件，左侧支持第2个图标。

![扫码查看](../imgs/nav_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-nav": "/components/mxwui/nav/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-nav title="页面标题" />
```

## 更多用法示例
### # 主题 theme
属性：`theme`，可选值：`light`、`dark`，默认 `dark` 深色主题。

- light 浅色主题（白底黑字）
```html
<mx-nav theme="light" />
```

- dark 深色主题（主题色白字）
```html
<mx-nav theme="dark" />
```

### # 导航栏背景色 bgColor
属性：`bgColor`，默认为 `#FFFFFF`，会根据不同主题色进行调整，支持任何合法的颜色值。

```html
<mx-nav bgColor="#1677FF" />
```

### # 标题 title
属性：`title`，自定义标题。

```html
<mx-nav title="首页" />
```

### # 标题文本色 titleColor
属性：`titleColor`，支持任何合法的颜色值。

当 `light` 浅色主题时，默认为 `#FFFFFF`。

当 `dark` 深色主题时，默认为 `#040A23`。

```html
<mx-nav titleColor="#00f" />
```

### # 标题自定义图片 titleImg
属性：`titleImg`，自定义图片地址，传了则 `title` 和 `titleColor` 无效。

```html
<mx-nav titleImg="http://cdn.mingsixue.com/xcx/MXWUI/mxwui.png" />
```

### # 标题是否居左 isLeft
属性：`isLeft`，默认 `false` 不居左，默认标题居中。

- 标题居中
```html
<mx-nav isLeft="{{false}}" />

<mx-nav />
```

- 标题居左
```html
<mx-nav isLeft />

<mx-nav isLeft="{{true}}" />
```

### # 是否显示左侧图标 isHideIcon
属性：`isHideIcon`，默认 `true` 显示。

- 显示
```html
<mx-nav />

<mx-nav isHideIcon />

<mx-nav isHideIcon="{{true}}" />
```

- 不显示
```html
<mx-nav isHideIcon="{{false}}" />
```

### # 自定义图标 iconName
属性：`iconName`，图标库中图标名称。

当可返回上一页时默认图标为 `arrows_left`，没有可返回的上一页时为 `home`。

```html
<mx-nav iconName="circle_left_fill" />
```

### # 自定义图标颜色 iconColor
属性：`iconColor`，默认颜色会根据主题进行切换，主题 `dark` 时为 `#040A23`，`light` 时为 `#FFFFFF`。

```html
<mx-nav iconColor="#0f0" />
```

### # 图标使用自定义图片 iconImg
属性：`iconImg`，自定义图片地址，传入则 `iconName` 和 `iconColor` 无效。
```html
<mx-nav iconImg="http://cdn.mingsixue.com/xcx/MXWUI/hot.png" />
```

### # 自定义图标事件 isCustomIconHandle
属性：`isCustomIconHandle`，默认 `false` 不开启自定义事件。

事件：`bind:nav_icon_tap`，图标点击事件。

会根据是否有上一级页面来决定是返回上一级页面还是跳转到首页，当定义 `isCustomIconHandle` 字段后会开启自定义事件，通过 `bind:nav_icon_tap` 事件接收，不再处理默认跳转的逻辑，需要自行处理。

```html
<mx-nav isCustomIconHandle bind:nav_icon_tap="iconTap" />
```

### # 设置第二个图标
属性：`secondIconName`，第二个图标名称，只支持图标库中图标名称。

属性：`secondIconColor`，第二个图标的颜色，支持任何合法的颜色值。

属性：`secondIconImg`，第二个图片自定义图片，传入后 `secondIconName` 和 `secondIconColor` 无效。

事件：`bind:nav_second_icon_tap`，第二个图标点击事件

- 自定义图标
```html
<mx-nav secondIconName="filter" secondIconColor="#00f" bind:nav_second_icon_tap="secondIconTap" />
```

- 自定义图片
```html
<mx-nav secondIconImg="http://cdn.mingsixue.com/xcx/MXWUI/set.png" bind:nav_second_icon_tap="secondIconTap" />
```

### # 层级 zIndex
属性：`zIndex`，默认 `519`，因为Mask组件层级是520，需要比它小。
```html
<mx-nav zIndex="1" />
```

### # 导航透明
需要透明导航的话，设置 `title=""`，`bgColor="transparent"` 和 `isHideIcon="{{false}}"`。

```html
<mx-nav title="" bgColor="transparent" isHideIcon="{{false}}" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/nav_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|theme|String|是|`light`、`dark`|`dark`|颜色主题，影响文本色、图标颜色和背景色|
|bgColor|String||颜色值|`#FFFFFF`|导航栏背景色，支持任何合法的颜色值|
|title|String||||标题文本|
|titleColor|String||颜色值||标题文本色，支持任何合法的颜色值|
|titleImg|String||url||标题自定义图片地址，传了则 `title`、`titleColor` 参数无效|
|isLeft|Boolean||`true`、`false`|`false`|标题是否居左|
|isHideIcon|Boolean||`true`、`false`|`true`|是否显示左侧图标|
|iconName|String|||`arrows_left`|图标名称，只支持图标库的图标|
|iconColor|String||颜色值||图标自定义颜色，不传根据 `theme` 确定，支持任何合法的颜色值|
|iconImg|String||url||图标自定义图片地址，传了则 `iconName`、`iconColor` 无效|
|isCustomIconHandle|Boolean||`true`、`false`|`false`|是否使用图标自定义事件，默认事件为返回或跳转首页|
|secondIconName|String||||第二个图标名称|
|secondIconColor|String||颜色值||第二个图标自定义颜色，支持任何合法的颜色值|
|secondIconImg|String||url||第二个图标自定义图片地址，，传了则 `secondIconName`、`secondIconColor` 无效|
|zIndex|Number||数字|`519`|导航栏层级|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:nav_icon_tap|Click||图标点击事件，需要配合 `isCustomIconHandle` 参数使用|
|bind:nav_second_icon_tap|Click||第二个图标点击事件|

## 可修改常量
|常量|值|说明|
|----|----|----|
|HOME_URL|`/pages/index/index`|默认首页地址|
|DEFAULT_ICON|`arrows_left`|默认返回图标|
|DEFAULT_ICON_HOME|`home`|默认首页图标|

可在 `src/components/mxwui/utils/common.js` 中修改

## 其他说明
- 如果需要改变状态栏颜色，请在页面的配置文件中修改，值只支持 `white` / `black`
```json
{
    "navigationBarTextStyle": "black"
}
```
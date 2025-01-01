# Label 标签按钮组件

多用在抽屉场景内的单/多选标签样式。

![扫码查看](../imgs/label_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-label": "/components/mxwui/label/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-label text="默认" />
```

## 更多用法示例
### # 按钮类型
属性：`type`，可选值 `default` 默认、`single` 单选选中、`multiple` 多选选中、`disabled` 禁用，默认值 `default`。
- 默认 `type="default"`
```html
<mx-label type="default" text="默认" />
```

- 单选选中 `type="single"`
```html
<mx-label type="single" text="单选选中" />
```

- 多选选中 `type="multiple"`
```html
<mx-label type="multiple" text="多选选中" />
```

- 禁用 `type="disable"`
```html
<mx-label type="disable" text="禁用" />
```

### # 自定义文案
属性：`text`，按钮显示的文案。
```html
<mx-label text="自定义文案" />
```

### # 自定义文本色
属性：`defaultColor`，自定义文本色，默认 `#040A23`，任何合法的颜色值。
```html
<mx-label type="default" text="默认" defaultColor="#1677FF" />
```

### # 自定义选中颜色
属性：`defaultColor`，自定义选中颜色，默认 `#CA0E2D`，只支持十六进制颜色值，因为涉及背景色、角标的颜色生成。
```html
<mx-label type="single" text="单选选中" selectColor="#1677FF" />

<mx-label type="multiple" text="多选选中" selectColor="#1677FF" />
```

## 事件
```html
<mx-label text="默认" bind:label_tap="handleClick" />
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/label_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|type|String|是|`default`、`single`、`multiple`、`disable`|`default`|类型，默认、单选、多选、禁用|
|text|String|是|||文案|
|defaultColor|String|是|颜色值|`#040A23`|默认文本色|
|selectColor|String|是|颜色值|`#CA0E2D`|选中颜色，只支持十六进制颜色值|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:label_tap|Click||点击事件|

## 其他说明
- 当一组标签使用时可以自行维护数据，动态变更 `type` 的属性值，达到选中某项值或选中多个值的目的
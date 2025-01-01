# Upload 上传组件

上传图片或视频。

开发中！！

![扫码查看](../imgs/upload_qrcode.png)

扫码查看示例

## 基础用法
页面 `.json` 文件 `usingComponents` 中引入组件
```json
// json
{
    "usingComponents": {
        "mx-upload": "/components/mxwui/upload/index"
    }
}
```

页面 `.wxml` 文件中使用组件
```html
<mx-upload type="image" />
```

## 更多用法示例
### # xxx xx
属性：``，可选 ``、``、``、``，默认 ``。
```html
<mx-upload type="image" />
```

### # xxx xx
属性：``，可选 ``、``、``、``，默认 ``。
```html
<mx-upload type="image" />
```

### # xxx xx
属性：``，默认 ``。
```html
<mx-upload type="image" />
```

## 自定义事件
事件：``，xxx。

事件：``，xxx。
```html
<mx-xxx 
    bind:xxx_xxx="xxx" 
/>
```

<!-- ## 参数示意图
![组件参数分解示意图](../imgs/upload_params.png) -->

## 参数
|参数|类型|必填|可选值|默认值|参数描述|
|----|----|----|----|----|----|
|xxx|String||`xxx`、`xxx`、`xxx`|`xxx`|xxx|
|xxx|String||||xxx|
|xxx|String||颜色值|`xxx`|xxx|
|xxx|Number||数字||xxx|
|xxx|Number||数字|`xxx`|xxx|
|xxx|Boolean||`true`、`false`|`false`|xxx|
|xxx|Array||||xxx|
|xxx|Object||||xxx|

## 事件
|事件名称|类型|返回值|事件说明|
|----|----|----|----|
|bind:xxx_xxx|Change|`event`|xxx|
|bind:xxx_xxx|Click||xxx|

## 其他说明
无
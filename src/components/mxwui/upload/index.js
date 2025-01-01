import {COLOR} from '../utils/common';

Component({
    properties: {
        // 上传类型，image 图片、video 视频、file 文件
        type: {
            type: String,
            value: 'image'
        },
        // 图片路径/视频路径/文件路径
        src: {
            type: String,
            value: ''
        },
        // 封面图片地址
        cover: {
            type: String,
            value: ''
        },
        // 组件大小
        width: {
            type: Number,
            value: 233
        },
        // 是否小尺寸
        small: {
            type: Boolean,
            value: false
        },

        // xxx
        xxx2: {
            type: Boolean,
            value: false
        },
        //
        xxx3: {
            type: Number,
            value: ''
        },
        // xxx
        xxx4: {
            type: Array,
            value: []
        },
        // xxx
        xxx5: {
            type: Object,
            value: []
        },
    },
    attached() {
    },
    ready() {
    },
    methods: {
        handleImage() {
            // 查看图片
            console.log('image');

            let src = this.data.src;

            wx.previewImage({
                current: src,
                urls: [src]
            });
        },
        handleVideo() {
            // 播放视频
            console.log('video');

            let {src, cover} = this.data;

            wx.previewMedia({
                sources: [
                    {url: src, type: 'video', poster: cover}
                ]
            });
        },
        handleFile() {
            // 预览文件
            console.log('file');

            wx.downloadFile({
                url: this.data.src,
                success: function (res) {
                    const filePath = res.tempFilePath;
                    wx.openDocument({
                        filePath: filePath,
                        success: function (res) {
                            console.log('打开文件成功')
                        }
                    })
                }
            })
        },
        handleDel() {
            this.setData({
                src: '',
                cover: ''
            });

            this.triggerEvent("upload_change", {type: 'del', src: '', cover: ''});
        },
        handleUpload() {
            console.log('上传');

            // 判断类型
            // 调接口上传
            // 扩展名限制
            // 上传进度
            // 上传结果

            // this.triggerEvent("upload_change", {type: 'upload', src: '', cover: ''});
        },
        // xxx
        handleXXX() {
            this.triggerEvent("xxx");
        },
    }
});

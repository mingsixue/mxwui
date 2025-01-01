import {COLOR, HOME_URL, DEFAULT_ICON, DEFAULT_ICON_HOME} from '../utils/common';

Component({
    properties: {
        // 主题 light / dark
        theme: {
            type: String,
            value: "dark",
        },
        // 导航栏背景色
        bgColor: {
            type: String,
            value: COLOR.WHITE_COLOR,
        },
        // 标题
        title: {
            type: String,
            value: '',
        },
        // 标题文本色
        titleColor: {
            type: String,
            value: ''
        },
        // 标题自定义图片
        titleImg: {
            type: String,
            value: ''
        },
        // 标题是否居左
        isLeft: {
            type: Boolean,
            value: false
        },
        // 是否显示左侧图标
        isHideIcon: {
            type: Boolean,
            value: true
        },
        // 图标名称
        iconName: {
            type: String,
            value: DEFAULT_ICON
        },
        // 图标颜色
        iconColor: {
            type: String,
            value: '',
        },
        // 图标自定义图片地址
        iconImg: {
            type: String,
            value: ''
        },
        // 图标自定义事件
        isCustomIconHandle: {
            type: Boolean,
            value: false
        },
        // 第二个图标名称
        secondIconName: {
            type: String,
            value: ''
        },
        // 第二个图标颜色
        secondIconColor: {
            type: String,
            value: '',
        },
        // 第二个图标自定义图片地址
        secondIconImg: {
            type: String,
            value: ''
        },
        // 导航栏层级
        zIndex: {
            type: Number,
            value: 519,
        },  
        // 是否固定顶部
        isFixed: {
            type: Number,
            value: true
        }   
    },
    attached() {
        const { statusBarHeight, screenWidth } = wx.getSystemInfoSync();
        let boxStyle = this.getBoxStyle();

        let iconColor = this.data.iconColor || '';
        if (this.data.theme && !iconColor) {
            if (this.data.theme == 'light') {
                iconColor = COLOR.TEXT_COLOR; 
            } else {
                iconColor = COLOR.WHITE_COLOR;
            }
        }

        let bgColor = this.data.bgColor || '';
        if (this.data.theme && bgColor == COLOR.WHITE_COLOR) {
            if (this.data.theme == 'light') {
                bgColor = COLOR.WHITE_COLOR; 
            } else {
                bgColor = COLOR.THEME_COLOR;
            }
        }

        this.setData({
            statusBarHeight: statusBarHeight,
            screenWidth: screenWidth,
            boxStyle: boxStyle,
            iconColor: iconColor,
            bgColor: bgColor,
        });
    },
    ready() {
        const pages = getCurrentPages();
        const isBack = pages.length > 1 ? true : false;
        let isCurrent = false;

        const lastPage = pages[pages.length - 1];
        if (`/${lastPage.route}` == HOME_URL) {
            isCurrent = true;
        }

        let iconName = this.data.iconName;
        if (iconName == DEFAULT_ICON) {
            if (!isBack) {
                iconName = DEFAULT_ICON_HOME;
            }
        }

        this.setData({
            isBack: isBack,
            isCurrent: isCurrent,
            iconName: iconName
        });
    },
    methods: {
        // 左上角按钮点击
        handleIcon() {
            if (this.data.isCustomIconHandle) {
                // 自定义点击事件
                this.triggerEvent("nav_icon_tap");
                return;
            } else if (this.data.isBack) {
                // 返回
                wx.navigateBack();
                return;
            } else {
                if (!this.data.isCurrent) {
                     // 跳转首页
                    wx.redirectTo({
                        url: HOME_URL
                    });
                }
            }
        },
        // 第二个按钮点击
        handleSecondIcon() {
            this.triggerEvent("nav_second_icon_tap");
        },
        // 导航栏高度处理
        getBoxStyle() {
            let boxStyle = "padding: 0 0 2px 0;";
            let menuRect = this.getMenuRect();
            let statusBarHeight = this.data.statusBarHeight;

            if (menuRect && menuRect.height < 46) {
                let height = menuRect.height;
                let top = menuRect.top;

                // 部分机型top数值异常，例如小米某机型
                if (top < statusBarHeight) {
                    top += statusBarHeight;
                }

                // 分享按钮小于导航高航高度46时做处理
                var totalPadding = 46 - height;
                var paddingTop = top - statusBarHeight;
                var paddingBottom = totalPadding - paddingTop;

                // 设置外框padding，利用flex垂直居中
                if (paddingTop - paddingBottom > 0) {
                    boxStyle = "padding: " + (paddingTop - paddingBottom) + "px 0 0 0;";
                } else if (paddingBottom - paddingTop > 0) {
                    boxStyle = "padding: 0 0 " + (paddingBottom - paddingTop) + "px 0;";
                } else {
                    boxStyle = "padding: 0;";
                }
            }
            return boxStyle;
        },
        // 获取胶囊按钮数据
        getMenuRect() {
            if (this.menuRect && this.menuRect.height) {
                return this.menuRect;
            }

            try {
                this.menuRect = wx.getMenuButtonBoundingClientRect && wx.getMenuButtonBoundingClientRect();
            } catch (e) {
                return null;
            }

            return this.menuRect && this.menuRect.height ? this.menuRect : null;
        },
    },
});

import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        visible: false,
        visibleMask: false,
        visibleArrows: false,
        visibleIcon: false,
        visibleBgColor: false,
        icon: {
            iconName: 'face_laugh',
            iconColor: '',
            iconSize: 80,
        },
        icon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
            iconWidth: 80,
            iconHeight: 80
        },
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        tipstop: 0,
        tipsleft: 0,
        tipsArrowsTop: 0,
        tipsArrowsLeft: 0,
        tipsDirection: 'top',
        tipsIcon: {}
    },
    handleClose() {
        console.log('🔥🔥🔥 关闭');
    }, 
    handleVisible() {
        this.setData({
            visible: true,
        });
    },
    handleVisible(e) {
        let {cls, tipstop} = e.currentTarget.dataset;
        this.setData({
            visible: true,
        });
        wx.nextTick(() => {
            const query = wx.createSelectorQuery()
            query.select('.'+ cls).boundingClientRect();
            query.exec((resp) => {
                let res = resp[0];
            console.log(resp);
                this.setData({
                    top: res.top ,
                    left: res.left,
                    width: res.width,
                    height: res.height,
                    tipstop,
                });
            })
        });
    },
    handleVisibleMask(e) {
        let {cls, tipstop, tipsleft, arrowstop, arrowsleft} = e.currentTarget.dataset;

        const query = wx.createSelectorQuery()
        query.select('.'+ cls).boundingClientRect();
        query.exec((resp) => {
            let res = resp[0];

            this.setData({
                visibleMask: true,
                top: res.top,
                left: res.left,
                width: res.width,
                height: res.height,
                tipstop,
                tipsleft,
                tipsArrowsTop: arrowstop,
                tipsArrowsLeft: arrowsleft,
                tipsDirection: cls
            });
        })
    },
    handleVisibleArrows(e) {
        let {cls, tipstop, tipsleft, arrowstop, arrowsleft} = e.currentTarget.dataset;

        const query = wx.createSelectorQuery()
        query.select('.'+ cls).boundingClientRect();
        query.exec((resp) => {
            let res = resp[0];

            this.setData({
                visibleArrows: true,
                top: res.top,
                left: res.left,
                width: res.width,
                height: res.height,
                tipstop,
                tipsleft,
                tipsArrowsTop: arrowstop,
                tipsArrowsLeft: arrowsleft,
                tipsDirection: cls
            });
        })
    },
    handleVisibleIcon(e) {
        let {cls, tipstop, tipsleft, arrowstop, arrowsleft} = e.currentTarget.dataset;

        const query = wx.createSelectorQuery()
        query.select('.'+ cls).boundingClientRect();
        query.exec((resp) => {
            let res = resp[0];

            this.setData({
                visibleIcon: true,
                top: res.top,
                left: res.left,
                width: res.width,
                height: res.height,
                tipstop,
                tipsleft,
                tipsArrowsTop: arrowstop,
                tipsArrowsLeft: arrowsleft,
                tipsIcon: cls == 'icon' ? this.data.icon : this.data.icon2
            });
        })
    },
    handleVisibleBgColor(e) {
        let {cls, tipstop, tipsleft, arrowstop, arrowsleft} = e.currentTarget.dataset;

        const query = wx.createSelectorQuery()
        query.select('.'+ cls).boundingClientRect();
        query.exec((resp) => {
            let res = resp[0];

            this.setData({
                visibleBgColor: true,
                top: res.top,
                left: res.left,
                width: res.width,
                height: res.height,
                tipstop,
                tipsleft,
                tipsArrowsTop: arrowstop,
                tipsArrowsLeft: arrowsleft,
            });
        })
    },
});

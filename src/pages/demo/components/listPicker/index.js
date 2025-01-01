import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        firstIcon: {
            iconName: 'setting',
            iconColor: ''
        },
        firstIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        },
        lastIcon: {
            iconName: 'help',
            iconColor: '#1677FF'
        },
        lastIcon2: {
            iconUrl: 'http://cdn.mingsixue.com/xcx/MXWUI/hot.png',
        },
        options: [
            {id: 1, label: '选项一'},
            {id: 2, label: '选项二'},
            {id: 3, label: '选项三'},
            {id: 4, label: '选项四'},
            {id: 5, label: '选项五'},
        ],
        multiOptions: [
            [
                {id: 1, label: '选项一'},
                {id: 2, label: '选项二'},
                {id: 3, label: '选项三'},
                {id: 4, label: '选项四'},
                {id: 5, label: '选项五'},
            ],
            [
                {id: 11, label: '子项A'},
                {id: 12, label: '子项B'},
                {id: 13, label: '子项C'},
                {id: 14, label: '子项D'},
                {id: 15, label: '子项E'},
            ]
        ],
        index: 1,
        multiIndex: [1, 2],
        region: ['浙江省', '杭州市', '西湖区']
    },
    handleChange(e) {
        console.log('🔥🔥🔥 change', e.detail);
    }, 
    handleCancel(e){
        console.log('🔥🔥🔥 cancel');
    },
    handleColumnChange(e) {
        console.log('🔥🔥🔥 column change', e.detail);
    },
    handleFirstClick() {
        console.log('🔥🔥🔥 标签前图标点击');
    },
    handleLastClick() {
        console.log('🔥🔥🔥 标签后图标点击');
    }
});

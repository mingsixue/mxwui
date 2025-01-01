import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        sex: [
            {text: '男', value: 1, checked: true},
            {text: '女', value: 2},
        ],
        interest: [
            {text: '旅游', value: 1},
            {text: '阅读', value: 2, checked: true},
            {text: '绘画', value: 3},
            {text: '书法', value: 4},
        ],
        jobs: [
            {id: 1, label: '前端开发工程师'},
            {id: 2, label: '后端开发工程师'},
            {id: 3, label: '测试工程师'},
            {id: 4, label: '设计师'},
            {id: 5, label: '产品经理'},
        ],
        multiOptions: [
            [
                {id: 1, label: '互联网行业'},
                {id: 2, label: '软件通信'},
                {id: 3, label: '制造业'},
                {id: 4, label: '运输业'},
                {id: 5, label: '农牧渔业'},
            ],
            [
                {id: 11, label: '电商'},
                {id: 12, label: '金融'},
                {id: 13, label: '教育'},
                {id: 14, label: '销售'},
                {id: 15, label: '养殖'},
            ]
        ],
    },
});

import XCX from '@utils/index';
Page({
    data: {
        navHeight: XCX.getNavHeight(),
        mainColor: [
            {name: '赤尊', value: '#CA0E2D'},
            {name: '墨靛', value: '#040A23'},
            {name: '绢金', value: '#C2996C'}
        ],
        minorColor: [
            {name: '花青', value: '#1F4886'},
            {name: '霏绿', value: '#098562'},
            {name: '砂硕', value: '#4B2F29'},
            {name: '石印', value: '#A34B27'},
            {name: '姜黄', value: '#FDC54C'},
            {name: '赤红', value: '#BA0C29'}
        ],
        textColor: [
            {name: '黑色', value: '#040A23'},
            {name: '深灰', value: '#656979'},
            {name: '浅灰', value: '#9AA0B1'},
        ],
        bgColor: [
            {name: '边框色', value: '#E1E5EC'},
            {name: '大背景', value: '#F8F9FA'},
            {name: '水烟色', value: '#F2F2F2'},
        ],
        colorLevel: [
            [
                {value: '#E8E8EB'},
                {value: '#D1D2D7'},
                {value: '#BABCC3'},
                {value: '#A3A5AF'},
                {value: '#8C8F9B'},
                {value: '#767987'},
                {value: '#5F6373'},
                {value: '#484C5F'},
                {value: '#31364B'},
                {value: '#1A2037'},
                {value: '#040A23', text: '墨靛（#040A23）'},
                {value: '#03091F'},
                {value: '#03081C'},
                {value: '#020719'},
                {value: '#020616'},
                {value: '#020513'},
                {value: '#01040F'},
                {value: '#01030C'},
                {value: '#010209'},
                {value: '#000106'},
                {value: '#000003'},
            ],
            [
                {value: '#EAEEF4'},
                {value: '#D6DDE9'},
                {value: '#C1CDDE'},
                {value: '#ADBCD3'},
                {value: '#99ABC8'},
                {value: '#849BBD'},
                {value: '#708AB2'},
                {value: '#5C79A7'},
                {value: '#47699C'},
                {value: '#335891'},
                {value: '#1F4886', text: '花青（#1F4886）'},
                {value: '#1C4179'},
                {value: '#193A6D'},
                {value: '#163461'},
                {value: '#132D55'},
                {value: '#102749'},
                {value: '#0E203C'},
                {value: '#0B1A30'},
                {value: '#081324'},
                {value: '#050D18'},
                {value: '#02060C'},
            ],
            [
                {value: '#E8F3F0'},
                {value: '#D2E8E2'},
                {value: '#BBDDD4'},
                {value: '#A5D2C5'},
                {value: '#8FC7B7'},
                {value: '#78BCA9'},
                {value: '#62B19B'},
                {value: '#4CA68C'},
                {value: '#359B7E'},
                {value: '#1F9070'},
                {value: '#098562', text: '霏绿（#098562）'},
                {value: '#087859'},
                {value: '#076C50'},
                {value: '#066047'},
                {value: '#05543E'},
                {value: '#044835'},
                {value: '#043C2C'},
                {value: '#033023'},
                {value: '#02241A'},
                {value: '#011811'},
                {value: '#000C08'},
            ],
            [
                {value: '#FEF9EE'},
                {value: '#FEF4DE'},
                {value: '#FEEFCE'},
                {value: '#FEE9BD'},
                {value: '#FEE4AD'},
                {value: '#FDDF9D'},
                {value: '#FDDA8D'},
                {value: '#FDD47C'},
                {value: '#FDCF6C'},
                {value: '#FDCA5C'},
                {value: '#FDC54C', text: '姜黄（#FDC54C）'},
                {value: '#E6B345'},
                {value: '#CFA13E'},
                {value: '#B88F37'},
                {value: '#A17D30'},
                {value: '#8A6B29'},
                {value: '#735922'},
                {value: '#5C471B'},
                {value: '#453514'},
                {value: '#2D230D'},
                {value: '#161106'},
            ],
            [
                {value: '#FAE9EB'},
                {value: '#F5D3D8'},
                {value: '#F0BDC5'},
                {value: '#EBA7B2'},
                {value: '#E6919F'},
                {value: '#E27B8C'},
                {value: '#DD6579'},
                {value: '#D84F66'},
                {value: '#D33953'},
                {value: '#CE2340'},
                {value: '#CA0E2D', text: '赤尊（#CA0E2D）'},
                {value: '#B70C28'},
                {value: '#A50B24'},
                {value: '#920A20'},
                {value: '#80081C'},
                {value: '#6E0718'},
                {value: '#5B0614'},
                {value: '#490510'},
                {value: '#37030C'},
                {value: '#240208'},
                {value: '#120104'},
            ],
            [
                {value: '#EEECEB'},
                {value: '#DED9D8'},
                {value: '#CDC6C4'},
                {value: '#BDB3B1'},
                {value: '#ADA09D'},
                {value: '#9C8D8A'},
                {value: '#8C7A76'},
                {value: '#7C6763'},
                {value: '#6B544F'},
                {value: '#5B413C'},
                {value: '#4B2F29', text: '砂硕（#4B2F29）'},
                {value: '#442A25'},
                {value: '#3D2621'},
                {value: '#36221D'},
                {value: '#2F1D1A'},
                {value: '#281916'},
                {value: '#221512'},
                {value: '#1B110E'},
                {value: '#140C0B'},
                {value: '#0D0807'},
                {value: '#060403'},
            ],
            [
                {value: '#F6EEEB'},
                {value: '#EEDED7'},
                {value: '#E5CDC4'},
                {value: '#DDBDB0'},
                {value: '#D5AD9C'},
                {value: '#CC9C89'},
                {value: '#C48C75'},
                {value: '#BC7C61'},
                {value: '#B36B4E'},
                {value: '#AB5B3A'},
                {value: '#A34B27', text: '石印（#A34B27）'},
                {value: '#944423'},
                {value: '#853D1F'},
                {value: '#76361C'},
                {value: '#672F18'},
                {value: '#582815'},
                {value: '#4A2211'},
                {value: '#3B1B0E'},
                {value: '#2C140A'},
                {value: '#1D0D07'},
                {value: '#0E0603'},
            ],
            [
                {value: '#F9F5F1'},
                {value: '#F3ECE4'},
                {value: '#EEE3D6'},
                {value: '#E8D9C9'},
                {value: '#E3D0BC'},
                {value: '#DDC7AE'},
                {value: '#D8BEA1'},
                {value: '#D2B494'},
                {value: '#CDAB86'},
                {value: '#C7A279'},
                {value: '#C2996C', text: '绢金（#C2996C）'},
                {value: '#B08B62'},
                {value: '#9E7D58'},
                {value: '#8D6F4E'},
                {value: '#7B6144'},
                {value: '#69533A'},
                {value: '#584531'},
                {value: '#463727'},
                {value: '#34291D'},
                {value: '#231B13'},
                {value: '#110D09'},
            ]
        ],
        gradient: [
            {name: '红色渐变-1', start: '#F24A66', end: '#EF1A3D'},
            {name: '红色渐变-2', start: '#EF1A3D', end: '#E30035'},
            {name: '红色渐变-3', start: '#E30035', end: '#CA0E2D'},
            {name: '红色渐变-4', start: '#CA0E2D', end: '#A50B24'},
            {name: '绿色渐变-1', start: '#339E7B', end: '#098562'},
            {name: '绿色渐变-2', start: '#49C4CF', end: '#4FAEBD'},
            {name: '蓝色渐变-1', start: '#3D79B5', end: '#396BA2'},
            {name: '蓝色渐变-2', start: '#335891', end: '#1F4886'},
            {name: '蓝色渐变-3', start: '#464C69', end: '#2E344C'},
            {name: '黄色渐变-1', start: '#FEFCFB', end: '#EFE3D7'},
            {name: '黄色渐变-2', start: '#EFE3D7', end: '#E0CAB3'},
            {name: '黄色渐变-3', start: '#E0CAB3', end: '#D1B18F'},
            {name: '黄色渐变-4', start: '#D1B18F', end: '#C2996C'},
            {name: '黄色渐变-5', start: '#C2996C', end: '#B17F49'},
        ]
    },
    handleCopy(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.color,
            success () {
                wx.showToast({
                    title: '复制成功',
                    icon: 'none'
                });
            }
        })
    }
});
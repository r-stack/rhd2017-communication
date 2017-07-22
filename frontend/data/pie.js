

function getPieOption(gym, gnd, cls, lib, etc) {
    return {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            orient: 'horizontal',
            left: 'left',
            data: ['体育館', '運動場', '教室', '図書室', 'その他']
        },
        series: [
            {
                name: '場所',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {
                        value: gym,
                        name: 'グラウンド',
                    },
                    {
                        value: gnd,
                        name: '教室',
                    },
                    {
                        value: cls,
                        name: '図書室',

                    },
                    {
                        value: lib,
                        name: '理科室',

                    },
                    {
                        value: etc,
                        name: 'その他',
                        itemStyle: {
                            normal: {
                                color: 'rgba(120,120,120,1)'
                            }
                        }
                    },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
}


var optionMine = getPieOption(12, 9, 30, 20, 19);
var optionFriends1 = getPieOption(12, 15, 30, 40, 3);
var optionFriends2 = getPieOption(12, 15, 30, 40, 3);
var optionFriends3 = getPieOption(12, 15, 30, 40, 3);

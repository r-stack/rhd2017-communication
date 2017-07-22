

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
                        name: '体育館',
                        itemStyle: {
                            normal: {
                                color: 'rgba(200,214,120,1)'
                            }
                        }
                    },
                    {
                        value: gnd,
                        name: '運動場',
                        itemStyle: {
                            normal: {
                                color: 'rgba(160,120,100,1)'
                            }
                        }
                    },
                    {
                        value: cls,
                        name: '教室',
                        itemStyle: {
                            normal: {
                                color: 'rgba(110,120,250,1)'
                            }
                        }
                    },
                    {
                        value: lib,
                        name: '図書室',
                        itemStyle: {
                            normal: {
                                color: 'rgba(110,200,100,1)'
                            }
                        }
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


var optionMine = getPieOption(12, 9, 20, 30, 19);
var optionFriends1 = getPieOption(12, 15, 30, 40, 3);
var optionFriends2 = getPieOption(12, 15, 30, 40, 3);
var optionFriends3 = getPieOption(12, 15, 30, 40, 3);

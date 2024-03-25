const plantImgUrl = {
    "31.205112, 121.421814": {
        "imgUrl": "1",
        "name": "小叶黄杨"
    },
    "31.205092, 121.421525": {
        "imgUrl": "2",
        "name": "香附子"
    },
    "31.205112, 121.421813": {
        "imgUrl": "3",
        "name": "山茶"
    },
    "31.205008, 121.422080": {
        "imgUrl": "4",
        "name": "早熟禾"
    },
    "31.205022, 121.422097": {
        "imgUrl": "5",
        "name": "报春花"
    },
    "31.205037, 121.422103": {
        "imgUrl": "6",
        "name": "三色堇"
    },
    "31.205045, 121.422103": {
        "imgUrl": "7",
        "name": "报春花"
    },
    "31.205008, 121.422158": {
        "imgUrl": "8",
        "name": "南天竹"
    },
    "31.205067, 121.422163": {
        "imgUrl": "9",
        "name": "枸骨"
    },
    "31.205012, 121.422220": {
        "imgUrl": "10",
        "name": "山茶"
    },
    "31.204862, 121.422522": {
        "imgUrl": "11",
        "name": "雪松"
    },
    "31.204783, 121.422792": {
        "imgUrl": "12",
        "name": "美国冬青"
    },
    "31.204705, 121.423150": {
        "imgUrl": "13",
        "name": "荷花玉兰"
    },
    "31.204462, 121.423455": {
        "imgUrl": "14",
        "name": "菖蒲"
    },
    "31.204463, 121.42345": {
        "imgUrl": "15",
        "name": "报春花"
    },
    "31.204597, 121.423378": {
        "imgUrl": "16",
        "name": "白花杜鹃"
    },
    "31.204558, 121.423508": {
        "imgUrl": "17",
        "name": "南天竹"
    },
    "31.204563, 121.423500": {
        "imgUrl": "18",
        "name": "南天竹"
    },
    "31.204480, 121.423583": {
        "imgUrl": "19",
        "name": "皋月杜鹃"
    },
    "31.204367, 121.424705": {
        "imgUrl": "20",
        "name": "续随子"
    },
    "31.204183, 121.424508": {
        "imgUrl": "21",
        "name": "绿叶甘蓝"
    },
    "31.203833, 121.425072": {
        "imgUrl": "22",
        "name": "栀子"
    },
    "31.203630, 121.424995": {
        "imgUrl": "23",
        "name": "水杉"
    },
    "31.203945, 121.424600": {
        "imgUrl": "24",
        "name": "美国扁柏"
    },
    "31.203817, 121.424370": {
        "imgUrl": "25",
        "name": "枇杷"
    },
    "31.203820, 121.424362": {
        "imgUrl": "26",
        "name": "棕榈"
    },
    "31.203803, 121.424362": {
        "imgUrl": "27",
        "name": "万年青"
    },
    "31.203642, 121.424355": {
        "imgUrl": "28",
        "name": "石楠"
    },
    "31.203583, 121.424287": {
        "imgUrl": "29",
        "name": "山茶"
    },
    "31.203580, 121.424270": {
        "imgUrl": "30",
        "name": "石楠"
    },
    "31.203663, 121.424308": {
        "imgUrl": "31",
        "name": "蛇莓"
    },
    "31.203570, 121.423788": {
        "imgUrl": "32",
        "name": "圆叶过路黄"
    },
    "31.203872, 121.423470": {
        "imgUrl": "33",
        "name": "栀子"
    },
    "31.204005, 121.421875": {
        "imgUrl": "34",
        "name": "南天竹"
    },
    "31.204097, 121.421670": {
        "imgUrl": "35",
        "name": "山茶"
    },
    "31.204242, 121.421372": {
        "imgUrl": "36",
        "name": "荷花玉兰"
    },
    "31.204230, 121.421363": {
        "imgUrl": "37",
        "name": "珊瑚树"
    },
    "31.204225, 121.421372": {
        "imgUrl": "38",
        "name": "锦熟黄杨"
    },
    "31.204267, 121.421378": {
        "imgUrl": "39",
        "name": "矢竹"
    },
    "31.205063, 121.421158": {
        "imgUrl": "40",
        "name": "蒲苇"
    },
    "31.205033, 121.421188": {
        "imgUrl": "41",
        "name": "松红梅"
    },
    "31.204883, 121.421028": {
        "imgUrl": "42",
        "name": "朱砂根"
    },
    "31.205022, 121.420822": {
        "imgUrl": "43",
        "name": "蔓柳穿鱼"
    },
    "31.204983, 121.420897": {
        "imgUrl": "44",
        "name": "花叶滇苦菜"
    },
    "31.204992, 121.420897": {
        "imgUrl": "45",
        "name": "澳洲迷迭香"
    },
    "31.205020, 121.420928": {
        "imgUrl": "46",
        "name": "月季花"
    },
    "31.205342, 121.421075": {
        "imgUrl": "47",
        "name": "罗汉松"
    },
    "31.205003, 121.420892": {
        "imgUrl": "48",
        "name": "美洲矾根"
    },
    "31.205008, 121.420905": {
        "imgUrl": "49",
        "name": "山茶"
    },
    "31.205288, 121.420333": {
        "imgUrl": "50",
        "name": "石楠"
    }
}

var tmpPlotName = ''

function drawPlotChart(name) {
    var dom = document.getElementById('scatter-plot-chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    // 清除之前的图表内容
    if (myChart != null && myChart !== undefined) {
        myChart.clear();
    }

    var option;

    tmpPlotName = name

    option = {
        animation: false, // 关闭动画
        grid: {
            left: '3%',
            right: '7%',
            bottom: '7%',
            containLabel: true
        },
        tooltip: {
            showDelay: 0,
            formatter: function (params) {
                return (
                    '<div>' +
                    '<div style="font-size:15px;font-weight:bold">' + getName(params) + '</div>' +
                    '<p>经度(longitude):' + params.value[0] + '°</p>' +
                    '<p>纬度(latitude):' + params.value[1] + '°</p>' +
                    '<div><img src="' + getImg(params) + '" style="width: 100px; height: auto;"></div>' +
                    '</div>'
                );
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        toolbox: {
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                }
            }
        },
        brush: {},
        legend: {
            data: getLegendData(name),
            left: 'center',
            top: 10
        },
        xAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value}°'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value}°'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: getSeriesData(name)

    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

function getLegendData(name) {
    if (name === 'Family') {
        return ['裸子植物', '被子植物']
    } else if (name === 'Shape') {
        return ['椭圆形', '卵形', '披针形', '条形', '针形', '心形', '圆形', '指状', '鳞片状']
    } else if (name === 'Arrangement') {
        return ['簇生', '对生', '互生', '轮生']
    } else if (name === 'Soil') {
        return ['壤土', '砂土', '黏土']
    }
}

function getSeriesData(name) {
    if (name === 'Family') {
        return [
            {
                name: '被子植物',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#F98862'
                },
                data: [[31.205113, 121.421813], [31.205092, 121.421525], [31.205112, 121.421813], [31.205008, 121.42208], [31.205022, 121.422097], [31.205037, 121.422103], [31.205045, 121.422103], [31.205008, 121.422158], [31.205067, 121.422163], [31.205012, 121.42222], [31.204783, 121.422792], [31.204705, 121.42315], [31.204462, 121.423455], [31.204463, 121.423455], [31.204597, 121.423378], [31.204558, 121.423508], [31.204563, 121.4235], [31.20448, 121.423583], [31.204367, 121.424705], [31.204183, 121.424508], [31.203833, 121.425072], [31.203817, 121.42437], [31.203803, 121.424362], [31.203642, 121.424355], [31.203583, 121.424287], [31.20358, 121.42427], [31.203663, 121.424308], [31.20357, 121.423788], [31.203872, 121.42347], [31.204005, 121.421875], [31.204097, 121.42167], [31.204242, 121.421372], [31.20423, 121.421363], [31.204225, 121.421372], [31.205063, 121.421158], [31.205033, 121.421188], [31.204883, 121.421028], [31.205022, 121.420822], [31.204983, 121.420897], [31.204992, 121.420897], [31.20502, 121.420928], [31.205008, 121.420905], [31.205288, 121.420333]],
            },
            {
                name: '裸子植物',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#FFDB5C'
                },
                data: [[31.204862, 121.422522], [31.20363, 121.424995], [31.203945, 121.4246], [31.20382, 121.424362], [31.204267, 121.421378], [31.205342, 121.421075], [31.205003, 121.420892]]
            }
        ]
    } else if (name === 'Shape') {
        return [
            {
                name: '椭圆形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#D5E157'
                },
                data: [[31.205113, 121.421813], [31.205112, 121.421813], [31.205067, 121.422163], [31.205012, 121.42222], [31.204783, 121.422792], [31.204705, 121.42315], [31.203833, 121.425072], [31.203583, 121.424287], [31.203663, 121.424308], [31.203872, 121.42347], [31.204097, 121.42167], [31.204242, 121.421372], [31.20423, 121.421363], [31.204983, 121.420897], [31.20502, 121.420928], [31.205008, 121.420905]]
                ,
            },
            {
                name: '卵形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#A7D443'
                },
                data: [[31.205022, 121.422097], [31.205037, 121.422103], [31.205045, 121.422103], [31.204463, 121.423455], [31.204597, 121.423378], [31.20448, 121.423583], [31.203642, 121.424355], [31.20358, 121.42427], [31.204225, 121.421372], [31.205288, 121.420333]],
            },
            {
                name: '披针形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#8C9433'
                },
                data: [[31.205008, 121.422158], [31.204558, 121.423508], [31.204563, 121.4235], [31.203817, 121.42437], [31.203803, 121.424362], [31.204005, 121.421875], [31.204883, 121.421028]]
            },
            {
                name: '条形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#867C4A'
                },
                data: [[31.205092, 121.421525], [31.205008, 121.42208], [31.204462, 121.423455], [31.204267, 121.421378], [31.205063, 121.421158]],
            },
            {
                name: '针形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#2C6851'
                },
                data: [[31.204862, 121.422522], [31.204367, 121.424705], [31.20363, 121.424995], [31.204992, 121.420897], [31.205342, 121.421075]],
            },
            {
                name: '心形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#49703D'
                },
                data: [[31.205022, 121.420822], [31.205003, 121.420892]],
            },
            {
                name: '圆形',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#617150'
                },

                data: [[31.204183, 121.424508], [31.20357, 121.423788]],
            },
            {
                name: '指状',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#2A4D2E'
                },
                data: [[31.20382, 121.424362], [31.205033, 121.421188]],
            },
            {
                name: '鳞片状',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#94D7C5'
                },
                data: [[31.203945, 121.4246]],
            },
        ]
    } else if (name === 'Arrangement') {
        return [
            {
                name: '簇生',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#E5E2A8'
                },

                data: [[31.205022, 121.422097], [31.205045, 121.422103], [31.204462, 121.423455], [31.204463, 121.423455], [31.204367, 121.424705], [31.204183, 121.424508], [31.203945, 121.4246], [31.20382, 121.424362], [31.203803, 121.424362]],
            },
            {
                name: '对生',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#E4DB4C'
                },
                data: [[31.205113, 121.421813], [31.205112, 121.421813], [31.205067, 121.422163], [31.205012, 121.42222], [31.204862, 121.422522], [31.204783, 121.422792], [31.204705, 121.42315], [31.204558, 121.423508], [31.204563, 121.4235], [31.203833, 121.425072], [31.20363, 121.424995], [31.203817, 121.42437], [31.203642, 121.424355], [31.203583, 121.424287], [31.20358, 121.42427], [31.20357, 121.423788], [31.203872, 121.42347], [31.204097, 121.42167], [31.204242, 121.421372], [31.20423, 121.421363], [31.204225, 121.421372], [31.205063, 121.421158], [31.205033, 121.421188], [31.204883, 121.421028], [31.205022, 121.420822], [31.204983, 121.420897], [31.204992, 121.420897], [31.205342, 121.421075], [31.205008, 121.420905], [31.205288, 121.420333]]
                ,
            },
            {
                name: '互生',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#989770'
                },

                data: [[31.205008, 121.42208], [31.205037, 121.422103], [31.205008, 121.422158], [31.203663, 121.424308], [31.204005, 121.421875], [31.204267, 121.421378], [31.20502, 121.420928], [31.205003, 121.420892]]
                ,
            },
            {
                name: '轮生',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#4C4816'
                },
                data: [[31.205092, 121.421525], [31.204597, 121.423378], [31.20448, 121.423583]],
            }
        ]
    } else if (name === 'Soil') {
        return [
            {
                name: '壤土',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#433C34'
                },
                data:
                    [
                        [
                            31.205112,
                            121.421813
                        ],
                        [
                            31.205008,
                            121.42208
                        ],
                        [
                            31.205022,
                            121.422097
                        ],
                        [
                            31.205045,
                            121.422103
                        ],
                        [
                            31.205067,
                            121.422163
                        ],
                        [
                            31.204783,
                            121.422792
                        ],
                        [
                            31.204705,
                            121.42315
                        ],
                        [
                            31.204462,
                            121.423455
                        ],
                        [
                            31.204563,
                            121.4235
                        ],
                        [
                            31.20448,
                            121.423583
                        ],
                        [
                            31.203833,
                            121.425072
                        ],
                        [
                            31.20363,
                            121.424995
                        ],
                        [
                            31.20382,
                            121.424362
                        ],
                        [
                            31.203803,
                            121.424362
                        ],
                        [
                            31.203642,
                            121.424355
                        ],
                        [
                            31.203583,
                            121.424287
                        ],
                        [
                            31.20358,
                            121.42427
                        ],
                        [
                            31.203663,
                            121.424308
                        ],
                        [
                            31.203872,
                            121.42347
                        ],
                        [
                            31.204005,
                            121.421875
                        ],
                        [
                            31.204097,
                            121.42167
                        ],
                        [
                            31.205063,
                            121.421158
                        ],
                        [
                            31.205033,
                            121.421188
                        ],
                        [
                            31.204883,
                            121.421028
                        ],
                        [
                            31.205022,
                            121.420822
                        ],
                        [
                            31.204983,
                            121.420897
                        ],
                        [
                            31.20502,
                            121.420928
                        ],
                        [
                            31.205003,
                            121.420892
                        ],
                        [
                            31.205008,
                            121.420905
                        ],
                        [
                            31.205288,
                            121.420333
                        ]
                    ],
            },
            {
                name: '黏土',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#A98267  '
                },
                data: [
                    [
                        31.205092,
                        121.421525
                    ],
                    [
                        31.205112,
                        121.421813
                    ],
                    [
                        31.205037,
                        121.422103
                    ],
                    [
                        31.205008,
                        121.422158
                    ],
                    [
                        31.205012,
                        121.42222
                    ],
                    [
                        31.204862,
                        121.422522
                    ],
                    [
                        31.204462,
                        121.423455
                    ],
                    [
                        31.204597,
                        121.423378
                    ],
                    [
                        31.204558,
                        121.423508
                    ],
                    [
                        31.204367,
                        121.424705
                    ],
                    [
                        31.204183,
                        121.424508
                    ],
                    [
                        31.203945,
                        121.4246
                    ],
                    [
                        31.20357,
                        121.423788
                    ],
                    [
                        31.204225,
                        121.421372
                    ],
                    [
                        31.204267,
                        121.421378
                    ],
                    [
                        31.204992,
                        121.420897
                    ],
                    [
                        31.205342,
                        121.421075
                    ]
                ]
            },
            {
                name: '砂土',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: '#C4AFA2'
                },
                data: [
                    [
                        31.203817,
                        121.42437
                    ],
                    [
                        31.204242,
                        121.421372
                    ],
                    [
                        31.20423,
                        121.421363
                    ]
                ]
            }
        ]
    }
}

function getName(params) {
    key = `${params.value[0]}, ${params.value[1]}`
    return plantImgUrl[key].name
}
function getImg(params) {
    key = `${params.value[0]}, ${params.value[1]}`
    if (tmpPlotName !== 'Soil')
        return `../img/plants/${plantImgUrl[key].imgUrl}.jpg`;
    else
        return `../img/plants/${plantImgUrl[key].imgUrl}.jpg`;
}

drawPlotChart('Family')
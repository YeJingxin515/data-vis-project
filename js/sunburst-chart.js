function drawSpeciesChart() {
    var dom = document.getElementById('plant-species-chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;

    var data = [
        {
            name: '裸子植物',
            children: [
                {
                    name: '松科',
                    children: [
                        {
                            name: '雪松',
                            value: 1
                        }
                    ]
                }, {
                    name: '杉科',
                    children: [
                        {
                            name: '水杉',
                            value: 1
                        }
                    ]
                }, {
                    name: '柏科',
                    children: [
                        {
                            name: '美国扁柏',
                            value: 1
                        }
                    ]
                }, {
                    name: '棕榈科',
                    children: [
                        {
                            name: '棕榈',
                            value: 1
                        }
                    ]
                }, {
                    name: '禾本科',
                    children: [
                        {
                            name: '矢竹',
                            value: 2
                        }
                    ]
                }, {
                    name: '罗汉松科',
                    children: [
                        {
                            name: '罗汉松',
                            value: 1
                        }
                    ]
                }, {
                    name: '罗汉松科',
                    children: [
                        {
                            name: '美洲矾根',
                            value: 1
                        }
                    ]
                },

            ]
        },
        {
            name: '被子植物',
            children: [
                {
                    name: '百合科',
                    children: [
                        {
                            name: '万年青',
                            value: 1
                        }
                    ]
                },
                {
                    name: '报春花科',
                    children: [
                        {
                            name: '报春花',
                            value: 3
                        },
                        {
                            name: '圆叶过路黄',
                            value: 1
                        }
                    ]
                },
                {
                    name: '唇形科',
                    children: [
                        {
                            name: '澳洲迷迭香',
                            value: 1
                        }
                    ]
                },
                {
                    name: '大戟科',
                    children: [
                        {
                            name: '续随子',
                            value: 1
                        }
                    ]
                },
                {
                    name: '冬青科',
                    children: [
                        {
                            name: '枸骨',
                            value: 1
                        },
                        {
                            name: '美国冬青',
                            value: 1
                        }
                    ]
                },
                {
                    name: '杜鹃花科',
                    children: [
                        {
                            name: '白花杜鹃',
                            value: 1
                        },
                        {
                            name: '皋月杜鹃',
                            value: 1
                        },
                    ]
                },
                {
                    name: '禾本科',
                    children: [
                        {
                            name: '早熟禾',
                            value: 1
                        },
                        {
                            name: '蒲苇',
                            value: 1
                        }
                    ]
                },
                {
                    name: '黄杨科',
                    children: [
                        {
                            name: '小叶黄杨',
                            value: 1
                        },
                        {
                            name: '锦熟黄杨',
                            value: 1
                        }
                    ]
                },
                {
                    name: '堇菜科',
                    children: [
                        {
                            name: '三色堇',
                            value: 1
                        }
                    ]
                },
                {
                    name: '菊科',
                    children: [
                        {
                            name: '花叶滇苦菜',
                            value: 1
                        }
                    ]
                },
                {
                    name: '木兰科',
                    children: [
                        {
                            name: '荷花玉兰',
                            value: 2
                        }
                    ]
                },
                {
                    name: '茜草科',
                    children: [
                        {
                            name: '栀子',
                            value: 2
                        }
                    ]
                },
                {
                    name: '蔷薇科',
                    children: [
                        {
                            name: '枇杷',
                            value: 1
                        },
                        {
                            name: '蛇莓',
                            value: 1
                        },
                        {
                            name: '月季花',
                            value: 1
                        },
                        {
                            name: '石楠',
                            value: 3
                        }
                    ]
                },
                {
                    name: '忍冬科',
                    children: [
                        {
                            name: '珊瑚树',
                            value: 1
                        }
                    ]
                }, {
                    name: '莎草科',
                    children: [
                        {
                            name: '香附子',
                            value: 1
                        }
                    ]
                }, {
                    name: '山茶科',
                    children: [
                        {
                            name: '山茶',
                            value: 5
                        }
                    ]
                }, {
                    name: '十字花科',
                    children: [
                        {
                            name: '绿叶甘蓝',
                            value: 1
                        }
                    ]
                },
                {
                    name: '桃金娘科',
                    children: [
                        {
                            name: '松红梅',
                            value: 1
                        }
                    ]
                },
                {
                    name: '天南星科',
                    children: [
                        {
                            name: '菖蒲',
                            value: 1
                        }
                    ]
                },
                {
                    name: '小檗科',
                    children: [
                        {
                            name: '天南竹',
                            value: 3
                        },
                        {
                            name: '南天竹',
                            value: 1
                        }
                    ]
                },
                {
                    name: '玄参科',
                    children: [
                        {
                            name: '蔓柳穿鱼',
                            value: 1
                        }
                    ]
                },
                {
                    name: '紫金牛科',
                    children: [
                        {
                            name: '朱砂根',
                            value: 1
                        }
                    ]
                }
            ]
        },

    ];
    option = {
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 10,
            inRange: {
                color: ['#AEC48F', '#FFDB5C', '#F98862']
            }
        },
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '90%'],
            label: {
                rotate: 'radial',
            },
            itemStyle: {
                borderRadius: 5,
                borderWidth: 2
              },
        }
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
drawSpeciesChart()
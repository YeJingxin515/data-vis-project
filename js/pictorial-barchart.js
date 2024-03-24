//画树叶形状的图
function drawShapeChart() {
    var dom = document.getElementById('leaf-shape-chart');
    
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        xAxis: {
            data: ['椭圆形', '卵形', '披针形', '条形', '针形', '心形', '圆形', '指状','鳞片状'],
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                color: '#88C057'
            }
        },
        yAxis: {
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false }
        },
        color: ['#88C057'],
        series: [
            {
                name: 'hill',
                type: 'pictorialBar',
                barCategoryGap: '-130%',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5,
                    color: "#88C057"
                },
                emphasis: {
                    itemStyle: {
                        opacity: 1
                    }
                },
                data: [10, 6, 5, 5, 4, 2, 2, 2, 1],
                z: 10
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-100%',
                symbolPosition: 'end',
                symbolSize: 30,
                symbolOffset: [0, '-120%'],
                data: [
                    {
                        value: 10,
                        symbol: 'image://img/tuoyuanxing.svg',
                    },
                    {
                        value: 6,
                        symbol: 'image://img/luanxing.svg',
                    },
                    {
                        value: 5,
                        symbol: 'image://img/pizhenxing.svg',
                    },
                    {
                        value: 5,
                        symbol: 'image://img/tiaoxing.svg',
                    },
                    {
                        value: 5,
                        symbol: 'image://img/zhenxing.svg',
                    },
                    {
                        value: 2,
                        symbol: 'image://img/xinxing.svg',
                    },
                    {
                        value: 2,
                        symbol: 'image://img/yuanxing.svg',
                    },
                    {
                        value: 2,
                        symbol: 'image://img/zhixing.svg',
                    },
                    {
                        value: 1,
                        symbol: 'image://img/linpianzhuang.svg',
                    },
                ]
            }
        ]
    };

    option && myChart.setOption(option);


    option && myChart.setOption(option);

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

//画叶序的图
function drawOrderChart() {
    var dom = document.getElementById('leaf-order-chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    var option;
    const labelSetting = {
        show: true,
        position: 'right',
        offset: [10, 0],
        fontSize: 16
    };
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            left: 20
        },
        yAxis: {
            data: ['簇生', '对生', '互生', '轮生'],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                margin: 30,
                fontSize: 14
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 20
                }
            }
        },
        xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false }
        },
        series: [
            {
                type: 'pictorialBar',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: 30,
                data: [
                    {
                        value: 7,
                        symbol: 'image://img/cushengleaf.svg',
                        symbolRepeat: 7,
                        symbolBoundingData: 7,
                        itemStyle: {
                            color: '#3B9548'
                        },

                    },
                    {
                        value: 20,
                        symbol: 'image://img/duishengleaf.svg',
                        symbolRepeat: 20,
                        symbolBoundingData: 20,
                        itemStyle: {
                            color: '#44911B'
                        }
                    },
                    {
                        value: 8,
                        symbol: 'image://img/hushengleaf.svg',
                        symbolRepeat: 8,
                        symbolBoundingData: 8,

                        itemStyle: {
                            color: '#88C057'
                        }
                    },
                    {
                        value: 3,
                        symbol: 'image://img/lunshengleaf.svg',
                        symbolRepeat: 3,
                        symbolBoundingData: 3,
                        itemStyle: {
                            color: '#3B9548'
                        }
                    },

                ]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawShapeChart()
drawOrderChart()
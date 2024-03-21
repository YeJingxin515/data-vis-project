function drawPlotChart() {
    var dom = document.getElementById('scatter-plot-chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;

    option = {

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
                    '经度(longitude):' +
                    params.value[0] +
                    '°<br/>' +
                    '纬度(latitude):' +
                    params.value[1] +
                    '°'

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
            data: ['裸子植物', '被子植物'],
            left: 'center',
            bottom: 10
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
        series: [
            {
                name: '被子植物',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
                    color:'#F98862'
                },
            
                data: [[31.205112, 121.421813], [31.205092, 121.421525], [31.205112, 121.421813], [31.205008, 121.42208], [31.205022, 121.422097], [31.205037, 121.422103], [31.205045, 121.422103], [31.205008, 121.422158], [31.205067, 121.422163], [31.205012, 121.42222], [31.204783, 121.422792], [31.204705, 121.42315], [31.204462, 121.423455], [31.204462, 121.423455], [31.204597, 121.423378], [31.204558, 121.423508], [31.204563, 121.4235], [31.20448, 121.423583], [31.204367, 121.424705], [31.204183, 121.424508], [31.203833, 121.425072], [31.203817, 121.42437], [31.203803, 121.424362], [31.203642, 121.424355], [31.203583, 121.424287], [31.20358, 121.42427], [31.203663, 121.424308], [31.20357, 121.423788], [31.203872, 121.42347], [31.204005, 121.421875], [31.204097, 121.42167], [31.204242, 121.421372], [31.20423, 121.421363], [31.204225, 121.421372], [31.205063, 121.421158], [31.205033, 121.421188], [31.204883, 121.421028], [31.205022, 121.420822], [31.204983, 121.420897], [31.204992, 121.420897], [31.20502, 121.420928], [31.205008, 121.420905], [31.205288, 121.420333]],
            },
            {
                name: '裸子植物',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
                    color:'#FFDB5C'
                },
            
                data: [[31.204862, 121.422522], [31.20363, 121.424995], [31.203945, 121.4246], [31.20382, 121.424362], [31.204267, 121.421378], [31.205342, 121.421075], [31.205003, 121.420892], [31.206055, 121.418838]]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawPlotChart()
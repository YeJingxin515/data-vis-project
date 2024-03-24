function drawSoilContentChart() {
    var dom = document.getElementById('soil-content-chart');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                console.log(params.values)
                return params.name + ' : ' + (params.value / 0.5) + '%';
            }
        },
        legend: {
            data: ['泥土', '石子', '枯叶', '新鲜叶片', '枯枝', '动物尸体', '垃圾', '粪便', '草根']
        },
        series: [
            {
                name: 'Funnel',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 50,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {
                        "name": "泥土",
                        "value": 50,
                        itemStyle: { color: '#85654B' },
                    },
                    {
                        "name": "石子",
                        "value": 24,
                        itemStyle: { color: '#9F9789' },

                    },
                    {
                        "name": "枯叶",
                        "value": 41,
                        itemStyle: { color: '#CBB143' },

                    },
                    {
                        "name": "新鲜叶片",
                        "value": 23,
                        itemStyle: { color: '#7B8E65' },

                    },
                    {
                        "name": "粪便",
                        "value": 8,
                        itemStyle: { color: '#AA7B5C' },

                    },
                    {
                        "name": "枯枝",
                        "value": 24,
                        itemStyle: { color: '#BC9851' },

                    },
                    {
                        "name": "垃圾",
                        "value": 19,
                        itemStyle: { color: '#766E5D' },

                    },
                    {
                        "name": "草根",
                        "value": 30,
                        itemStyle: { color: '#C8AF81' },

                    },
                    {
                        "name": "动物尸体",
                        "value": 10,
                        itemStyle: { color: '#895150' },

                    }
                ]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawSoilContentChart()
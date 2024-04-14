function drawSankeyChart1() {
    var dom = document.getElementById('sankey-chart1');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;

    option = {
        series: {
            type: 'sankey',
            layout: 'none',
            draggable: false,
            nodeGap: 0,
            emphasis: {
                focus: 'adjacency'
            },
            lineStyle: {
                color: 'gradient'
            },
            label: {
                fontSize: 10
            },
            layoutIterations: 0,
            // orient: 'vertical',
            data:[
                {
                    "name": "椭圆形",
                    "itemStyle": {
                        "color": "#D5E157"
                    }
                },
                {
                    "name": "卵形",
                    "itemStyle": {
                        "color": "#A7D443"
                    }
                },
                {
                    "name": "披针形",
                    "itemStyle": {
                        "color": "#8C9433"
                    }
                },
                {
                    "name": "条形",
                    "itemStyle": {
                        "color": "#867C4A"
                    }
                },
                {
                    "name": "针形",
                    "itemStyle": {
                        "color": "#2C6851"
                    }
                },
                {
                    "name": "心形",
                    "itemStyle": {
                        "color": "#49703D"
                    }
                },
                {
                    "name": "圆形",
                    "itemStyle": {
                        "color": "#617150"
                    }
                },
                {
                    "name": "指状",
                    "itemStyle": {
                        "color": "#2A4D2E"
                    }
                },
                {
                    "name": "鳞片状",
                    "itemStyle": {
                        "color": "#94D7C5"
                    }
                },
                {
                    "name": "砂土",
                    "itemStyle": {
                        "color": "#C4AFA2"
                    }
                },
                {
                    "name": "黏土",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "壤土",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                }
            ],
            links: [
                {
                    "source": "黏土",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "圆形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "鳞片状",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "圆形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "指状",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "指状",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "心形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "心形",
                    "value": 1
                },
                {
                    "source": "砂土",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "砂土",
                    "target": "椭圆形",
                    "value": 1
                }
            ]
        }
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
function drawSankeyChart2() {
    var dom = document.getElementById('sankey-chart2');
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: false
    });

    var option;

    option = {
        series: {
            type: 'sankey',
            layout: 'none',
            draggable: false,
            nodeGap: 0,
            emphasis: {
                focus: 'adjacency'
            },
            lineStyle: {
                color: 'gradient'
            },
            label: {
                fontSize: 10
            },
            layoutIterations: 0,
            // orient: 'vertical',
            data:[
                {
                    "name": "砂土",
                    "itemStyle": {
                        "color": "#C4AFA2"
                    }
                },
                {
                    "name": "黏土",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "壤土",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "簇生",
                    "itemStyle": {
                        "color": "#E5E2A8"
                    }
                },
                {
                    "name": "对生",
                    "itemStyle": {
                        "color": "#E4DB4C"
                    }
                },
                {
                    "name": "互生",
                    "itemStyle": {
                        "color": "#989770"
                    }
                },
                {
                    "name": "轮生",
                    "itemStyle": {
                        "color": "#4C4816"
                    }
                }
            ],
            links: [
                {
                    "source": "黏土",
                    "target": "轮生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "轮生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "黏土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "轮生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "簇生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "壤土",
                    "target": "互生",
                    "value": 1
                },
                {
                    "source": "砂土",
                    "target": "对生",
                    "value": 1
                },
                {
                    "source": "砂土",
                    "target": "对生",
                    "value": 1
                }
            ]
        }
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}

drawSankeyChart1();
drawSankeyChart2();
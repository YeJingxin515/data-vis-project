function drawSankeyChart() {
    var dom = document.getElementById('sankey-chart');
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
                    "name": "香附子",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "山茶",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "三色堇",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "南天竹",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "雪松",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "菖蒲",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "白花杜鹃",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "续随子",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "绿叶甘蓝",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "美国扁柏",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "圆叶过路黄",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "锦熟黄杨",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "矢竹",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "澳洲迷迭香",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "罗汉松",
                    "itemStyle": {
                        "color": "#A98267"
                    }
                },
                {
                    "name": "小叶黄杨",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "早熟禾",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "报春花",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "枸骨",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "美国冬青",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "荷花玉兰",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "皋月杜鹃",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "栀子",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "水杉",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "棕榈",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "万年青",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "石楠",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "蛇莓",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "蒲苇",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "松红梅",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "朱砂根",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "蔓柳穿鱼",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "花叶滇苦菜",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "月季花",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "美洲矾根",
                    "itemStyle": {
                        "color": "#433C34"
                    }
                },
                {
                    "name": "枇杷",
                    "itemStyle": {
                        "color": "#C4AFA2"
                    }
                },
                {
                    "name": "珊瑚树",
                    "itemStyle": {
                        "color": "#C4AFA2"
                    }
                },
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
                    "source": "轮生",
                    "target": "香附子",
                    "value": 1
                },
                {
                    "source": "香附子",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "山茶",
                    "value": 1
                },
                {
                    "source": "山茶",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "三色堇",
                    "value": 1
                },
                {
                    "source": "三色堇",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "南天竹",
                    "value": 1
                },
                {
                    "source": "南天竹",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "雪松",
                    "value": 1
                },
                {
                    "source": "雪松",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "菖蒲",
                    "value": 1
                },
                {
                    "source": "菖蒲",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "轮生",
                    "target": "白花杜鹃",
                    "value": 1
                },
                {
                    "source": "白花杜鹃",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "续随子",
                    "value": 1
                },
                {
                    "source": "续随子",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "绿叶甘蓝",
                    "value": 1
                },
                {
                    "source": "绿叶甘蓝",
                    "target": "圆形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "美国扁柏",
                    "value": 1
                },
                {
                    "source": "美国扁柏",
                    "target": "鳞片状",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "圆叶过路黄",
                    "value": 1
                },
                {
                    "source": "圆叶过路黄",
                    "target": "圆形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "锦熟黄杨",
                    "value": 1
                },
                {
                    "source": "锦熟黄杨",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "矢竹",
                    "value": 1
                },
                {
                    "source": "矢竹",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "澳洲迷迭香",
                    "value": 1
                },
                {
                    "source": "澳洲迷迭香",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "罗汉松",
                    "value": 1
                },
                {
                    "source": "罗汉松",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "小叶黄杨",
                    "value": 1
                },
                {
                    "source": "小叶黄杨",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "早熟禾",
                    "value": 1
                },
                {
                    "source": "早熟禾",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "报春花",
                    "value": 1
                },
                {
                    "source": "报春花",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "枸骨",
                    "value": 1
                },
                {
                    "source": "枸骨",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "美国冬青",
                    "value": 1
                },
                {
                    "source": "美国冬青",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "荷花玉兰",
                    "value": 1
                },
                {
                    "source": "荷花玉兰",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "轮生",
                    "target": "皋月杜鹃",
                    "value": 1
                },
                {
                    "source": "皋月杜鹃",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "栀子",
                    "value": 1
                },
                {
                    "source": "栀子",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "水杉",
                    "value": 1
                },
                {
                    "source": "水杉",
                    "target": "针形",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "棕榈",
                    "value": 1
                },
                {
                    "source": "棕榈",
                    "target": "指状",
                    "value": 1
                },
                {
                    "source": "簇生",
                    "target": "万年青",
                    "value": 1
                },
                {
                    "source": "万年青",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "石楠",
                    "value": 1
                },
                {
                    "source": "石楠",
                    "target": "卵形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "蛇莓",
                    "value": 1
                },
                {
                    "source": "蛇莓",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "蒲苇",
                    "value": 1
                },
                {
                    "source": "蒲苇",
                    "target": "条形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "松红梅",
                    "value": 1
                },
                {
                    "source": "松红梅",
                    "target": "指状",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "朱砂根",
                    "value": 1
                },
                {
                    "source": "朱砂根",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "蔓柳穿鱼",
                    "value": 1
                },
                {
                    "source": "蔓柳穿鱼",
                    "target": "心形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "花叶滇苦菜",
                    "value": 1
                },
                {
                    "source": "花叶滇苦菜",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "月季花",
                    "value": 1
                },
                {
                    "source": "月季花",
                    "target": "椭圆形",
                    "value": 1
                },
                {
                    "source": "互生",
                    "target": "美洲矾根",
                    "value": 1
                },
                {
                    "source": "美洲矾根",
                    "target": "心形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "枇杷",
                    "value": 1
                },
                {
                    "source": "枇杷",
                    "target": "披针形",
                    "value": 1
                },
                {
                    "source": "对生",
                    "target": "珊瑚树",
                    "value": 1
                },
                {
                    "source": "珊瑚树",
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

drawSankeyChart();
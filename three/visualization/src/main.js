import barchart from './barchart'
import radarmap from './radarmap'

barchart.sketch({
    title: '条形图标题',
    subTitle: '条形图副标题',
    keys: [
        'Line',
        'Bar',
        'Scatter',
        'K',
        'Pie',
        'Radar',
        'Chord',
        'Force',
        'Map',
        'Gauge',
        'Funnel'
    ],
    values: [15, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7]
});

radarmap.sketch({
    title: '雷达图标题',
    subTitle: '雷达图副标题',
    indicator: [
        {text: '进攻', max: 100},
        {text: '防守', max: 100},
        {text: '体能', max: 100},
        {text: '速度', max: 100},
        {text: '力量', max: 100},
        {text: '技巧', max: 100}
    ],
    data: [
        {
            value: [97, 42, 88, 94, 90, 86],
            name: '舍普琴科'
        },
        {
            value: [97, 32, 74, 95, 88, 92],
            name: '罗纳尔多'
        }
    ]
});

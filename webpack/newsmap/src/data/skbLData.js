export default {
    title: '舆论导向分布',
    xAxis: ['Line', 'Bar', 'Scatter', 'K', 'Map'],
    data: {
        bar: [
            {
                name: '1',
                itemStyle: {
                    normal: {
                        color: 'rgba(193, 35, 43, 1)'
                    }
                },
                value: [-400, -155, -190, -350, -220]
            },
            {
                name: '2',
                itemStyle: {
                    normal: {
                        color: 'rgba(181, 195, 52, 1)'
                    }
                },
                value: [-180, -270, -195, -190, -156]
            },
            {
                name: '3',
                itemStyle: {
                    normal: {
                        color: 'rgba(252, 206, 16, 1)'
                    }
                },
                value: [906, 911, 908, 778, 0]
            },
            {
                name: '4',
                itemStyle: {
                    normal: {
                        color: 'rgba(193, 35, 43, 0.5)'
                    }
                },
                value: [1800, 900, 450, 523, 690]
            },
            {
                name: '5',
                itemStyle: {
                    normal: {
                        color: 'rgba(181, 195, 52, 0.5)'
                    }
                },
                value: [491, 2035, 389, 955, 347]
            },
            {
                name: '6',
                itemStyle: {
                    normal: {
                        color: 'rgba(252, 206, 16, 0.5)'
                    }
                },
                value: [2000, 1500, 2217, 2000, 0]
            }
        ],
        line: {
            name: '折线图',
            value: [100, 200, 800, 770, 600]
        }
    }
}
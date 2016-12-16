export default {
    legend: ['1', '2', '3', '4', '5', '6'],
    xAxis: ['Line', 'Bar', 'Scatter', 'K', 'Map'],
    series: [
        {
            name: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(193, 35, 43, 1)',
                    label: {
                        show: true
                    }
                }
            },
            data: [-400, -155, -190, -350, -220]
        },
        {
            name: '2',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(181, 195, 52, 1)',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#27727B'
                        }
                    }
                }
            },
            data: [-180, -270, -195, -190, -156]
        },
        {
            name: '3',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(252, 206, 16, 1)',
                    label: {
                        show: true,
                        textStyle: {
                            color: '#E87C25'
                        }
                    }
                }
            },
            data: [906, 911, 908, 778, 0]
        },
        {
            name: '4',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(193, 35, 43, 0.5)',
                    label: {
                        show: true
                    }
                }
            },
            data: [1800, 900, 450, 523, 690]
        },
        {
            name: '5',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(181, 195, 52, 0.5)',
                    label: {
                        show: true
                    }
                }
            },
            data: [491, 2035, 389, 955, 347]
        },
        {
            name: '6',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(252, 206, 16, 0.5)',
                    label: {
                        show: true
                    }
                }
            },
            data: [2000, 1500, 2217, 2000, 0]
        },
        {
            name: '折线图',
            type: 'line',
            data: [100, 200, 800, 770, 600]
        }
    ]
}

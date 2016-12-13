export default {
    legend: ['最高', '最低'],
    xAxis: [
        '2016-01',
        '2016-02',
        '2016-03',
        '2016-04'
    ],
    series: [
        {
            name: '最高',
            type: 'line',
            data: [10, 20, 80, 77]
        },
        {
            name: '最低',
            type: 'bar',
            data: [5, 6, 10, 15]
        }
    ]
}

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
            data: [100, 200, 800, 770]
        },
        {
            name: '最低',
            type: 'bar',
            data: [500, 600, 100, 150]
        }
    ]
}

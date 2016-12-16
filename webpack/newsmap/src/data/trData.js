export default {
    title: '大 V 转发关系',
    data: [
        {
            name: '1_1',
            x: 100,
            y: 100
        },
        {
            name: '1_2',
            x: 100,
            y: 300
        },
        {
            name: '1_3',
            x: 100,
            y: 500
        },
        {
            name: '2_1',
            x: 500,
            y: 100
        },
        {
            name: '2_2',
            x: 500,
            y: 200
        },
        {
            name: '2_3',
            x: 500,
            y: 300
        },
        {
            name: '2_4',
            x: 500,
            y: 400
        },
        {
            name: '2_5',
            x: 500,
            y: 500
        },
        {
            name: '2_6',
            x: 500,
            y: 600
        }
    ],
    links: [
        {
            source: '1_1',
            target: '2_1'
        },
        {
            source: '1_2',
            target: '2_2'
        },
        {
            source: '1_2',
            target: '2_3'
        },
        {
            source: '1_3',
            target: '2_4'
        },
        {
            source: '1_3',
            target: '2_5'
        },
        {
            source: '1_3',
            target: '2_6'
        }
    ]
}
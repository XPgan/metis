const app = getApp();
Component({
    properties: {
        top: {
            type: Number,
            value: 0
        }
    },
    data: {
        curBar: null,
        curCol: {
            col1_area: 0,
            col2_area: 0,
            col1_tag: 0
        },
        selected: {
            area: {
                id: null,
                name: '全部地区'
            },
            tag: {
                id: null,
                name: '全部项目'
            },
            order: {
                id: null,
                name: '智能推荐'
            }
        },
        areas: [],
        tags: [],
        orders: []
    },
    ready () {
        const _this = this;
        app.request({
            url: '/api/cache/data/service_filter/v1',
            method: 'GET',
            successFn: (data) => {
                var data = data.data;
                _this.setData({
                    areas: data.areas,
                    tags: data.tags,
                    orders: data.orders
                });
            }
        });
    },
    methods: {
        tapBar (e) {
            this.setData({
                curBar: e.currentTarget.dataset.idx
            });
        },
        tapWrap (e) {
            if (!e.target.dataset.name) {
                this.setData({
                    curBar: null
                });
            }
        },
        tapItem (e) {
            var dataset = e.target.dataset;
            var idx = dataset.idx;
            var type = dataset.type;
            // 为迁就 this.setData 的 bug 不得不做出的妥协
            switch (type) {
                case 'col1_area':
                    this.setData({
                        'curCol.col1_area': idx,
                        'curCol.col2_area': 0
                    });
                    break;
                case 'col2_area':
                    this.setData({
                        'curCol.col2_area': idx
                    });
                    break;
                case 'col1_tag':
                    this.setData({
                        'curCol.col1_tag': idx
                    });
                    break;
            }
        },
        triggerSelected (e) {
            var dataset = e.target.dataset;
            var id = dataset.id;
            var name = dataset.name;
            var type = dataset.type;
            var selected = this.data.selected;
            name = (name.length > 4) ? `${name.slice(0, 4)}...` : name;
            selected[type] = {
                id: id,
                name: name
            };
            this.setData({
                selected: selected,
                curBar: null
            });
            this.triggerEvent('selected', {
                area: selected.area.id,
                tag: selected.tag.id,
                order: selected.order.id
            });
        }
    }
});

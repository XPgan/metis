import '../libs/d3.v3.min'

var container = document.querySelector('#tree');
var width = container.offsetWidth;
var height = container.offsetHeight;

var tree = d3.layout.tree()
    .size([height, width - 150])
    .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
    });
var diagonal = d3.svg.diagonal()
    .projection(function (d) {
        return [d.y, d.x];
    });
var svg = d3.select('#tree').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(50, 0)');

d3.json('/data/tree.json', function (error, root) {
    var nodes = tree.nodes(root);
    var links = tree.links(nodes);
    var link = svg.selectAll('.link')
        .data(links)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', diagonal);
    var node = svg.selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function (d) {
            return 'translate(' + d.y + ',' + d.x + ')';
        });

    node.append('circle')
        .attr('r', 4.5);
    node.append('text')
        .attr('dx', function (d) {
            return d.children ? -8 : 8;
        })
        .attr('dy', 3)
        .style('text-anchor', function (d) {
            return d.children ? 'end' : 'start';
        })
        .text(function (d) {
            return d.name;
        });
});

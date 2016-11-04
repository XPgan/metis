import sketch from './src/sketch'

// 在此添加样点
var items = [
    {r: 1, x: 0, y: 0, z: 0, color: 0x4B0082},
    {r: 3, x: 5, y: 5, z: 5, color: 0x0000FF}
];

sketch.do();
sketch.setItems(items);

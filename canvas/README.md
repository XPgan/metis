# Canvas #

### #路径 ###
+ __path__
    + `context.beginPath(); // 若未开启新路径 路径首尾相接`
    + `context.closePath();`
+ __arc__
    + `context.arc(x, y, r, sAngle, eAngle, clockwise);`
+ __rect__
    + `context.rect(x, y, w, h);`
+ __line__
    + `context.moveTo(x, y);`
    + `context.lineTo(x, y);`
+ __bezierCurve__
    + `context.quadraticCurveTo(cX, cY, endX, endY);`
    + `context.bezierCurveTo(cX1, cY1, cX2, cY2, endX, endY);`

*****

### #画布 ###
+ __clip__

    ```javascript
    // 存储画布未被裁切时状态
    context.save();
    
    // 按裁切路径将画布进行裁切
    context.rect(95, 95, 105, 105);
    context.clip();
    
    // 绘制被裁切对象 (被裁切)
    context.beginPath();
    context.arc(200, 200, 100, 0, 2 * Math.PI);
    context.stroke();
    
    // 恢复画布未被裁切时状态
    context.restore();
    
    // 绘制新对象 (不被裁切)
    context.beginPath();
    context.arc(250, 250, 100, 0, 2 * Math.PI);
    context.stroke();
    ```
+ __transform__
    + `context.rotate(angle);`
    + `context.translate(x, y);`
    + `context.scale(num, num);`

    _矩阵变换_
    + `context.transform(a, b, c, d, e, f);`
    + `context.setTransform(a, b, c, d, e, f);`
+ __imageData__
    + `context.getImageData(x, y, w, h);`
    + `context.putImageData(data, x, y, dirtyX, dirtyY, dirtyW, dirtyH); // 不受全局属性影响`
    + `context.createImageData(w, h);`
    + `context.drawImage(imageObj, sX, sY, sW, sH, dX, dY, dW, dH); // 须在图片加载完毕后执行 受全局属性影响`

*****

### #填充 ###
+ __gradient__
    + `context.createLinearGradient(startX, startY, endX, endY);`
    + `context.createRadialGradient(startX, startY, startR, endX, endY, endR);`

#### *非零环绕规则 ####

> 区域校验线段所通过的所有路径的方向矢量和为 0 则不填充

```javascript
context.beginPath();
context.arc(100, 100, 70, 0, 2 * Math.PI, false);
context.arc(100, 100, 50, 0, 2 * Math.PI, true);
context.fill();
```

*****

### #绘制 ###
+ __rect__
    + `context.strokeRect(x, y, w, h);`
    + `context.fillRect(x, y, w, h);`
    + `context.clearRect(x, y, w, h);`
+ __text__
    + `context.strokeText(text, x, y, maxWidth); // 压缩 非隐藏`
    + `context.fillText(text, x, y, maxWidth);`
    + `context.measureText(text); // 返回文本占位宽度`

*****

### #属性 ###
+ __全局__
    + globalAlpha
    + globalCompositeOperation (图像合成模式)
+ __阴影__
    + shadowColor
    + shadowOffsetX
    + shadowOffsetY
    + shadowBlur
+ __线__
    + lineWidth
    + lineJoin
    + lineCap
    + miterLimit (斜接线)
+ __文本__
    + font
    + textAlign
    + textBaseline
# canvas #

### #路径 ###
+ __path__

    ```javascript
    context.beginPath(); // 未开启新路径 路径首尾相接
    context.closePath();
    context.stroke();
    context.fill();
    ````
+ __arc__

    ```javascript
    context.arc(x, y, r, sAngle, eAngle, clockwise);
    ````
+ __rect__

    ```javascript
    context.rect(x, y, w, h);
    ````
+ __line__

    ```javascript
    context.moveTo(x, y);
    context.lineTo(x, y);
    ```
+ __bezier curve__

    ```javascript
    context.quadraticCurveTo(cX, cY, endX, endY);
    context.bezierCurveTo(cX1, cY1, cX2, cY2, endX, endY);
    ````

*****

### #画布 ###
+ __clip__

    ```javascript
    // 存储画布未被裁切时状态
    context.save();
    
    // 按裁切路径 将画布进行裁切
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

    ```javascript
    context.rotate(angle);
    context.translate(x, y);
    context.scale(num, num);
    context.transform(a, b, c, d, e, f);
    context.setTransform(a, b, c, d, e, f);
    ```
+ __imageData__

    ```javascript
    context.getImageData(x, y, w, h);
    context.putImageData(data, x, y, dirtyX, dirtyY, dirtyW, dirtyH); // 不受全局属性影响
    context.createImageData(w, h);
    context.drawImage(imageObj, sX, sY, sW, sH, dX, dY, dW, dH); // 须在图片加载完毕后 执行 受全局属性影响
    ```

*****

### #填充 ###
+ __gradient__
    + 线性渐变
        
        ```javascript
        var gradient = context.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(point, color);
        ```
    + 放射渐变
    
        ```javascript
        // 注意渐变圆位置关系
        var gradient = context.createRadialGradient(startX, startY, startR, endX, endY, endR);
        gradient.addColorStop(point, color);
        ```

#### *非零环绕规则 ####

> 区域校验线段 通过路径 方向矢量和 为 0 不填充

```javascript
context.beginPath();
context.arc(100, 100, 70, 0, 2 * Math.PI, false);
context.arc(100, 100, 50, 0, 2 * Math.PI, true);
context.fill();
```

*****

### #绘制 ###
+ __rectangle__

    ```javascript
    context.strokeRect(x, y, w, h);
    context.fillRect(x, y, w, h);
    context.clearRect(x, y, w, h);
    ```
+ __text__

    ```javascript
    context.strokeText(text, x, y, maxWidth); // maxWidth 压缩 非 隐藏
    context.fillText(text, x, y, maxWidth);
    context.measureText(text); // 返回文本占位宽度
    ```

*****

### #属性 ###
+ 全局
    + globalAlpha
    + globalCompositeOperation 图像合成模式
+ 阴影
    + shadowColor
    + shadowOffsetX
    + shadowOffsetY
    + shadowBlur
+ 线
    + lineWidth
    + lineJoin
    + lineCap
    + miterLimit 斜接线
+ 文本
    + font
    + textAlign
    + textBaseline
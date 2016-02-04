/**
 * Created by sunmy on 16/1/29.
 */

/** 路径绘制 **/
/** path **/
context.beginPath(); // 未开启新路径 路径首尾相接
context.closePath();
context.stroke();
context.fill();

/** arc **/
context.arc(x, y, r, sAngle, eAngle, clockwise);
/** rect **/
context.rect(x, y, w, h);
/** line **/
context.moveTo(x, y);
context.lineTo(x, y);
/** bezier curve **/
context.quadraticCurveTo(cX, cY, endX, endY);
context.bezierCurveTo(cX1, cY1, cX2, cY2, endX, endY);












/** gradient **/
var gradient = context.createLinearGradient(startX, startY, endX, endY);
gradient.addColorStop(point, color);

var gradient = context.createRadialGradient(startX, startY, startR, endX, endY, endR);
gradient.addColorStop(point, color);



/** shadow
 * .shadowColor
 * .shadowOffsetX
 * .shadowOffsetY
 * .shadowBlur
 */




/**
 * .globalAlpha
 * .globalCompositeOperation 图像合成模式
 */


/**
 * .lineWidth
 * .lineJoin
 * .lineCap
 * .miterLimit 斜接线
 */



/** 非零环绕规则
 * 区域校验线段 通过路径 方向矢量和 为 0 不填充
 */
context.beginPath();
context.arc(100, 100, 70, 0, 2 * Math.PI, false);
context.arc(100, 100, 50, 0, 2 * Math.PI, true);
context.fill();








/** rectangle **/
context.clearRect(x, y, w, h);
context.strokeRect(x, y, w, h);
context.fillRect(x, y, w, h);
/** text **/
context.strokeText(text, x, y, maxWidth); // maxWidth 压缩 非 隐藏
context.fillText(text, x, y, maxWidth);


/** coordinate **/
context.rotate(angle);
context.translate(x, y);
context.scale(num, num);
context.transform(a, b, c, d, e, f);
context.setTransform(a, b, c, d, e, f);


/** imageData **/
context.getImageData(x, y, w, h);
context.putImageData(data, x, y);
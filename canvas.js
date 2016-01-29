/**
 * Created by sunmy on 16/1/29.
 */

/** rectangle **/
context.clearRect(x, y, w, h);
context.strokeRect(x, y, w, h);
context.fillRect(x, y, w, h);

/** gradient **/
var gradient = context.createLinearGradient(startX, startY, endX, endY);
gradient.addColorStop(point, color);

var gradient = context.createRadialGradient(startX, startY, startR, endX, endY, endR);
gradient.addColorStop(point, color);


/**
 * .globalAlpha
 */

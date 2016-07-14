/**
 * Created by sunmy on 15/12/29.
 */

try {
    console.log('success');
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}
// -> success、finally

try {
    console.lg('success');
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}
// -> Error、finally

try {
    console.lg('success');
} catch(e) {
    console.log(e);
    throw e;
} finally {
    console.log('finally');
}
// -> Error、finally、报错
// try 代码有误 不执行 -> catch 捕获 error -> catch 抛出 error -> try 代码执行 报错

function MyError(msg) {
    this.name = 'MyError';
    this.message = msg;
}
MyError.prototype = new Error();
var error = new MyError('my error');

try {
    console.log('success');
    throw error;
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}
// -> success、自定义 error 对象、finally
// try 代码无误 被执行 -> throw error 被执行 -> catch 被执行 捕获所抛出自定义 error
try {
    console.lg('success');
    throw error;
} catch(e) {
    console.log(e);
} finally {
    console.log('finally');
}
// -> Error、finally
// try 代码有误 不执行 -> throw error 不执行 -> catch 被执行 捕获默认 error
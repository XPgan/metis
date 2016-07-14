/**
 * Created by sunmy on 16/1/15.
 */

/** with 改变作用域链 **/

var obj = {
    attr: {
        a: {
            a: 'inner',
            attr: 'attr'
        },
        b: 'b'
    }
};

with (obj.attr) {
    console.log(a); // -> Object {a: 'inner', attr: 'attr'}
    with (a) {
        console.log(attr); // -> attr
    }
}
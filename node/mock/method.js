/**
 * Created by sunmy on 2017/8/26.
 */

module.exports = {
    random: function (min, max) {
        return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    }
}
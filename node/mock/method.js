module.exports = {
    random: function (min, max) {
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    }
}
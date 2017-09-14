module.exports = {
    random: function (min, max) {
        var min = (typeof(min) == "number") ? min : 0;
        var max = (typeof(max) == "number") ? max : 10;
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        console.log(min);
        console.log(max);
        return Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    }
}
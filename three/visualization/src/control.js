export default {

    scene: null,
    camera: null,
    renderer: null,

    do (opts) {
        var _this = this;
        _this.scene = opts.scene;
        _this.camera = opts.camera;
        _this.renderer = opts.renderer;
        _this.handleEvent();
    },
    handleEvent () {
        var _this = this;
        var flag = false;
        var $canvas = document.getElementById('threedi');
        var width = $canvas.clientWidth;
        var height = $canvas.clientHeight;

        $canvas.onmousedown = function () {
            flag = true;
        }
        $canvas.onmouseup = function () {
            flag = false;
        }
        $canvas.onmousemove = function (e) {
            if (flag) {
                var lookAtX = (e.pageX - width / 2) * 0.1;
                var lookAtY = (height / 2 - e.pageY) * 0.1;
                _this.camera.position.x = lookAtX;
                _this.camera.position.y = lookAtY;
                _this.renderer.render(_this.scene, _this.camera);
            }
        }
        document.onkeydown = function (e) {
            e.preventDefault();

            var positionZ = _this.camera.position.z;
            (e.keyCode == 38) && (positionZ /= 1.1); // 放大
            (e.keyCode == 40) && (positionZ *= 1.1); // 缩小
            _this.camera.position.z = positionZ;
            _this.renderer.render(_this.scene, _this.camera);
        }
    }
}

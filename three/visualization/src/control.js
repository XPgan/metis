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
        var $canvas = document.getElementById('canvas');
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
                var x = (e.pageX - width / 2) * 0.1;
                var y = (height/ 2 - e.pageY) * 0.1;

                _this.camera.lookAt({x: x, y: y, z: 0});
                _this.renderer.render(_this.scene, _this.camera);
            }
        }
    }
}

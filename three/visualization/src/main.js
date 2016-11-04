var main = {

    scene: null,
    camera: null,
    renderer: null,

    do () {
        var _this = this;
        _this.initThree();
        _this.initLight();
        _this.coordinate();
        _this.setObject();
        _this.renderScene();
    },
    initThree () {
        var _this = this;
        var $canvas = document.getElementById('canvas');
        var width = $canvas.clientWidth;
        var height = $canvas.clientHeight;

        /** 场景 **/
        var scene = new THREE.Scene();

        /** 相机 **/
        var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
        camera.position.set(0, -50, 100);
        camera.up.set(0, 1, 0);
        camera.lookAt({x: 0, y: 0, z: 0});

        /** 渲染器 **/
        var renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
            antialias: true // 反锯齿
        });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000);

        _this.scene = scene;
        _this.camera = camera;
        _this.renderer = renderer;
    },
    initLight: function () {
        var _this = this;
        var spot = new THREE.SpotLight(0xFFFF00, 1, 100, Math.PI / 3);
        var directional = new THREE.DirectionalLight(0xF8F8FF);

        /** 聚光灯 **/
        spot.position.set(0, 0, 50);
        spot.target.position.set(0, 0, 0);

        /** 平行光 **/
        directional.position.set(-50, -50, 50);

        _this.scene.add(spot);
        _this.scene.add(directional);
    },
    coordinate: function () {
        var _this = this;
        var cooX = new THREE.Vector3(50, 0, 0);
        var cooY = new THREE.Vector3(0, 50, 0);
        var cooZ = new THREE.Vector3(0, 0, 50);
        var drawAxis = function (point, color) {
            var origin = new THREE.Vector3(0, 0, 0);
            var geometry = new THREE.Geometry();
            var material = new THREE.LineBasicMaterial({
                color: color
            });
            geometry.vertices.push(origin, point);
            _this.scene.add(new THREE.Line(geometry, material, THREE.LinePieces));
        };

        // x 轴
        drawAxis(cooX, 0x4B0082);
        // y轴
        drawAxis(cooY, 0x0000FF);
        // z轴
        drawAxis(cooZ, 0x00FA9A);
    },
    setObject: function () {

    },
    renderScene: function () {
        var _this = this;
        _this.renderer.render(_this.scene, _this.camera);
    }
}

main.do();

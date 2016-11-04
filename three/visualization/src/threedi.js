export default {

    scene: null,
    camera: null,
    renderer: null,

    sketch (data) {
        var _this = this;
        _this.initThree();
        _this.initLight();
        _this.coordinate();

        for (var i = 0;i < data.length;i++) {
            var geometry = new THREE.SphereGeometry(1.2, 200, 200);
            var material = new THREE.MeshPhongMaterial({
                color: 0xB5C334
            });
            var ball = new THREE.Mesh(geometry, material);
            ball.position.set(data[i].x, data[i].y, data[i].z);
            _this.scene.add(ball);
        }
        _this.renderer.render(_this.scene, _this.camera);
    },
    initThree () {
        var _this = this;
        var $canvas = document.getElementById('threedi');
        var width = $canvas.clientWidth;
        var height = $canvas.clientHeight;

        /** 场景 **/
        var scene = new THREE.Scene();

        /** 相机 **/
        var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
        camera.position.set(0, 0, 100);
        camera.up.set(0, 1, 0);
        camera.lookAt({x: 0, y: 0, z: 0});

        /** 渲染器 **/
        var renderer = new THREE.WebGLRenderer({
            canvas: $canvas,
            antialias: true // 反锯齿
        });
        renderer.setSize(width, height);
        renderer.setClearColor(0xFFFFFF);

        _this.scene = scene;
        _this.camera = camera;
        _this.renderer = renderer;
    },
    initLight: function () {
        var _this = this;
        var directional = new THREE.DirectionalLight(0xEEEEEE);
        var ambient = new THREE.AmbientLight(0x3ADBD2);
        directional.position.set(-50, -50, 50);

        _this.scene.add(directional);
        _this.scene.add(ambient);
    },
    coordinate: function () {
        var _this = this;
        var cooX = new THREE.Vector3(100, 0, 0);
        var cooY = new THREE.Vector3(0, 100, 0);
        var cooZ = new THREE.Vector3(0, 0, 100);
        var drawAxis = function (point, color) {
            var origin = new THREE.Vector3(0, 0, 0);
            var geometry = new THREE.Geometry();
            var material = new THREE.LineBasicMaterial({
                color: color
            });
            geometry.vertices.push(origin, point);
            _this.scene.add(new THREE.Line(geometry, material, THREE.LinePieces));
        };

        drawAxis(cooX, 0x4B0082); // x 轴
        drawAxis(cooY, 0x0000FF); // y 轴
        drawAxis(cooZ, 0x00FA9A); // z 轴
    }
}

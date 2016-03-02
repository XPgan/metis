/**
 * Created by sunmy on 16/3/1.
 */

/** 场景 **/
var scene = new THREE.Scene();
scene.add(item);

/** 相机 **/
// 正投影相机
var camera = new THREE.OrthographicCamera(param);
// 透视投影相机
var camera = new THREE.PerspectiveCamera(param);

camera.position.set(x, y, z);
camera.up.set(x, y, z);
camera.lookAt({x: _, y: _, z: _});

/** 渲染器 **/
var renderer = new THREE.WebGLRenderer(object);

renderer.setSize(width, height);
renderer.setClearColor(color);
renderer.render(param);






/** 光照 **/
// 基类
var light = new THREE.Light(color);

// 派生类
/**
 * 1. 环境光 方向: 无
 * 2. 点光源 方向: 无
 * 3. 聚光灯 方向: 光源位置 -> target 位置
 * 4. 平行光 方向: 光源位置 -> 原点位置
 */
var light = new THREE.AmbientLight(param);
var light = new THREE.PointLight(param);
var light = new THREE.SpotLight(param);
var light = new THREE.DirectionalLight(param);

/** 阴影 **/
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;

xxx.castShadow = true;
xxx.receiveShadow = true;

light.shadowCameraVisible = true;
light.shadowDarkness = value;

// 聚光灯
light.shadowCameraNear = value;
light.shadowCameraFar = value;
light.shadowCameraFov = value;
// 平行光
light.shadowCameraNear = value;
light.shadowCameraFar = value;
light.shadowCameraLeft = value;
light.shadowCameraRight = value;
light.shadowCameraTop = value;
light.shadowCameraBottom = value;

/** 材质 **/
// 基础材质(无光照效果 无阴影效果)
var material = new THREE.MeshBasicMaterial(object);
// 兰伯特材质(无镜面反射)
var material = new THREE.MeshLambertMaterial(object);
// Phong材质
var material = new THREE.MeshPhongMaterial(object);
// 法向材质
var material = new THREE.MeshNormalMaterial();

/** 模型 **/
// 基类
var geometry = new THREE.Geometry();

geometry.vertices.push(point);
geometry.faces.push(face);
geometry.colors.push(color);

// 派生类
/**
 * 1. 立方体
 * 2. 球体
 * 3. 柱体/椎体
 * 4. 管道
 *
 * 5. 正四面体
 * 6. 正八面体
 * 7. 正十二面体
 *
 * 8. 矩面
 * 9. 圆面
 */
var geometry = new THREE.CubeGeometry(param);
var geometry = new THREE.SphereGeometry(param);
var geometry = new THREE.CylinderGeometry(param);
var geometry = new THREE.TorusGeometry(param);

var geometry = new THREE.TetrahedronGeometry(param);
var geometry = new THREE.OctahedronGeometry(param);
var geometry = new THREE.IcosahedronGeometry(param);

var geometry = new THREE.PlaneGeometry(param);
var geometry = new THREE.CircleGeometry(param);

// 三维文本
var text = new THREE.TextGeometry(text, object);






/** 构造 **/
// 网格
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(x, y, z);
mesh.scale.set(l, m, n);
mesh.rotation.set(angle1, angle2, angle3);

/** 纹理贴图 **/
var texture = THREE.ImageUtils.loadTexture(image, {}, function () {
    renderer.render(param);
});

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(m, n);

/** 性能 **/
var stats = new Stats();
stats.begin();
stats.end();

/** 其他 **/
// 点
var point = new THREE.Vecotr3(x, y, z);
// 面
var face = new THREE.Face3(index1, index2, index3);
// 色值
var color = new THREE.Color(color);

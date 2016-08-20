# Three.js #

### #场景 ###

```javascript
var scene = new THREE.Scene();
scene.add(item);
```

### #相机 ###

```javascript
camera.position.set(x, y, z);
camera.up.set(x, y, z);
camera.lookAt({x: _, y: _, z: _});
```

+ __正投影相机__

    ```javascript
    var camera = new THREE.OrthographicCamera(params);
    ```
+ __透视投影相机__

    ```javascript
    var camera = new THREE.PerspectiveCamera(params);
    ```

### #渲染器 ###

```javascript
var renderer = new THREE.WebGLRenderer(object);
renderer.setSize(width, height);
renderer.setClearColor(color);
renderer.render(params);
```

### #光照 ###
+ 基类

    ```javascript
    var light = new THREE.Light(color);
    ```
+ 派生类
    + __环境光__
    
        ```javascript
        var light = new THREE.AmbientLight(params);
        ```
    + __点光源__
    
        ```javascript
        var light = new THREE.PointLight(params);
        ```
    + __聚光灯__ (光源位置 指向 target 位置)
        
        ```javascript
        var light = new THREE.SpotLight(params);
        ```
    + __平行光__ (光源位置 指向 原点位置)
    
        ```javascript
        var light = new THREE.DirectionalLight(params);
        ```

### #阴影 ###

```javascript
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;

xxx.castShadow = true;
xxx.receiveShadow = true;

light.shadowCameraVisible = true;
light.shadowDarkness = value;
```

聚光灯
```javascript
light.shadowCameraNear = value;
light.shadowCameraFar = value;
light.shadowCameraFov = value;
```

平行光
```javascript
light.shadowCameraNear = value;
light.shadowCameraFar = value;
light.shadowCameraLeft = value;
light.shadowCameraRight = value;
light.shadowCameraTop = value;
light.shadowCameraBottom = value;
```

### #材质 ###
+ __基础材质__ (无光照效果 无阴影效果)

    ```javascript
    var material = new THREE.MeshBasicMaterial(object);
    ```
+ __兰伯特材质__ (无镜面反射)

    ```javascript
    var material = new THREE.MeshLambertMaterial(object);
    ```
+ __Phong 材质__

    ```javascript
    var material = new THREE.MeshPhongMaterial(object);
    ```
+ __法向材质__

    ```javascript
    var material = new THREE.MeshNormalMaterial();
    ```

### #模型 ###
+ 基类

    ```javascript
    var geometry = new THREE.Geometry();
    geometry.vertices.push(point);
    geometry.faces.push(face);
    geometry.colors.push(color);
    ```
+ 派生类
    + 立方体
    
        ```javascript
        var geometry = new THREE.CubeGeometry(params);
        ```
    + 球体
    
        ```javascript
        var geometry = new THREE.SphereGeometry(params);
        ```
    + 柱体/椎体
        
        ```javascript
        var geometry = new THREE.CylinderGeometry(params);
        ```
    + 管道
    
        ```javascript
        var geometry = new THREE.TorusGeometry(params);
        ```
    + 正四面体
    
        ```javascript
        var geometry = new THREE.TetrahedronGeometry(params);
        ```
    + 正八面体
    
        ```javascript
        var geometry = new THREE.OctahedronGeometry(params);
        ```
    + 正十二面体
        
        ```javascript
        var geometry = new THREE.IcosahedronGeometry(params);
        ```
    + 矩面
    
        ```javascript
        var geometry = new THREE.PlaneGeometry(params);
        ```
    + 圆面
    
        ```javascript
        var geometry = new THREE.CircleGeometry(params);
        ```
    
_三维文本_
```javascript
var text = new THREE.TextGeometry(text, object);
```

### #构造 ###
+ __网格__

    ```javascript
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.scale.set(l, m, n);
    mesh.rotation.set(angle1, angle2, angle3);
    ```

### #纹理贴图 ###

```javascript
var texture = THREE.ImageUtils.loadTexture(image, {}, function () {
    renderer.render(params);
});
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(m, n);
```

### #性能 ###

```javascript
var stats = new Stats();
stats.begin();
stats.end();
```

### #其他 ###
+ __点__

    ```javascript
    var point = new THREE.Vecotr3(x, y, z);
    ```
+ __面__

    ```javascript
    var face = new THREE.Face3(index1, index2, index3);
    ```
+ __色值__

    ```javascript
    var color = new THREE.Color(color);
    ```
import * as three from './three/three.module.js'

var renderer = new three.WebGLRenderer({antialias:true});

renderer.setClearColor("#2F2F2F");
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement )

var scene = new three.Scene();

var camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

var cube;

function start() {
    var gridRadius = 2;
    gridRadius *= 1;

    var geo = new three.BoxGeometry(gridRadius, gridRadius, gridRadius);
    var mat = new three.MeshStandardMaterial({color: '#ffffff'});

    cube = new three.Mesh(geo, mat);

    scene.add(cube);

    camera.position.x = -5;
    camera.position.y = 2;
    camera.position.z = -5;

    camera.rotateY(three.Math.degToRad(225));

    var light = new three.DirectionalLight("#ffffff", 0.5)

    light.position.x = -0.4;
    light.position.y = 0.6;
    light.position.z = -0.3;

    scene.add(light)
}

var rotate = three.Math.degToRad(10)

function update(delta) {
    cube.rotation.y += rotate * delta
}

function render() {
    requestAnimationFrame( render );
    renderer.render(scene, camera);

    update(0.1);
}

start();
render();
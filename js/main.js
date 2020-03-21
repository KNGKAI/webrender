import * as three from './three/three.module.js'

var renderer = new three.WebGLRenderer({antialias:true});

renderer.setClearColor("#2F2F2F");
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement )

var scene = new three.Scene();

var camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.x = -5;
camera.position.y = 2;
camera.position.z = -5;

camera.rotateY(three.Math.degToRad(225));

function start(){
    var geometry = new three.BoxGeometry( 1, 1, 1 );
    var material = new three.MeshStandardMaterial( { color: "#ffffff" } );
    var cube = new three.Mesh( geometry, material );

    scene.add(cube);
}

function update() {
    //
}

function render() {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
    
    update();
}

console.log("Start")

start();
render();

export {scene, camera};

console.log("End")
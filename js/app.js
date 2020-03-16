
import {Level} from './level.js'

var renderer = new THREE.WebGLRenderer({antialias:true});
var level = new Level();

renderer.setClearColor("#2F2F2F");
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

function start(){
    level.add(cube);
}

function update(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function render(){
    requestAnimationFrame( render );
    renderer.render(level.scene, level.camera);
    
    update();
}

start();
render();
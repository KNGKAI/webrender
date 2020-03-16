import * as three from './three/three.module.js'
import {Level} from './level.js'


var renderer = new three.WebGLRenderer({antialias:true});
var level = new Level();

renderer.setClearColor("#2F2F2F");
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var geometry = new three.BoxGeometry( 1, 1, 1 );
var material = new three.MeshBasicMaterial( { color: "#433F81" } );
var cube = new three.Mesh( geometry, material );

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
import * as three from './three/three.module.js'

export class Level {
    constructor() {
        this.name = "untitled";
        this.camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = 4;

        this.scene = new three.Scene();
    }
    
    add(object)
    {
        this.scene.add(object);
    }
}
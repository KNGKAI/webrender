export class Level {
    constructor() {
        this.name = "untitled";
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.z = 4;

        this.scene = new THREE.Scene();
    }
    
    add(object)
    {
        this.scene.add(object);
    }
}
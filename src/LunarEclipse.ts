import * as THREE from 'three';

export class LunarEclipse {
  public light: THREE.SpotLight;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    const distance = 50;
    const angle = Math.PI / 20;
    const penumbra = 0.5;
    const decay = 1;

    this.light = new THREE.SpotLight(
      0x551100,
      10.0,
      distance,
      angle,
      penumbra,
      decay
    );
    this.light.position.set(5, 0, 3);
  }

  public execute() {
    this.scene.add(this.light);
  }

  public helper() {
    const spotLightHelper = new THREE.SpotLightHelper(this.light);
    this.scene.add(spotLightHelper);
  }
}

import * as THREE from 'three';

export class DirectionalLight {
  public light: THREE.DirectionalLight;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.light = new THREE.DirectionalLight(0xffffff, 0.8);
    this.light.position.set(50, 0, 30);
    this.light.castShadow = true;
    this.light.shadow.bias = -0.004;

    this.scene = scene;
  }

  public execute() {
    this.scene.add(this.light);
  }

  public helper() {
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      this.light,
      5
    );
    this.scene.add(directionalLightHelper);
  }

  public shadowHelper() {
    const directionalLightShadowHelper = new THREE.CameraHelper(
      this.light.shadow.camera
    );
    this.scene.add(directionalLightShadowHelper);
  }
}

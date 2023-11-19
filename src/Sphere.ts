import * as THREE from 'three';

export class Sphere {
  public geometry: THREE.SphereGeometry;
  public material: THREE.MeshPhongMaterial;
  public mesh: THREE.Mesh;

  constructor(textureUrl: string, radius: number) {
    this.geometry = new THREE.SphereGeometry(radius, 50, 50);
    this.material = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(textureUrl),
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }
}

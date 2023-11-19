import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import ftStarsImg from './images/ulukai/corona_ft.png';
import bkStarsImg from './images/ulukai/corona_bk.png';
import upStarsImg from './images/ulukai/corona_up.png';
import dnStarsImg from './images/ulukai/corona_dn.png';
import rtStarsImg from './images/ulukai/corona_rt.png';
import lfStarsImg from './images/ulukai/corona_lf.png';
import earthImg from './images/earthUv.jpg';
import moonImg from './images/moonUv.jpg';

import { Sphere } from './Sphere';
import { DirectionalLight } from './DirectionalLight';
import { LunarEclipse } from './LunarEclipse';

import './style.css';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 15;
camera.position.x = 15;

const cubeTextureLoader = new THREE.CubeTextureLoader();

scene.background = cubeTextureLoader.load([
  ftStarsImg,
  bkStarsImg,
  upStarsImg,
  dnStarsImg,
  rtStarsImg,
  lfStarsImg,
]);

const orbit = new OrbitControls(camera, renderer.domElement);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

orbit.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(scene);
directionalLight.execute();

const lunarEclipse = new LunarEclipse(scene);
lunarEclipse.execute();

// Earth
const earth = new Sphere(earthImg, 1.4).mesh;
const earthOrbit = new THREE.Object3D();
earthOrbit.position.x = 8.5;
earthOrbit.position.z = 5;
earthOrbit.add(earth);

// Moon
const moon = new Sphere(moonImg, 0.38).mesh;
const moonOrbit = new THREE.Object3D();
moonOrbit.position.x = 10;
moonOrbit.rotation.y = 10;
moonOrbit.add(moon);
earthOrbit.add(moonOrbit);

scene.add(earthOrbit);

function animate() {
  requestAnimationFrame(animate);

  earth.rotation.y -= 0.004;

  earthOrbit.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();

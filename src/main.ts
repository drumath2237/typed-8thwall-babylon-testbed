import './style.scss';
import {
  Engine,
  FreeCamera,
  MeshBuilder,
  Scene,
  Vector3,
} from '@babylonjs/core';

const main = () => {
  const renderCanvas = document.getElementById(
    'renderCanvas'
  ) as HTMLCanvasElement;
  if (!renderCanvas) {
    return;
  }

  renderCanvas.width = document.firstElementChild?.clientWidth ?? 0;
  renderCanvas.height = document.firstElementChild?.clientHeight ?? 0;

  const engine = new Engine(renderCanvas, true);
  const scene = new Scene(engine);

  scene.createDefaultLight(true);
  const camera = new FreeCamera('camera', Vector3.Zero(), scene, true);

  camera.addBehavior(XR8.Babylonjs.xrCameraBehavior(), true);

  MeshBuilder.CreateBox('box', { size: 0.3 }).position = new Vector3(0, 1.5, 0);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

window.addEventListener('xrloaded', main);

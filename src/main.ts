import './style.scss';
import { Engine, MeshBuilder, Scene, Vector3 } from '@babylonjs/core';

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

  scene.createDefaultCameraOrLight(true, true, true);

  MeshBuilder.CreateBox('box', { size: 0.1 }).position = new Vector3(
    0,
    0.05,
    0
  );

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main();

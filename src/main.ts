import './style.scss';
import {
  Engine,
  FreeCamera,
  MeshBuilder,
  Quaternion,
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

  const box = MeshBuilder.CreateBox('box', { size: 0.3 });

  scene.onReadyObservable.add(() => {
    setInterval(() => {
      const hitRes = XR8.XrController.hitTest(0.5, 0.5);
      const nearest = hitRes.sort((a, b) => a.distance - b.distance)[0];
      if (!nearest) {
        return;
      }

      box.position = new Vector3(
        nearest.position.x,
        nearest.position.y,
        nearest.position.z
      );

      box.rotationQuaternion = new Quaternion(
        nearest.rotation.x,
        nearest.rotation.y,
        nearest.rotation.z,
        nearest.rotation.w
      );
    }, 33);
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};

if (XR8) {
  main();
} else {
  window.addEventListener('xrloaded', main);
}

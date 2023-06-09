interface XR8 {
  Babylonjs: Babylonjs;
}

interface Babylonjs {
  xrCameraBehavior(config?: Config, xrConfig?: XrCameraBehaviorConfig): any;
}

interface Config {
  webgl2?: boolean;
  ownRunLoop?: boolean;
  cameraConfig?: { direction: XrConfigCamera };
  glContextConfig?: WebGLContextAttributes;
  allowedDevices?: XrConfigDevice;
}
interface XrCameraBehaviorConfig {
  enableLighting?: boolean;
  enableWorldPoints?: boolean;
  disableWorldTracking?: boolean;
  imageTargets?: string[];
  leftHandedAxes?: boolean;
  imageTargets?: boolean;
}

enum XrConfigCamera {
  FRONT = 'front',
  BACK = 'back',
}

enum XrConfigDevice {
  MOBILE = 'mobile',
  MOBILE_AND_HEADSETS = 'mobile-and-headsets',
  ANY = 'any',
}

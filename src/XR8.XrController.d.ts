interface XrController {
  hitTest(
    X: number,
    Y: number,
    includedTypes: HitTestType[] = []
  ): HitTestResult[];
  configure(): void;
  pipelineModule(): any;
}

interface XR8 {
  XrController: XrController;
}

type HitTestType =
  | 'FEATURE_POINT'
  | 'ESTIMATED_SURFACE'
  | 'DETECTED_SURFACE'
  | 'UNSPECIFIED';

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

interface HitTestResult {
  type: HitTestType;
  position: Vector3;
  rotation: Vector4;
  distance: number;
}

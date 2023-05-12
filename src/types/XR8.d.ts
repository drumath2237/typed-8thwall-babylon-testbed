interface XR8 {
  version(): string;
  addCameraPipelineModule(any): void;
}

declare const XR8: XR8;

interface Window {
  XR8: XR8;
}

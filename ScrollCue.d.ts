declare module "plugins/scrollcue" {
  export interface ScrollCueOptions {
    interval?: number;
    duration?: number;
    percentage?: number;
  }

  export interface ScrollCueInstance {
    init(options?: ScrollCueOptions): void;
    update(): void;
  }

  const ScrollCue: ScrollCueInstance;
  export default ScrollCue;
}

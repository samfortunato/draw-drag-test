import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants";

export class MainCanvas {
  canvasEl: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.init();
  }

  private init(): void {
    this.canvasEl = document.querySelector('canvas');
    this.ctx = this.canvasEl.getContext('2d');

    this.canvasEl.width = CANVAS_WIDTH;
    this.canvasEl.height = CANVAS_HEIGHT;
  }
}

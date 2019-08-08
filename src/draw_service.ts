import { MainCanvas } from "./main_canvas";

export class DrawService {
  static readonly canvas = new MainCanvas();

  static get draw() {
    return DrawService.canvas.ctx;
  }
}

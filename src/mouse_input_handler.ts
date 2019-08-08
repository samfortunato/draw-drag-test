import { MouseState } from "./types/mouse_state";

export class MouseInputHandler {
  mouseTargetClickX: number;
  mouseTargetClickY: number;
  mouseState: MouseState;
  
  constructor() {
    this.mouseState = {
      isDown: false,
    };

    this.init();
  }

  private init(): void {
    document.addEventListener('mousedown', (evt) => {
      this.mouseState.isDown = true;

      this.calculateClickPosition(evt);
    });

    document.addEventListener('mouseup', (evt) => {
      this.mouseState.isDown = false;
    });

    document.addEventListener('mousemove', (evt) => {

    });
  }

  private calculateClickPosition(evt: MouseEvent): void {
    const evtTarget = evt.target as HTMLElement;

    this.mouseTargetClickX = evt.pageX - evtTarget.offsetLeft;
    this.mouseTargetClickY = evt.pageY - evtTarget.offsetTop;

    console.log(`${this.mouseTargetClickX}, ${this.mouseTargetClickY}`);
  }
}

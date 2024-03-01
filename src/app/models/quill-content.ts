import { Slide } from "./slide";

export class QuillContent {
  id: number;
  width: number;
  height: number;
  x: number;
  y: number;
  delta: string;
  slide: Slide;

  constructor (quillContent: any) {
    this.id = quillContent.id || 0;
    this.width = quillContent.width || 0;
    this.height = quillContent.height || 0;
    this.x = quillContent.x || 0;
    this.y = quillContent.y || 0;
    this.delta = quillContent.delta || '';
    this.slide = quillContent.slide || new Slide({});
  }
}

import { Carousel } from "./carousel";
import { QuillContent } from "./quill-content";

export class Slide {
  id: number;
  title: string;
  quillContents: QuillContent;
  carousel: Carousel;

  constructor (slide: any) {
    this.id = slide.id || 0;
    this.title = slide.title || '';
    this.quillContents = slide.quillContents || new QuillContent({});
    this.carousel = slide.carousel || new Carousel({});
  }
}

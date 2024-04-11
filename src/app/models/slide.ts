import { Carousel } from "./carousel";

export class Slide {
  id?: number;
  title: string;
  carousel: Carousel;

  constructor (slide: any) {
    this.id = slide.id || 0;
    this.title = slide.title || '';
    this.carousel = slide.carousel || new Carousel({});
  }
}

import { Carousel } from "./carousel";

export class Slide {
  id?: number;
  sortOrder: number;
  carousel: Carousel;

  constructor (slide: any) {
    this.id = slide.id || 0;
    this.sortOrder = slide.sortOrder || 0;
    this.carousel = slide.carousel || new Carousel({});
  }
}

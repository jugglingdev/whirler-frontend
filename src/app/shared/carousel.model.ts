import { Slide } from "../carousel-edit/slide/slide.model";

export class Carousel {

  constructor (
    public title: string,
    public description: string,
    public thumbnail: string,
    public slides: Slide[]
  ){};

}

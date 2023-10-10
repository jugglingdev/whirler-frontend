import { Slide } from "./slide/slide.model";

export class Carousel {

  constructor (
    public title: string,
    public description: string,
    public tags: string[],
    public thumbnail: string,
    public slides: Slide[]
  ){};

}

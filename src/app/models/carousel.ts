import { Tag } from "./tag";
import { User } from "./user";

export class Carousel {
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  user: User;

  constructor (carousel: any, id = 0) {
    this.id = id;
    this.title = carousel.title || '';
    this.description = carousel.description || '';
    this.thumbnail = carousel.thumbnail || '';
    this.tags = carousel.tags || [];
    this.user = carousel.user || new User({});
  }
}

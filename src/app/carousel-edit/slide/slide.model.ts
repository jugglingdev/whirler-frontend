import { QuillContent } from "../carousel-detail/quill-editor/quill-content.model";

export class Slide {

  constructor (
    public title: string,
    public content: QuillContent[],
    public thumbnail: string,
  ){};

}

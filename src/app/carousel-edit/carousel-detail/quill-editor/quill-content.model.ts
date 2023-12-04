import Delta from "quill-delta";

export class QuillContent {

  constructor (
    public width: string,
    public height: string,
    public x: string,
    public y: string,
    public delta: Delta,
  ){};

}

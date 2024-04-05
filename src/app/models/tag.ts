export class Tag {
  id?: number;
  name: string;

  constructor(tag: any) {
    this.id = tag.id || 0;
    this.name = tag.name || '';
  }
}

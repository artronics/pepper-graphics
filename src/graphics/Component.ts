export interface Component {
  id: string;

  render(): void;
}

export default Component;

export class DefaultComponent implements Component {
  private readonly _id: string;

  constructor(id: string) {
    this._id = id;
  }

  render(): void {
  }


  get id(): string {
    return this._id;
  }
}

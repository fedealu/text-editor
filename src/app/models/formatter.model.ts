import { FormatTypeI } from "../enum/formatTypes.enum";

export class FormatterModel {
  public name: string;
  public format: string;
  public htmlTag: string;

  constructor(format: FormatTypeI, public showDefaultUI: boolean = false) {
    this.name = format.type;
    this.format = format.type;
    this.htmlTag = format.tag;
  }

  get title() {
    return `action.${this.name}.title`;
  }

  get label() {
    return `action.${this.name}.short`;
  }
}

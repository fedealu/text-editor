export interface FormatTypeI {
  type: string;
  tag?: string;
  value?: boolean;
}

export const FORMAT_TYPES = {
  bold: {
    type: "bold",
    tag: "b"
  },
  italic: {
    type: "italic",
    tag: "i"
  },
  underline: {
    type: "underline",
    tag: "u"
  },
  strikeThrough: {
    type: "strikeThrough",
    tag: "strike"
  },
  color: {
    type: "foreColor",
    tag: "font",
    value: true
  }
};

import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { FormatterModel } from "src/app/models/formatter.model";

@Component({
  selector: "app-action",
  templateUrl: "./action.component.html",
  styleUrls: ["./action.component.scss"]
})
export class ActionComponent implements OnInit, OnDestroy {
  @Input() action: FormatterModel = null;
  activeAction: boolean = false;
  listener = this.mouseUpHandler.bind(this);
  value = "red";

  constructor() {}

  onClickHandler() {
    document.execCommand(this.action.format, false, this.value);
    this.toggleActiveAction();
  }

  ngOnInit() {
    document.addEventListener("mouseup", this.listener);
  }

  ngOnDestroy() {
    document.removeEventListener("mouseup", this.listener);
  }

  mouseUpHandler(evt = null) {
    this.toggleActiveAction();
  }

  toggleActiveAction() {
    const currentSelection = document.getElementsByClassName(
      "current-selection"
    )[0];
    const selectionElm = document.getSelection().focusNode;

    if (
      this.isStyleAppliedToSelection(currentSelection) ||
      (selectionElm &&
        this.isStyleAppliedToSelection(selectionElm.parentElement))
    ) {
      this.activeAction = true;
    } else {
      this.activeAction = false;
    }
  }

  isStyleAppliedToSelection(htmlElement: Element) {
    if (htmlElement) {
      while (
        htmlElement.id != "file" &&
        htmlElement.tagName.toLowerCase() != "body"
      ) {
        if (this.action.htmlTag === htmlElement.tagName.toLowerCase()) {
          return true;
        }

        if (!htmlElement.parentElement) {
          return false;
        }

        htmlElement = htmlElement.parentElement;
      }
    }
    return false;
  }
}

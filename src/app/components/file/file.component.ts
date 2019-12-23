import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { TextService } from "../../services/text-service/text.service";
import { EventService } from "src/app/services/event-service/event.service";

@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  @ViewChild("fileContainer") fileContainer: ElementRef;

  text$: Promise<string>;

  constructor(
    private textService: TextService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.textService.getMockText().then(text => {
      this.fileContainer.nativeElement.innerHTML = text;
    });
  }

  clickHandler(evt: Event) {
    this.eventService.event = evt;
    evt.stopPropagation();
  }

  clearCurrentSelection() {
    const prevSelection = document.getElementsByClassName(
      "current-selection"
    )[0];

    if (prevSelection) {
      prevSelection.outerHTML = prevSelection.innerHTML;
    }
  }

  mouseUpHandler(evt) {
    const selection = document.getSelection();

    if (selection) {
      const range = selection.getRangeAt(0);
      this.clearCurrentSelection();

      if (range.endOffset !== range.startOffset) {
        this.generateSpanWithSelection(range);
      }
    }
  }

  generateSpanWithSelection(range) {
    const spanSelection = document.createElement("span");
    spanSelection.classList.add("current-selection");
    spanSelection.append(range.extractContents());
    range.deleteContents();
    range.insertNode(spanSelection);
  }
}

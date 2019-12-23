import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormatterModel } from "src/app/models/formatter.model";
import { FORMAT_TYPES } from "src/app/enum/formatTypes.enum";
import { EventService } from "src/app/services/event-service/event.service";
import { TextService } from "src/app/services/text-service/text.service";
import { SelectorContext } from "@angular/compiler";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-poppable-control-panel",
  templateUrl: "./poppable-control-panel.component.html",
  styleUrls: ["./poppable-control-panel.component.scss"]
})
export class PoppableControlPanelComponent implements OnInit {
  protected actions: FormatterModel[] = [
    new FormatterModel(FORMAT_TYPES.bold),
    new FormatterModel(FORMAT_TYPES.italic),
    new FormatterModel(FORMAT_TYPES.underline),
    new FormatterModel(FORMAT_TYPES.strikeThrough)
  ];
  protected synonims: any[] = [];
  protected synonimControl: FormControl = new FormControl("");

  @ViewChild("poppableControlPanel") public controlPanel: ElementRef;

  constructor(
    private eventService: EventService,
    private textService: TextService
  ) {}

  ngOnInit() {
    this.eventService.event$.subscribe(event => {
      this.mouseUpHandler(event);
    });

    document.addEventListener("click", evt => {
      this.controlPanel.nativeElement.classList.remove("show");
    });

    this.synonimControl.valueChanges.subscribe(synonimSelected => {
      const selection = document.getSelection();
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const textNode = document.createTextNode(synonimSelected);
      range.insertNode(textNode);
    });
  }

  mouseUpHandler(evt) {
    const selection = document.getSelection().toString();

    if (selection) {
      this.controlPanel.nativeElement.classList.add("show");
      this.controlPanel.nativeElement.style.top = evt.clientY + "px";
      this.controlPanel.nativeElement.style.left = evt.clientX + "px";

      this.textService.getSynonims(selection).subscribe(synonims => {
        if (synonims) {
          this.synonims = synonims.sort((s1, s2) => s2.score - s1.score);
        } else {
          this.synonims = [];
        }
      });
    } else {
      this.controlPanel.nativeElement.classList.remove("show");
    }
  }

  handleClick(evt) {
    evt.stopPropagation();
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormatterModel } from "src/app/models/formatter.model";
import { FORMAT_TYPES } from "src/app/enum/formatTypes.enum";
import { TextService } from "src/app/services/text-service/text.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "save-result-component",
  template: `
    <span [ngClass]="{ success: success }">
      <ng-container *ngIf="success">Saved Successfully!</ng-container>
    </span>
  `,
  styles: [
    `
      .success {
        color: lightGreen;
      }
    `
  ]
})
export class SaveResultComponent {
  success = true;
}

@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"]
})
export class ControlPanelComponent {
  protected actions: FormatterModel[] = [
    new FormatterModel(FORMAT_TYPES.bold),
    new FormatterModel(FORMAT_TYPES.italic),
    new FormatterModel(FORMAT_TYPES.underline),
    new FormatterModel(FORMAT_TYPES.strikeThrough),
    new FormatterModel(FORMAT_TYPES.color)
  ];

  constructor(
    private textService: TextService,
    private _snackBar: MatSnackBar
  ) {}

  showSaveResult() {
    this._snackBar.openFromComponent(SaveResultComponent, {
      duration: 3000
    });
  }

  save() {
    const content = document.getElementById("file");
    this.textService.saveText(content.innerHTML);
    this.showSaveResult();
  }
}

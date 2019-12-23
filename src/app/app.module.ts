import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FileComponent } from "./components/file/file.component";
import {
  ControlPanelComponent,
  SaveResultComponent
} from "./components/control-panel/control-panel.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextService } from "./services/text-service/text.service";
import { FooterComponent } from "./components/footer/footer.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ActionComponent } from "./components/action/action.component";
import { PoppableControlPanelComponent } from "./components/poppable-control-panel/poppable-control-panel.component";
import { ColorPickerModule } from "ngx-color-picker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/");
}

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    ControlPanelComponent,
    HeaderComponent,
    FooterComponent,
    ActionComponent,
    PoppableControlPanelComponent,
    SaveResultComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ColorPickerModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  entryComponents: [SaveResultComponent],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {}

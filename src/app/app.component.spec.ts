import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FileComponent } from './file/file.component';
import { FooterComponent } from './footer/footer.component';
import { TextService } from './text-service/text.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ControlPanelComponent,
        HeaderComponent,
        FooterComponent,
        FileComponent
      ],
      providers: [TextService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'ae-frontend-texteditor-angular-skeleton'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Simple Text Editor');
  }));
});

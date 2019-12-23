import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppableControlPanelComponent } from './poppable-control-panel.component';

describe('PoppableControlPanelComponent', () => {
  let component: PoppableControlPanelComponent;
  let fixture: ComponentFixture<PoppableControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoppableControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoppableControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

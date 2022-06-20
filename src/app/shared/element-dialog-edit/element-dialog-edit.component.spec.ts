import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogEditComponent } from './element-dialog-edit.component';

describe('ElementDialogEditComponent', () => {
  let component: ElementDialogEditComponent;
  let fixture: ComponentFixture<ElementDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

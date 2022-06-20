import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogDeleteComponent } from './element-dialog-delete.component';

describe('ElementDialogDeleteComponent', () => {
  let component: ElementDialogDeleteComponent;
  let fixture: ComponentFixture<ElementDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

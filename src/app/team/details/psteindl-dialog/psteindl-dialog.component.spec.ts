import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsteindlDialogComponent } from './psteindl-dialog.component';

describe('PsteindlDialogComponent', () => {
  let component: PsteindlDialogComponent;
  let fixture: ComponentFixture<PsteindlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsteindlDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsteindlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

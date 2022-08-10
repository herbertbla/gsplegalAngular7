import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzDialogComponent } from './datenschutz-dialog.component';

describe('DatenschutzDialogComponent', () => {
  let component: DatenschutzDialogComponent;
  let fixture: ComponentFixture<DatenschutzDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenschutzDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatenschutzDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

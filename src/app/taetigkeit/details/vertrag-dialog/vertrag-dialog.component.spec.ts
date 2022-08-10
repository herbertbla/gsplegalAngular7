import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragDialogComponent } from './vertrag-dialog.component';

describe('VertragDialogComponent', () => {
  let component: VertragDialogComponent;
  let fixture: ComponentFixture<VertragDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertragDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

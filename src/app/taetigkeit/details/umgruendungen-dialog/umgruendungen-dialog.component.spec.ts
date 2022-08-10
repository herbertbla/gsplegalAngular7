import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmgruendungenDialogComponent } from './umgruendungen-dialog.component';

describe('UmgruendungenDialogComponent', () => {
  let component: UmgruendungenDialogComponent;
  let fixture: ComponentFixture<UmgruendungenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmgruendungenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmgruendungenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

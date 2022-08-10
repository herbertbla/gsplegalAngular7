import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesellschaftsrechtDialogComponent } from './gesellschaftsrecht-dialog.component';

describe('GesellschaftsrechtDialogComponent', () => {
  let component: GesellschaftsrechtDialogComponent;
  let fixture: ComponentFixture<GesellschaftsrechtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GesellschaftsrechtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GesellschaftsrechtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersDialogComponent } from './mergers-dialog.component';

describe('MergersDialogComponent', () => {
  let component: MergersDialogComponent;
  let fixture: ComponentFixture<MergersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

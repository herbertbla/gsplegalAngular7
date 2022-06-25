import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgargerDialogComponent } from './bgarger-dialog.component';

describe('BgargerDialogComponent', () => {
  let component: BgargerDialogComponent;
  let fixture: ComponentFixture<BgargerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgargerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgargerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

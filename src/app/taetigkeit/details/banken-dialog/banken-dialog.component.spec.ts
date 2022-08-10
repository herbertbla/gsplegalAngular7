import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankenDialogComponent } from './banken-dialog.component';

describe('BankenDialogComponent', () => {
  let component: BankenDialogComponent;
  let fixture: ComponentFixture<BankenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

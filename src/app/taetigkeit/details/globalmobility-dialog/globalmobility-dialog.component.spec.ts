import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalmobilityDialogComponent } from './globalmobility-dialog.component';

describe('GlobalmobilityDialogComponent', () => {
  let component: GlobalmobilityDialogComponent;
  let fixture: ComponentFixture<GlobalmobilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalmobilityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalmobilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

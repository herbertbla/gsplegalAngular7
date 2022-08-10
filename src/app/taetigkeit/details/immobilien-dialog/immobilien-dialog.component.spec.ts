import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilienDialogComponent } from './immobilien-dialog.component';

describe('ImmobilienDialogComponent', () => {
  let component: ImmobilienDialogComponent;
  let fixture: ComponentFixture<ImmobilienDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmobilienDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmobilienDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitsrechtDialogComponent } from './arbeitsrecht-dialog.component';

describe('ArbeitsrechtDialogComponent', () => {
  let component: ArbeitsrechtDialogComponent;
  let fixture: ComponentFixture<ArbeitsrechtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbeitsrechtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbeitsrechtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

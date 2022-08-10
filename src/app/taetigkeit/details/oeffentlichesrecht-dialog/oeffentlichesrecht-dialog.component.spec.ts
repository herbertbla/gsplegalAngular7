import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeffentlichesrechtDialogComponent } from './oeffentlichesrecht-dialog.component';

describe('OeffentlichesrechtDialogComponent', () => {
  let component: OeffentlichesrechtDialogComponent;
  let fixture: ComponentFixture<OeffentlichesrechtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeffentlichesrechtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeffentlichesrechtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

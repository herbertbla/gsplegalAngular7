import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FspallingerDialogComponent } from './fspallinger-dialog.component';

describe('FspallingerDialogComponent', () => {
  let component: FspallingerDialogComponent;
  let fixture: ComponentFixture<FspallingerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FspallingerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FspallingerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

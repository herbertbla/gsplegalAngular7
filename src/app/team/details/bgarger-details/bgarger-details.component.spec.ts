import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgargerDetailsComponent } from './bgarger-details.component';

describe('BgargerDetailsComponent', () => {
  let component: BgargerDetailsComponent;
  let fixture: ComponentFixture<BgargerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgargerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgargerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaetigkeitComponent } from './taetigkeit.component';

describe('TaetigkeitComponent', () => {
  let component: TaetigkeitComponent;
  let fixture: ComponentFixture<TaetigkeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaetigkeitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaetigkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

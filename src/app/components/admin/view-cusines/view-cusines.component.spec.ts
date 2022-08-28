import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCusinesComponent } from './view-cusines.component';

describe('ViewCusinesComponent', () => {
  let component: ViewCusinesComponent;
  let fixture: ComponentFixture<ViewCusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCusinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodUserComponent } from './view-food-user.component';

describe('ViewFoodUserComponent', () => {
  let component: ViewFoodUserComponent;
  let fixture: ComponentFixture<ViewFoodUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

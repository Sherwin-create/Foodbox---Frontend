import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCusinesComponent } from './add-cusines.component';

describe('AddCusinesComponent', () => {
  let component: AddCusinesComponent;
  let fixture: ComponentFixture<AddCusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCusinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

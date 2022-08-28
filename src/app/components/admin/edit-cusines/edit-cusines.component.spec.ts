import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCusinesComponent } from './edit-cusines.component';

describe('EditCusinesComponent', () => {
  let component: EditCusinesComponent;
  let fixture: ComponentFixture<EditCusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCusinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

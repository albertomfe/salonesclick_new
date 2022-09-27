import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeFoodComponent } from './lounge-food.component';

describe('LoungeFoodComponent', () => {
  let component: LoungeFoodComponent;
  let fixture: ComponentFixture<LoungeFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoungeFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentLoungeComponent } from './allotment-lounge.component';

describe('AllotmentLoungeComponent', () => {
  let component: AllotmentLoungeComponent;
  let fixture: ComponentFixture<AllotmentLoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotmentLoungeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

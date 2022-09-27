import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentServicesComponent } from './allotment-services.component';

describe('AllotmentServicesComponent', () => {
  let component: AllotmentServicesComponent;
  let fixture: ComponentFixture<AllotmentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotmentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionsComponent } from './sesions.component';

describe('SesionsComponent', () => {
  let component: SesionsComponent;
  let fixture: ComponentFixture<SesionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

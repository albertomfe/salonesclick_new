import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeProviderComponent } from './be-provider.component';

describe('BeProviderComponent', () => {
  let component: BeProviderComponent;
  let fixture: ComponentFixture<BeProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

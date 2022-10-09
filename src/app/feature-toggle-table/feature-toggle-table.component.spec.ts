import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureToggleTableComponent } from './feature-toggle-table.component';

describe('FeatureToggleTableComponent', () => {
  let component: FeatureToggleTableComponent;
  let fixture: ComponentFixture<FeatureToggleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureToggleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureToggleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

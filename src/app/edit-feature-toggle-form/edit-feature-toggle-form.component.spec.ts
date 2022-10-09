import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureToggleFormComponent } from './edit-feature-toggle-form.component';

describe('EditFeatureToggleFormComponent', () => {
  let component: EditFeatureToggleFormComponent;
  let fixture: ComponentFixture<EditFeatureToggleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeatureToggleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFeatureToggleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

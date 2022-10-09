import { Component } from '@angular/core';
import {Feature} from "./models/feature";
import {FeatureToggleService} from "./services/feature-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'feature-toggle';

  isFormVisible = false;
  feature: Feature;
  isAdd = false;
  activeFeatures: Feature[];
  inactiveFeatures: Feature[];

  constructor(private featureToggleService: FeatureToggleService) {
    this.activeFeatures = [];
    this.loadFeatures();
  }

  handleAddClick() {
    this.isFormVisible = true;
    this.isAdd = true;
  }

  handleEditClick(feature: Feature) {
    this.isFormVisible = true;
    this.feature = feature;
  }

  handleArchiveClick(feature: Feature) {
    this.featureToggleService.archive(feature)
      .subscribe((archivedFeature) => {
        console.log("Archived feature: " + archivedFeature);
        this.loadFeatures()
      }, error => {
        console.log("Error archiving feature: " + error);
      });
  }

  handleSubmit() {
    window.location.reload ()
  }

  private loadFeatures() {
    this.featureToggleService.getAll().subscribe(features => {
      this.activeFeatures = features.filter(f => !f.status.archived);
      this.inactiveFeatures = features.filter(f => f.status.archived);
    });
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Feature} from "../models/feature";

@Component({
  selector: 'app-feature-toggle-table',
  templateUrl: './feature-toggle-table.component.html',
  styleUrls: ['./feature-toggle-table.component.less']
})
export class FeatureToggleTableComponent implements OnInit {

  @Input() features: Feature[];
  @Output() editFeature: EventEmitter<Feature> = new EventEmitter<Feature>();
  @Output() archiveFeature: EventEmitter<Feature> = new EventEmitter<Feature>();

  constructor() { }

  ngOnInit(): void {
    if (this.features == null) {
      this.features = [];
    }
  }

  archiveToggle(feature: Feature) {
    this.archiveFeature.emit(feature);
  }

  editToggle(feature: Feature) {
    this.editFeature.emit(feature);
  }
}

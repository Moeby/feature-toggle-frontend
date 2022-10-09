import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Feature} from "../models/feature";
import {FeatureToggleService} from "../services/feature-toggle.service";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-edit-feature-toggle-form',
  templateUrl: './edit-feature-toggle-form.component.html',
  styleUrls: ['./edit-feature-toggle-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditFeatureToggleFormComponent implements OnInit {

  @Input() feature: Feature;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  people: any[];

  constructor(private personService: PersonService, private featureToggleService: FeatureToggleService) {
  }

  ngOnInit(): void {
    if (this.feature == null) {
      this.feature = {status: {}} as Feature;
    }

    this.personService.getAll().subscribe(people => {
      this.people = people;
    });
  }

  save(feature: Feature) {
    this.featureToggleService.add(feature).subscribe();
    this.submit.emit();
  }
}

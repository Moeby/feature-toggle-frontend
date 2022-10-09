import {Injectable} from '@angular/core';
import {Feature} from "../models/feature";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  private url = "http://localhost:8080/api/v1/features"; // COMMENT: Usually I'd use env specific settings for this

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  add(feature: Feature) : Observable<Feature> {
    return this.http.post(this.url, feature, this.httpOptions)
      .pipe(
        map((res: any) =>
        {
          return this.convertFeature(res);
        }
      ));
  }

  getAll(): Observable<Feature[]> {
    return this.http.get(this.url)
      .pipe(
        map((resList: any) =>
          resList.map((res: any) => {
            return this.convertFeature(res);
          })
        )
      );
  }

  archive(feature: Feature): Observable<Feature> {
    return this.http.post(`${this.url}/${feature.id}/archive`, null, this.httpOptions)
      .pipe(
        map((res: any) => this.convertFeature(res))
      );
  }

  private convertFeature(res: any): Feature {
    let status = {
      overallActive: res.status.overallActive,
      selected: res.status.selected,
      expired: res.status.expired,
      archived: res.status.archived
    };
    return {
      id: res.id,
      displayName: res.displayName,
      technicalName: res.technicalName,
      description: res.description,
      expirationDate: res.expirationDate,
      status: status,
      peopleIds: res.peopleIds
    };
  }

}

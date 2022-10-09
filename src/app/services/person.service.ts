import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = "http://localhost:8080/api/v1/people";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.http.get(this.url)
      .pipe(
        map((res: any) =>
          res.map((person: any) => {
            return {
              id: person.id,
              email: person.email,
            };
          })
        )
      );

  }
}

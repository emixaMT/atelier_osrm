import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {extractTrace, Trace} from './trace';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  url = 'http://router.project-osrm.org/route/v1/driving/0.683333,47.383333;0.668914,47.392923?overview=full&geometries=geojson';
  constructor(private http: HttpClient) { }

  getTrace(): Observable<Trace> {
    return this.http.get<any>(this.url).pipe(
      map(result => {
        console.log(result);
        return extractTrace(result.routes[0]);
      })
    );
  }
}

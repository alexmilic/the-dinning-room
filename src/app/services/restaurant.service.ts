import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RestaurantList } from '../models/restaurant-list.model';

const baseUrl = 'http://localhost:3000/api/restaurants'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants() {
    return this.http.get(baseUrl).pipe(
      map((data:any) => {
        return new RestaurantList(data);
      })
    )
  }
}

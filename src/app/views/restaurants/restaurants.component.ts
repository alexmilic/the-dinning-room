import { Component, OnInit } from '@angular/core';
import { RestaurantList } from 'src/app/models/restaurant-list.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(private service: RestaurantService) { }

  restaurants: RestaurantList = new RestaurantList();

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    return this.service.getAllRestaurants().subscribe({
      next: ((result) => {
        this.restaurants = result;
      }),
      error: ((error) => console.error(error))
    })
  }

}

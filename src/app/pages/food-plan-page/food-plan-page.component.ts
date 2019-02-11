import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../interfaces';
import { CitiesService } from '../../services';
import { FOOD_PAGE_MESSAGES } from '../../constants';

@Component({
  selector: 'app-food-plan-page',
  templateUrl: './food-plan-page.component.html',
  styleUrls: ['./food-plan-page.component.scss']
})
export class FoodPlanPageComponent implements OnInit {

  public FOOD_PAGE_MESSAGES = FOOD_PAGE_MESSAGES;

  public foods = [
    {value: 'steak-0', viewValue: 'Breakfast'},
    {value: 'pizza-1', viewValue: 'Lunch'},
    {value: 'tacos-2', viewValue: 'Dinner'}
  ];

  public priceCategory = [
    {value: 'low-cost', viewValue: 'Low price'},
    {value: 'middle-cost', viewValue: 'Middle price'},
    {value: 'High-cost', viewValue: 'High price'},
  ];

  public people = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
  ];

  public cityId = this.router.snapshot.params['id'];
  public currentCity: City;

  constructor(private router: ActivatedRoute,
              private citiesService: CitiesService) {
  }

  public ngOnInit(): void {
    this.citiesService.getCityById(this.cityId).subscribe(
      (res: City) => this.currentCity = res
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ENDPOINTS, ROUTING_PATH_PARAMS, FOOD_FORM_CONTROLS } from '../../constants';
import { City, Meals } from '../../interfaces';
import { CitiesService, FoodService } from '../../services';

@Component({
  selector: 'app-food-plan-page',
  templateUrl: './food-plan-page.component.html',
  styleUrls: ['./food-plan-page.component.scss']
})
export class FoodPlanPageComponent implements OnInit {

  public meals;
  public FOOD_FORM_CONTROLS = FOOD_FORM_CONTROLS;

  public totalPrice: number;

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

  public cityId = this.router.snapshot.params[ROUTING_PATH_PARAMS.ID];
  public currentCity: City;

  public foodCounterForm: FormGroup = this.fb.group({
    [FOOD_FORM_CONTROLS.MEAL_TYPE_SELECTOR]: ['', {validators: [Validators.required]}],
    [FOOD_FORM_CONTROLS.MEAL_PRICE_LEVEL_SELECTOR]: ['', {validators: [Validators.required]}],
    [FOOD_FORM_CONTROLS.MEAL_NUMBER_OF_PEOPLE]: ['', {validators: [Validators.required]}],
  });

  constructor(private router: ActivatedRoute,
              private citiesService: CitiesService,
              private foodService: FoodService,
              private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.citiesService.getCityById(this.cityId).subscribe(
      (res: City) => this.currentCity = res
    );

    this.foodService.getFoodByCityId(this.cityId).subscribe(res => console.log(res));
    this.foodService.getMeals().subscribe(m => this.meals = m);
  }

  public calculateTotalPrice() {
    this.foodService.getPriceForMeal(this.mealTypeSelector.value)
      .subscribe(res => console.log(res));
    console.log(this.foodCounterForm.value);


    return this.foodCounterForm.value;
  }

  private get mealTypeSelector(): AbstractControl {
    return this.foodCounterForm.controls[this.FOOD_FORM_CONTROLS.MEAL_TYPE_SELECTOR];
  }

  private get mealPriceLevelSelector(): AbstractControl {
    return this.foodCounterForm.controls[this.FOOD_FORM_CONTROLS.MEAL_PRICE_LEVEL_SELECTOR];
  }
}

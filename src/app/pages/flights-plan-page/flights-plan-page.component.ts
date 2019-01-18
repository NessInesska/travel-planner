import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { City } from '../../interfaces';

@Component({
  selector: 'app-flights-plan-page',
  templateUrl: './flights-plan-page.component.html',
  styleUrls: ['./flights-plan-page.component.scss']
})
export class FlightsPlanPageComponent implements OnInit {

  //TODO: integration with backend
  public value = '';
  public value2 = '';
  public arr = new Array(5);
  public panelOpenState = false;

  public myGroup : FormGroup = this.formBuild.group({
    myControl: new FormControl(),
    myControl2: new FormControl()
  });

  public options: City[] = [
    {name: 'London'},
    {name: 'Paris'},
    {name: 'Oslo'}
  ];

  public filteredOptions: Observable<City[]>;

  constructor(private formBuild: FormBuilder) {
  }

  public ngOnInit() {
    this.filteredOptions = (this.myControl.valueChanges || this.myControl2.valueChanges)
      .pipe(
        startWith<string | City>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  public get myControl(): AbstractControl {
    return this.myGroup.controls.myControl;
  }

  public get myControl2(): AbstractControl {
    return this.myGroup.controls.myControl2;
  }

  public onSwapClick(): void {
    let tmp;

    if (this.value && this.value2) {
      tmp = this.value;
      this.value = this.value2;
      this.value2 = tmp;
    }
  }

  public displayFn(user?: City): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

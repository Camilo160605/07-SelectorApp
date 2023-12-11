import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/contries.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public myForm : FormGroup = this.fb.group({
    region:['',[Validators.required]],
    country:['',[Validators.required]],
    fronteras:['',[Validators.required]],
  })


  constructor( 
    private fb : FormBuilder,
    private countriesService : CountriesService,
    ){}

  ngOnInit(): void {
    this.onRegionChanged();
  }

  onSave():void {}

  get regions() : Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged() : void {
    this.myForm.get('region')!.valueChanges
    //Para siempre detectar los cambios en el formulario con un control especifico
    .pipe(
      switchMap(region => this.countriesService.getCountriesByRegion( region ))
    )
    .subscribe( countries => {
      console.log({ countries });
    })
  }
}

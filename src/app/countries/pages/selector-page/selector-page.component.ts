import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent {

  public myForm : FormGroup = this.fb.group({
    region:['',[Validators.required]],
    country:['',[Validators.required]],
    fronteras:['',[Validators.required]],
  })


  constructor( private fb : FormBuilder ){}

  onSave():void {
    
  }

}

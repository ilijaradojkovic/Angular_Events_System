import { Directive } from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[validateLocation]',
  //dodajemo nas validator u ostale,ovo multi je da ne overriduje nego da doda u listu
  providers: [{provide:NG_VALIDATORS,useExisting:LocationDirective,multi:true}]
})
export class LocationDirective implements  Validator{

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: FormGroup): {[key:string]:any} | null {

    let addressCOntrol=control.controls['address']
    let cityCOntrol=control.controls['city']
    let countryCOntrol=control.controls['country']
    let onlineUrlCOntrol=(<FormGroup>control.root).controls['onlineUrl']

  if((addressCOntrol && addressCOntrol.value && cityCOntrol && cityCOntrol.value && countryCOntrol && countryCOntrol.value)||(onlineUrlCOntrol && onlineUrlCOntrol.value))
    return null

    return {validateLocation:false}
  }

}

import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  changeStep : EventEmitter<number> = new EventEmitter<number>(); 

  userName : string | undefined;
  email : string = '';
  phone : number = 0;

  yearlyPlanSelected : boolean = false;
  planSelectedName : string = '';
  planSelectedPrice : number | undefined;

  addonsList : any[] | undefined;

  constructor() { }

  changeToStep(step: number){
    console.log("changing to step "+step);

    this.changeStep.emit(step);
  }

  calcTotal() : number{
    let total : number = 0;

    total += this.planSelectedPrice!;

    if(this.yearlyPlanSelected){
      this.addonsList?.forEach(el =>{
        total+=el.yearlyPrice;
      });
    }else{
      this.addonsList?.forEach(el => {
        total+=el.monthlyPrice;
      });
    }
    
    return total;
  }
}

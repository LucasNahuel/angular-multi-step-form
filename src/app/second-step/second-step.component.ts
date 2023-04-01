import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  formService : FormInfoService | undefined;
  
  plans = [{
      name : "Arcade",
      icon : "../../assets/images/icon-arcade.svg",
      monthlyPrice : 9,
      yearlyPrice : 90,
      yearlyOffer: "2 months free"
    },{
      name : "Advanced",
      icon : "../../assets/images/icon-advanced.svg",
      monthlyPrice: 12,
      yearlyPrice : 120,
      yearlyOffer : "2 months free"
    },{
      name : "Pro",
      icon : "../../assets/images/icon-pro.svg",
      monthlyPrice : 15,
      yearlyPrice : 150,
      yearlyOffer : "2 months free"
    }
  ];

  yearlyPlanSelected : boolean = false; 
  planSelected : any | undefined;
  showError = false;

  constructor(formService : FormInfoService) {
    this.formService = formService;
    
   }

  ngOnInit(): void {
  }

  nextStep(){


    //if a plan was selected, go to next step
    if(this.planSelected != undefined){

      //pass to the formService the info of the selected plan
      this.formService!.planSelectedName = this.planSelected.name;
      this.formService!.yearlyPlanSelected = this.yearlyPlanSelected;
      //if yearly price is selected, we pass the yearly price, if not, the monthly price
      if(this.formService?.yearlyPlanSelected == true){
        this.formService!.planSelectedPrice = this.planSelected.yearlyPrice;
      }else{
        this.formService!.planSelectedPrice = this.planSelected.monthlyPrice;
      }


      //go next step
      this.formService?.changeToStep(3);
    }else{
      //if no plan is selected, we show an error
      this.showError = true;
    }
  }

  togglePlanType(){
    this.yearlyPlanSelected = !this.yearlyPlanSelected;
  }

  selectPlanType(plan : any){
    this.planSelected = plan;
    this.showError = false;
  }

  goBack(event : any){
    event.preventDefault();
    this.formService?.changeToStep(1);
  }

}


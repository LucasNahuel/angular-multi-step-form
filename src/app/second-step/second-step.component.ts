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
  planSelected = null;

  constructor(formService : FormInfoService) {
    this.formService = formService;
    
   }

  ngOnInit(): void {
  }

  nextStep(){
    console.log(this.plans);
    this.formService?.changeToStep(3);
  }

  togglePlanType(){
    this.yearlyPlanSelected = !this.yearlyPlanSelected;
  }

  selectPlanType(plan : any){
    this.planSelected = plan;
  }

  goBack(event : any){
    event.preventDefault();
    this.formService?.changeToStep(1);
  }

}


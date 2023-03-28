import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  @Output() changeStep = new EventEmitter<string>();

  
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

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(){
    console.log(this.plans);
  }

  togglePlanType(){
    this.yearlyPlanSelected = !this.yearlyPlanSelected;

    console.log(this.yearlyPlanSelected);
  }

  selectPlanType(plan : any){
    this.planSelected = plan;
  }

  goBack(event : any){
    event.preventDefault();
    console.log("called back from second step");
    this.changeStep.emit("first-step");
  }

}


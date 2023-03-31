import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {

  formService : FormInfoService | undefined;

  addons = [
    {
      name : "Online services",
      description: "Access to multiplayer games",
      selected: false,
      monthlyPrice: 1
    },
    {
      name : "Larger Storage",
      description: "Extra 1TB of cloud save",
      selected: false,
      monthlyPrice: 2
    },
    {
      name : "Customizable profile",
      description: "Custom theme on your profile",
      selected: false,
      monthlyPrice: 2
    }
  ]

  constructor(formService : FormInfoService) {
    this.formService = formService;
  }

  ngOnInit(): void {
  }

  goBack(){

    this.formService?.changeToStep(2);
  }

  nextStep(){
    this.formService?.changeToStep(4);
  }

  toggleAddon(index : number){
    this.addons[index].selected = !this.addons[index].selected;
  }

}

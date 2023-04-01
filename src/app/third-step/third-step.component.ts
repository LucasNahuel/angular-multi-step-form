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
      monthlyPrice: 1,
      yearlyPrice: 10
    },
    {
      name : "Larger Storage",
      description: "Extra 1TB of cloud save",
      selected: false,
      monthlyPrice: 2,
      yearlyPrice: 20
    },
    {
      name : "Customizable profile",
      description: "Custom theme on your profile",
      selected: false,
      monthlyPrice: 2,
      yearlyPrice: 20
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

    //passes the selected addons to the formService
    let selectedAddons = new Array();
    this.addons.forEach(el=>{
      if(el.selected){
        selectedAddons!.push(el);
      }
    });
    this.formService!.addonsList = selectedAddons;
    
    //change to next step
    this.formService?.changeToStep(4);
    
  }

  toggleAddon(index : number){
    this.addons[index].selected = !this.addons[index].selected;
  }

}

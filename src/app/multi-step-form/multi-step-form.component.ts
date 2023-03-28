import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {

  selectedStep = "first-step";

  constructor(formService : FormInfoService) { }

  ngOnInit(): void {
  }

  changeStep(step : string){
    console.log(step);
    
    this.selectedStep = step;
  }

}

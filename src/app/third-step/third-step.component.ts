import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {

  formService : FormInfoService | undefined;

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

}

import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.css']
})
export class FourthStepComponent implements OnInit {

  formService : FormInfoService | undefined;

  constructor(formService : FormInfoService) {
    this.formService = formService;
  }

  ngOnInit(): void {
  }

  goBack(){

    this.formService?.changeToStep(3);
  }

  nextStep(){

    this.formService?.changeToStep(5);
  }
}

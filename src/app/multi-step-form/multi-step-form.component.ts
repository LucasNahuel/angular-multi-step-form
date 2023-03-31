import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent implements OnInit {

  selectedStep : number = 1 ;
  formService : FormInfoService | undefined;

  constructor(formService : FormInfoService) {
    this.formService = formService;
    this.formService.changeStep.subscribe((val) => {
      this.selectedStep = val;
    });
  }

  ngOnInit(): void {
  }

 
}

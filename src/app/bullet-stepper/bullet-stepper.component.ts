import { Component, OnInit } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-bullet-stepper',
  templateUrl: './bullet-stepper.component.html',
  styleUrls: ['./bullet-stepper.component.css']
})
export class BulletStepperComponent implements OnInit {

  actualStep : number = 1;

  formService : FormInfoService | undefined;

  constructor(formService : FormInfoService) {
    this.formService = formService;
    this.formService.changeStep.subscribe((val)=>{
      this.actualStep = val;
    });
  }

  ngOnInit(): void {
  }

}

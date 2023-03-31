import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { FormInfoService } from '../form-info.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {


  formService: FormInfoService | undefined;

  firstForm = new FormGroup({
    name : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    email : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    phone : new FormControl('', [Validators.minLength(1), Validators.maxLength(300), Validators.required])
  });

  constructor(formService : FormInfoService) {

    this.formService = formService;

  }

  ngOnInit(): void {
  }

  nextStep(event : any){
    this.formService?.changeToStep(2);
    event.preventDefault();
  }

}

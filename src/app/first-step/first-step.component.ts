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

    //if the form is valid, go next step
    if(this.firstForm.valid == true){
      
      // pass all form info to the formService for persistance
      this.formService!.userName = this.firstForm.get("name")?.value;
      this.formService!.email = this.firstForm.get("email")?.value;
      this.formService!.phone = this.firstForm.get("phone")?.value;

      //go next step
      this.formService?.changeToStep(2);
      event.preventDefault();
    }else{
      //if form is not valid, we mark the formGroup as touched for showing errors
      this.firstForm.markAllAsTouched();
    }
  }

}

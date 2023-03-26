import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  firstForm = new FormGroup({
    name : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    email : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    phone : new FormControl('', [Validators.minLength(1), Validators.maxLength(300), Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(){
    console.log("next step");
    console.log(this.firstForm.valid);
  }

}

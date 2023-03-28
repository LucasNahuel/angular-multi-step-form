import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  @Output() changeStep = new EventEmitter<string>();

  firstForm = new FormGroup({
    name : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    email : new FormControl('', [ Validators.minLength(1), Validators.maxLength(300), Validators.required]),
    phone : new FormControl('', [Validators.minLength(1), Validators.maxLength(300), Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(event : any){
    this.changeStep.emit("second-step");
    
    event.preventDefault();
  }

}

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {

  firstForm = new FormGroup({
    name : new FormControl('e.g. Stephen King', [ Validators.min(1), Validators.max(300), Validators.required]),
    email : new FormControl('e.g. stephenking@lorem.com', [ Validators.min(1), Validators.max(300), Validators.required]),
    phone : new FormControl('e.g. +1 234 567 890', [Validators.min(1), Validators.max(300), Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}

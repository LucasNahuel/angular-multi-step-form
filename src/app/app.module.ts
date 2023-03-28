import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { BulletStepperComponent } from './bullet-stepper/bullet-stepper.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SecondStepComponent } from './second-step/second-step.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    BulletStepperComponent,
    FirstStepComponent,
    SecondStepComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

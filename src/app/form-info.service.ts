import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  changeStep : EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }

  changeToStep(step: number){
    console.log("changing to step "+step);

    this.changeStep.emit(step);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logging (name) : void {
    console.log("hello services "+ name);
  }
}

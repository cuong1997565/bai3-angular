import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../services/logging.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  private _loggingService : LoggingService;

  constructor(_loggingService : LoggingService)
  {
      this._loggingService = _loggingService;
  }

  ngOnInit() {
  }

  onClick() : void {
    this.logging();
  }

  logging() : void
  {
    this._loggingService.logging(SecondComponent);
  }
}

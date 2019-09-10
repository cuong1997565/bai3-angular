import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../services/logging.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
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
    this._loggingService.logging(FirstComponent);
  }

}

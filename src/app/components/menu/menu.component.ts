import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public routerService : Router
  ) { }

  ngOnInit() {
  }

  navigate(url) : void {
      // this.routerService.navigate([url]);
      this.routerService.navigateByUrl(url);
  }

}

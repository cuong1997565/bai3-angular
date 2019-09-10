import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product : Product = null;
  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService
  ) { }

  ngOnInit() {
    // this.handleParamsRouteBySnapshop();
    this.handleParams();
  }

  handleParams(){
    this.activatedRoute.params.subscribe(data => {
       this.product = this.productService.getProductById(data['id']);
    })
  }


  handleParamsRouteBySnapshop() : void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
  }
}

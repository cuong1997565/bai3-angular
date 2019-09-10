import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.class';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products : Product[] = [];

  constructor(
    public productService : ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}

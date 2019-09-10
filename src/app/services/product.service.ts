import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products : Product[] = [
    {
      id : 1,
      name : "Iphone 7 Plus",
      price : 170000,
      status : true
    },
    {
      id : 2,
      name : "Samsung glaxy s7",
      price : 300000,
      status : false
    },
    {
      id : 3,
      name : "Oppo f1s",
      price : 5000000,
      status : true
    }
  ];

  constructor() { }

  getAllProducts()
  {
    return this.products;
  }

  getProductById(id : number)
  {
      let result = null;
      for (var i = 0; i < this.products.length; i++)
      {
        if(this.products[i].id == id)
        {
          result = this.products[i];
          break;
        }
      }
      return result;
  }
}

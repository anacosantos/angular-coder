import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product
  
  constructor() { }

  ngOnInit(): void {
  }

  DeleteProduct(): void {

  }

  cancel(): void {

  }

}

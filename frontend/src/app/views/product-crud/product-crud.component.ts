import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';
import { Router } from'@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    console.log('Navegando...')
  }
}

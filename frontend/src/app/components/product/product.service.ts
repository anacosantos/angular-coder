import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl ="http://localhost:3001/products"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void{
    this.snackBar.open(msg,'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product){
    return this.http.post()
  }
}

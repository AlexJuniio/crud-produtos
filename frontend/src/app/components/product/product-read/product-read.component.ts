import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
  
export class ProductReadComponent implements OnInit {
  ;
  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

    deleteProduct(id: string){
      this.productService.delete(id).subscribe( () => { this.productService.showMessage('Produto deletado com sucesso')
      this.loadProducts()
      })
  }
}

import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  product: Product = {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
   
  }


  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    }) 
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}

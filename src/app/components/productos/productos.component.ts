import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public lstProducts: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router, private storeService: StoreServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(p => {
      this.lstProducts = p;
      console.log(this.lstProducts);
    });
  }

  agregarFavorito(item: IProduct){
    console.log(item)
    if (item.favorito == false){
      this.storeService.agregarFavorito(item);
    }
  }

  quitarFavorito(item: IProduct){
    if (item.favorito == true){
      
    }
  }

}
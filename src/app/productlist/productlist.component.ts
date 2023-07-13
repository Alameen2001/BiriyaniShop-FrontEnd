import { Component, OnInit } from '@angular/core';
import { BiriyaniService } from '../service/biriyani.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  biriyani:any
  categories:any
  
  constructor(private service:BiriyaniService){

  }
  ngOnInit(): void {
    this.service.listCategories().subscribe(res=>this.categories=res)
    this.service.getAllBiriyani().subscribe(res=>this.biriyani=res)
  }
  getProductByCategory(cat:any){
    console.log(cat);
    
    this.service.filterProductsByCategory(cat).subscribe(res=>this.biriyani=res)
  }


}

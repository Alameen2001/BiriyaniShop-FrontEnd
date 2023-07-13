import { Component, OnInit } from '@angular/core';
import { BiriyaniService } from '../service/biriyani.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{
  carts:any
  constructor(private service:BiriyaniService){

  }
  ngOnInit(): void {
    this.service.listCart().subscribe(res=>this.carts=res
    )
    
  }

}

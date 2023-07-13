import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { BiriyaniService } from '../service/biriyani.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders:any
  id:any
  
  constructor(private service:BiriyaniService,private router:Router){

  }
  ngOnInit(): void {
    this.service.listOrder().subscribe(res=>this.orders=res)
    
  }

  cancelOrder(id:any){
    console.log(id);
    
     this.service.cancelOrder(id).subscribe(res=>this.ngOnInit())

      

  }






}
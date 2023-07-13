import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { BiriyaniService } from '../service/biriyani.service';
import {FormGroup,FormControl} from '@angular/forms'

 

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit{
  id:any
  biriyani:any
  reviewForm=new FormGroup({
    comment:new FormControl(),
    rating:new FormControl() 
  })
  addReview(){
    let formData=this.reviewForm.value
    this.service.addReview(this.id,formData).subscribe(res=>this.ngOnInit())
    
  } 
   
  constructor(private route:ActivatedRoute,private service:BiriyaniService,private router:Router){
    this.id=this.route.snapshot.params['id']
    console.log(this.id);
    
  }
  ngOnInit(): void {
    this.service.getBiriyaniDetail(this.id).subscribe(res=>this.biriyani=res
    )
    
  }
  cartAdd(){
    this.service.addToCart(this.id).subscribe(res=>
      this.router.navigateByUrl("products"))
  }
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Subject,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BiriyaniService {

  baseUrl=`http://127.0.0.1:8000/api`
  headers=new HttpHeaders({
    "content-type":"application/json"
  })
  private _reloadrequired=new Subject<void>()
 get reloadRequired(){
  return this._reloadrequired
 }

  constructor(private http:HttpClient) { 

  }
  createAccount(data:any){
    return this.http.post(`${this.baseUrl}/register/`,data,{headers:this.headers})

  }

  authorize(data:any){
    return this.http.post(`${this.baseUrl}/token/`,data)

  }
  getAllBiriyani(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/biriyani/`,{"headers":header})
  }
  getBiriyaniDetail(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/biriyani/${id}/`,{"headers":header})
  }

  // http://127.0.0.1:8000/api/biriyani/:id/add_to_cart/

  addToCart(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })    
    return this.http.post(`${this.baseUrl}/biriyani/${id}/add_to_cart/`,null,{"headers":header}).pipe(
      tap(()=>this.reloadRequired.next()))  }

  listCart(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })      
    return this.http.get(`${this.baseUrl}/carts/`,{"headers":header})
  }

  placeOrder(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })     
    return this.http.post(`${this.baseUrl}/biriyani/${id}/place_order/`,data,{"headers":header})
  }

  listOrder(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })      
    return this.http.get(`${this.baseUrl}/orders/`,{"headers":header})
  }
  
  addReview(id:any,data:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })         
    return this.http.post(`${this.baseUrl}/biriyani/${id}/add_review/`,data,{"headers":header})
   
  }
  isAuthenticated(){
    return "token" in localStorage
  }
  listCategories(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/biriyani/categories/`,{"headers":header})

  }
  filterProductsByCategory(cat:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/biriyani/?category=${cat}`,{"headers":header})

  }
  
  cancelOrder(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })

    return this.http.delete(`${this.baseUrl}/orders/${id}/cancel_order/`,{"headers":header})



  }
}

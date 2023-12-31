import { Component, OnInit } from '@angular/core';
import { BiriyaniService } from './service/biriyani.service';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'biriyanishopfrontend';
  isLoggedIn=false
  showNav:boolean=true


  constructor(private service:BiriyaniService,private router:Router){
  this.isLoggedIn=this.service.isAuthenticated()

  }
  ngOnInit(): void {
    this.router.events.subscribe(
      event=>{
        if (event instanceof NavigationEnd){
          console.log(event.url)  
          this.showNav=!['/','/register'].includes(event.url)
          console.log(this.showNav)
          
          
        }
      }
    )
  }
  
}

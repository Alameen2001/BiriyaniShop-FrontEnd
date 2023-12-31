import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { BiriyaniService } from '../service/biriyani.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  regForm=new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private service:BiriyaniService,private router:Router){

  }
  register(){
    let formData=this.regForm.value
    this.service.createAccount(formData).subscribe(res=>{
      this.router.navigateByUrl("")
    }
    )
    
  }
  

}

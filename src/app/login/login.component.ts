import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {NewsApiServiceService} from '../service/news-api-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=""
  password=""

  loginFrom=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(4)]]
  })

  constructor(private fb:FormBuilder,private ds:NewsApiServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginFrom.valid){
      var username=this.loginFrom.value.username
      var password=this.loginFrom.value.password
        this.ds.login(username,password).subscribe((result:any)=>{
          if(result){
            // alert(result.message)
            localStorage.setItem("CurrentUser",result.currentUser)
            localStorage.setItem("CurrentUserMobile",result.currentMobile)
            this.route.navigateByUrl("top-heading")
          }
        },(result)=>{
          alert(result.error.message)
        })
    }
    else{
      alert("Invalid Form")
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NewsApiServiceService} from '../service/news-api-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:NewsApiServiceService,private router:Router) { }

  registerForm=this.fb.group({
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(4)]]
  })

  ngOnInit(): void {
  }

register(){
  if(this.registerForm.valid){
    var mobile=this.registerForm.value.mobile
    var email=this.registerForm.value.email
    var username=this.registerForm.value.username
    var password=this.registerForm.value.password
    this.ds.register(mobile,email,username,password).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl("")
    },(result)=>{
      alert(result.error.message)
    })
  }
  else{
    alert("Please fill all fileds")
  }
}

}

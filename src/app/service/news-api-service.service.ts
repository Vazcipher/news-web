import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor( private http:HttpClient ) { }


  // newsApi="https://newsapi.org/v2/top-headlines?country=in&apiKey=c8ff5611916140b3a20691c2a4af4a6f";
  // sportApi="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  entertainmentApi="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  technologyApi="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  
  topHeading=()=>{
    return this.http.get("http://localhost:3200/topHeading",options)
  }
 
  sportNews=()=>{
    return this.http.get("http://localhost:3200/sportsNews",options)
  }

  entertainmentNews=()=>{
    return this.http.get("http://localhost:3200/entertainmentNews",options)
  }

  technologyNews=()=>{
    return this.http.get("http://localhost:3200/technologyNews",options)
  }

  login=(username:any,password:any)=>{
    const data={
      username,
      password
    }
    return this.http.post("http://localhost:3200/login",data,options)
  }

  register=(mobile:any,email:any,username:any,password:any)=>{
    const data={
      mobile,
      email,
      username,
      password
    }
    return this.http.post("http://localhost:3200/register",data)
  }

}

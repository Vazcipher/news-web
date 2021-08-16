import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor( private http:HttpClient ) { }


  newsApi="https://newsapi.org/v2/top-headlines?country=in&apiKey=c8ff5611916140b3a20691c2a4af4a6f";
  sportApi="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  entertainmentApi="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  technologyApi="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c8ff5611916140b3a20691c2a4af4a6f"
  
  topHeading=()=>{
    return this.http.get(this.newsApi)
  }

  sportNews=()=>{
    return this.http.get(this.sportApi)
  }

  entertainmentNews=()=>{
    return this.http.get(this.entertainmentApi)
  }

  technologyNews=()=>{
    return this.http.get(this.technologyApi)
  }

}

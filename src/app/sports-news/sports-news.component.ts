import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service';
import {NgxSpinnerService} from 'ngx-spinner'


@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private services:NewsApiServiceService, private spinner:NgxSpinnerService) { }

  tpoSportNews:any=[]

  ngOnInit(): void {
    this.spinner.show()
    this.services.sportNews().subscribe((result:any)=>{
      console.log(result);
      this.tpoSportNews=result.articles
      this.spinner.hide()
    })

  }

}

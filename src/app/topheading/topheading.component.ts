import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services:NewsApiServiceService,private spinner:NgxSpinnerService) { }

  topHeadingDisplay:any = [];

  ngOnInit(): void {
    this.spinner.show()
    this.services.topHeading().subscribe((result:any)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles
      this.spinner.hide()
    })

  }

}

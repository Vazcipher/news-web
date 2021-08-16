import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service';
import {NgxSpinnerService} from 'ngx-spinner'



@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  techNewses:any=[]
  constructor(private service:NewsApiServiceService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.service.technologyNews().subscribe((result:any)=>{
      this.techNewses=result.articles
      this.spinner.hide()
    })
  }

}

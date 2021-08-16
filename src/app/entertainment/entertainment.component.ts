import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentNewses:any=[]

  constructor(private service:NewsApiServiceService, private spinner:NgxSpinnerService) {
   }

  ngOnInit(): void {
    this.spinner.show()
    this.service.entertainmentNews().subscribe((result:any)=>{
      console.log(result);
      this.entertainmentNewses=result.articles
      this.spinner.hide()
    })
  }
 

}

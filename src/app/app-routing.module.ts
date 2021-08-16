import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:"",component:TopheadingComponent},
  {path:"sports-component",component:SportsNewsComponent},
  {path:"EntertainmentComponent",component:EntertainmentComponent},
  {path:"TechnologyComponent",component:TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

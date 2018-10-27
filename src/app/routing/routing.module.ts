import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router"
import {LandComponent} from "../land/land.component";
import {UserComponent} from "../user/user.component"

const routes:Routes = [
  {path:"land",component:LandComponent},
  {path:"user",component:UserComponent},
  {path:"",redirectTo:"/land",pathMatch:"full"},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }

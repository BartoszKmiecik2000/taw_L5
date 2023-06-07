import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "./components/blog-item-details/blog-item-details.component";

const routes: Routes = [
  {
  path: 'blog/detail/:id',
  component: BlogHomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

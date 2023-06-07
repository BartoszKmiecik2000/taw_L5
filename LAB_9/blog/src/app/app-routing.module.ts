import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogHomeComponent} from "./components/blog-item-details/blog-item-details.component";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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

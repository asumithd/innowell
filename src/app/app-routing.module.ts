import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path : 'home', component:HomeComponent },
  { path : 'about', component:AboutComponent },
  { path : 'people', component:PeopleComponent },
  { path : 'project', component:ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

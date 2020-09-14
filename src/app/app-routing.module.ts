import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUniversityComponent } from './university/create-university/create-university.component';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';

import { CreateCollegeComponent } from './college/create-college/create-college.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/universities',
    pathMatch: 'full'
  },
  {
    path: 'universities',
    component: UniversityListComponent
  },
  {
    path: 'universities/create',
    component: CreateUniversityComponent
  },
  {
    path: 'universities/update/:id',
    component: UpdateUniversityComponent
  },
  {
    path: 'universities/details/:id',
    component: UniversityDetailsComponent
  },
  {
    path: 'universities/:id/colleges/create',
    component: CreateCollegeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

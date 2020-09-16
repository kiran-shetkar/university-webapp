import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUniversityComponent } from './university/create-university/create-university.component';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { UpdateUniversityComponent } from './university/update-university/update-university.component';

import { CreateCollegeComponent } from './college/create-college/create-college.component';
import { CollegeListComponent } from './college/college-list/college-list.component';
import { CollegeDetailsComponent } from './college/college-details/college-details.component';
import { UpdateCollegeComponent } from './college/update-college/update-college.component';

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
    path: 'universities/:universityId/colleges',
    component: CollegeListComponent
  },
  {
    path: 'universities/:universityId/colleges/create',
    component: CreateCollegeComponent
  },
  {
    path: 'universities/:universityId/colleges/:id/details',
    component: CollegeDetailsComponent
  },
  {
    path: 'universities/:universityId/colleges/:id/update',
    component: UpdateCollegeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

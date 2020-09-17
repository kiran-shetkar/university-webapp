import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeListComponent } from './college-list/college-list.component';
import { CreateCollegeComponent } from './create-college/create-college.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';

const routes: Routes = [
  {
    path: '',
    component: CollegeListComponent
  },
  {
    path: 'create',
    component: CreateCollegeComponent
  },
  {
    path: ':id/details',
    component: CollegeDetailsComponent
  },
  {
    path: ':id/update',
    component: UpdateCollegeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }

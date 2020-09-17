import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversityListComponent } from './university-list/university-list.component';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityListComponent
  },
  {
    path: 'create',
    component: CreateUniversityComponent
  },
  {
    path: 'update/:id',
    component: UpdateUniversityComponent
  },
  {
    path: 'details/:id',
    component: UniversityDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }

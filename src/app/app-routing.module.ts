import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'universities',
    pathMatch: 'full'
  },
  {
    path: 'universities',
    loadChildren: () => import('./university/university.module').then(m => m.UniversityModule)
  },
  {
    path: 'universities/:universityId/colleges',
    loadChildren: () => import('./college/college.module').then(m => m.CollegeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

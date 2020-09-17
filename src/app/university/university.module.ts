import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversityRoutingModule } from './university-routing.module'

import { UniversityListComponent } from './university-list/university-list.component';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';

@NgModule({
  declarations: [UniversityListComponent, CreateUniversityComponent, UpdateUniversityComponent, UniversityDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UniversityRoutingModule
  ],
  providers: [DatePipe]
})
export class UniversityModule { }

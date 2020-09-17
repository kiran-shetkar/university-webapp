import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CollegeRoutingModule } from './college-routing.module'

import { CollegeListComponent } from './college-list/college-list.component';
import { CreateCollegeComponent } from './create-college/create-college.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';

@NgModule({
  declarations: [CollegeListComponent, CreateCollegeComponent, CollegeDetailsComponent, UpdateCollegeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollegeRoutingModule
  ],
  providers: []
})
export class CollegeModule { }

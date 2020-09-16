import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CreateCollegeComponent } from './create-college/create-college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';



@NgModule({
  declarations: [CreateCollegeComponent, CollegeListComponent, CollegeDetailsComponent, UpdateCollegeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class CollegeModule { }

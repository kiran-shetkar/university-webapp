import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  universities: Observable<University[]>;

  constructor(private service: UniversityService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll() {
    this.service.retrieveAll().subscribe(data => {
      this.universities = data;
    }, error => console.log(error));
  }

  addUniversity() {
    this.router.navigate(['/universities/create']);
  }

  universityDetails(id: number) {
    this.router.navigate(['/universities/details', id]);
  }

  updateUniversity(id: number) {
    this.router.navigate(['/universities/update', id]);
  }

  deleteUniversity(id: number) {
    this.service.deleteUniversity(id).subscribe(data => {
      this.retrieveAll();
    }, error => console.log(error));
  }
}
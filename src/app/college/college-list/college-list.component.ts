import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { College } from '../college';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  colleges: Observable<College[]>;
  universityId: Number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private service: CollegeService, 
    ) { }

  ngOnInit(): void {
    this.universityId = this.activatedRoute.snapshot.params['universityId'];
    this.retrieveAll();
  }

  retrieveAll() {
    this.service.retrieveAll(this.universityId).subscribe(data => {
      this.colleges = data;
    }, error => console.log(error));
  }

  addCollege() {
    this.router.navigate(['/universities/'+this.universityId+'/colleges/create']);
  }

  collegeDetails(id: number) {
    this.router.navigate(['/universities/'+this.universityId+'/colleges/'+id+'/details']);
  }

  updateCollege(id: number) {
    this.router.navigate(['/universities/'+this.universityId+'/colleges/'+id+'/update']);
  }

  deleteCollege(id: number) {
    this.service.deleteCollege(this.universityId, id).subscribe(data => {
      this.retrieveAll();
    }, error => console.log(error));
  }
}

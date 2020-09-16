import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { College } from '../college';
import { CollegeService } from '../college.service';


@Component({
  selector: 'app-create-college',
  templateUrl: './create-college.component.html',
  styleUrls: ['./create-college.component.css']
})
export class CreateCollegeComponent implements OnInit {
  submitted: boolean;
  college: College;
  universityId: Number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private service: CollegeService
  ) { }

  ngOnInit(): void {
    this.universityId = this.activatedRoute.snapshot.params['universityId'];
    this.reset();
  }
  
  reset() {
    this.submitted = false;
    this.college = new College();
  }

  onsubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.service.create(this.universityId, this.college).subscribe(data => {
      this.college = new College();
      this.delay(1000).then(any => {
        this.gotoList();
      });
    }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/universities/' + this.universityId + '/colleges']);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtilsService } from 'src/app/date-utils.service';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  id: Number;
  university: University;
  submitted: boolean = false;

  constructor(
    private service: UniversityService, 
    private router: ActivatedRoute, 
    private route: Router,
    private dateUtils: DateUtilsService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.university = new University();
    this.getUniversityDetail();
  }

  getUniversityDetail(){
    this.service.getUniversityDetail(this.id).subscribe(data => {
      this.university = data;
      this.university.establishmentDate = this.dateUtils.convetDateToFormat(this.university.establishmentDate, 'dd-MM-yyyy')
    }, error => console.log(error));
  }

  onsubmit() {
    this.submitted = true;
    this.updateUniversity();
  }

  updateUniversity() {
    this.service.updateUniversity(this.id, this.university).subscribe(data => {
      this.university = new University();
      this.delay(1000).then(any=>{
        this.gotoUniversityDetails();
      });
    }, error => console.log(error));
  }

  gotoUniversityDetails() {
    this.route.navigate(['/universities/details', this.id]);
  }

  cancle() {
    this.route.navigate(['/universities']);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }
}

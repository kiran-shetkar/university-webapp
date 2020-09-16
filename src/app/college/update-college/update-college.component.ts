import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtilsService } from 'src/app/date-utils.service';
import { College } from '../college';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit {
  universityId: Number;
  id: Number;
  college: College;
  submitted: boolean = false;

  constructor(
    private service: CollegeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dateUtils: DateUtilsService) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.universityId = this.activatedRoute.snapshot.params['universityId'];
    this.college = new College();
    this.getCollegeDetail();
  }

  getCollegeDetail() {
    this.service.getCollegeDetail(this.universityId, this.id).subscribe(data => {
      this.college = data;
      this.college.establishmentDate = this.dateUtils.convetDateToFormat(this.college.establishmentDate, 'dd-MM-yyyy')
    }, error => console.log(error));
  }

  onsubmit() {
    this.submitted = true;
    this.updateCollege();
  }

  updateCollege() {
    this.service.updateCollege(this.universityId, this.id, this.college).subscribe(data => {
      this.college = new College();
      this.delay(1000).then(any => {
        this.gotoCollegeDetails();
      });
    }, error => console.log(error));
  }

  gotoCollegeDetails() {
    this.router.navigate(['/universities/' + this.universityId + '/colleges/' + this.id + '/details']);
  }

  cancle() {
    this.router.navigate(['/universities/'+this.universityId+'/colleges']);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }


}

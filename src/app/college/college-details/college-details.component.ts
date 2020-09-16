import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtilsService } from 'src/app/date-utils.service';
import { College } from '../college';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {

  college: College;
  id: Number;
  universityId: Number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private service: CollegeService, 
    private dateUtils: DateUtilsService
  ) { }

  ngOnInit(): void {
    this.universityId = this.activatedRoute.snapshot.params['universityId'];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.college = new College();
    this.getCollegeDetail();
  }

  getCollegeDetail() {
    this.service.getCollegeDetail(this.universityId,this.id).subscribe(data => {
      this.college = data;
      this.college.establishmentDate = this.dateUtils.convetDateToFormat(this.college.establishmentDate, 'dd-MM-yyyy');
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['universities/'+this.universityId+'/colleges']);
  }

}

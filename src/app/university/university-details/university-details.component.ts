import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtilsService } from 'src/app/date-utils.service';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  university: University;
  id: Number;

  constructor(private route: Router, private router: ActivatedRoute,
    private service: UniversityService, private dateUtils: DateUtilsService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.university = new University();
    this.getUniversityDetail();
  }

  getUniversityDetail(){
    this.service.getUniversityDetail(this.id).subscribe(data => {
      this.university = data;
      this.university.establishmentDate = this.dateUtils.convetDateToFormat(this.university.establishmentDate, 'dd-MM-yyyy');
    }, error => console.log(error));
  }

  addCollege() {
    this.route.navigate(['/universities/'+this.id+'/colleges/create']);
  }

  list() {
    this.route.navigate(['/universities']);
  }
}

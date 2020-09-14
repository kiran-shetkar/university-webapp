import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-create-university',
  templateUrl: './create-university.component.html',
  styleUrls: ['./create-university.component.css']
})
export class CreateUniversityComponent implements OnInit {
  submitted =false;
  university: University = new University();

  constructor(private service: UniversityService, private router: Router) { }

  ngOnInit(): void {
  }

  reset(): void {
    this.submitted = false;
    this.university = new University();
  }

  save() {
    this.service.create(this.university).subscribe(data => {
      this.university = new University();
      this.delay(1000).then(any=>{
        this.gotoList();
      });
    }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/universities']);
  }

  onsubmit(){
    this.submitted = true;
    this.save();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }
}

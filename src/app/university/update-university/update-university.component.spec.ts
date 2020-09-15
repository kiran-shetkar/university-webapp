import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversityComponent } from './update-university.component';

describe('UpdateUniversityComponent', () => {
  let component: UpdateUniversityComponent;
  let fixture: ComponentFixture<UpdateUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

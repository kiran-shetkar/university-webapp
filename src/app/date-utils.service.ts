import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor(private datePipe: DatePipe) { }

  convetStringToDate(dateString: string){
     return new Date(dateString)
  }

  convetDateToFormat(date: string, format: string){
    return this.datePipe.transform(date, format);
  }
  
}

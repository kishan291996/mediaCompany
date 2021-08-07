import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaCompanyService {

  public subject = new Subject<any>();

  
  constructor() { }
  
}

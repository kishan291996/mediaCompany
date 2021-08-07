import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filteredOptions: Observable<any[]>;
  myControl = new FormControl("")
  userData: any;

  content = "MediaMonks is a global creative production company that partners with clients across industries and markets to craft amazing work for leading businesses and brands. Media Monks has integrated production capabilities that span the entire creative spectrum, covering anything clients could want from a production partner, and probably more.Founded in 2011, the agency has offices across the world. The brand entered India by acquiring Delhi-based content creation and production agency, Whitebalance. Media Monks also has an office in Bangalore, India."

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

  searchUser(){
    if(this.myControl.value === "@"){
    this.httpClient.get("assets/usersDB.json").subscribe(data => {
      this.userData = data;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(name => this._filter(name))
          );
    })
  }
  else{
    this.myControl.setValue('');
    this.userData = "";
    this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(name => this._filter(name))
          );
  }
  }
  private _filter(username: string): any[] {
    const filterValue = username;
    return this.userData.filter(option => option.username.toLowerCase().includes(filterValue));
  }
  selectedEmployee(val) {
    this.myControl.setValue(val);
  }
  
}

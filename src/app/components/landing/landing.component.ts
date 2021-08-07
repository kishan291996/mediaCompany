import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MediaCompanyService } from 'src/app/services/media-company.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  clickedMenu:string;
  content:string;
  uname:any;
  userid:any;
  userinfo:any;
  logoutFlag:boolean = true;

  constructor(public dialog: MatDialog,private services:MediaCompanyService) { 
    this.services.subject.subscribe({
      next:(data)=>{
        this.userinfo = data;
        if(data.length > 0){
        this.uname = data[0].username;
        this.userid = data[0].userid
        }
      }
    })
  }

  ngOnInit(): void {
    this.menu('home')
  }
  menu(value){
    if(value === "home"){
      this.clickedMenu = "home";
    }
    else if(value === "gallery"){
      this.clickedMenu = "gallery";
    }
    else{
      this.clickedMenu = "about";
    }
  }

  onLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        
      }
    });
  }
  onLogout(){
    this.userinfo = '';
    this.uname = undefined;
    this.menu('home');
  }
}

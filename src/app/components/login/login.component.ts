import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MediaCompanyService } from 'src/app/services/media-company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  userInfo: any;
  validUser = [];

  constructor(private httpClient: HttpClient, private services:MediaCompanyService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public snackBar: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }


  ngOnInit(): void {
  }

  onSignIn() {
    this.httpClient.get("assets/usersDB.json").subscribe(data => {
      this.userInfo = data;
      this.userInfo.forEach(element => {
        if (element.username === this.username && element.password === this.password) {
          this.validUser.push(element);
        }
      });
      if (this.validUser.length > 0) {
        this.dialogRef.close(true)
        this.services.subject.next(this.validUser);
      }
      else {
        this.openSnackBar("Invalid Credentials","OK")
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

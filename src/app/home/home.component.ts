import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alertColor: string = "alert alert-danger";
  etablissement : string = "Sesame";
  cours : string[] = ["Java","Spring","Angular"];
  constructor() { }

  ngOnInit(): void {
  }

  displayWelcome()
  {
    alert("Welcome to Sesame");
  }
  changeColorAlert() {
    if (this.alertColor == "alert alert-danger")
      this.alertColor = "alert alert-primary";
    else
      this.alertColor = "alert alert-danger";
  }
}

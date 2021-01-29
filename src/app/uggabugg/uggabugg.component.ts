import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'at-uggabugg',
  templateUrl: './uggabugg.component.html',
  styleUrls: ['./uggabugg.component.css']
})
export class UggabuggComponent implements OnInit {

  displayBasic = false;

  ngOnInit() {
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
}

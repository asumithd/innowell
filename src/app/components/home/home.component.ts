import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    { path: '../assets/img/ibm.png' },
    { path: '../assets/img/apo.png' },
    { path: '../assets/img/ast.png' },
    { path: '../assets/img/kpm.png' },
    { path: '../assets/img/taj.png' },
    { path: '../assets/img/xer.png' },
    { path: '../assets/img/tata.png' }
  ]
  ngOnInit(): void {
  }

}

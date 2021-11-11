import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'application';
  images = [
    { path: '../assets/img/ibm.png' },
    { path: '../assets/img/apo.png' },
    { path: '../assets/img/ast.png' },
    { path: '../assets/img/kpm.png' },
    { path: '../assets/img/taj.png' },
    { path: '../assets/img/xer.png' },
    { path: '../assets/img/tata.png' }
  ]
  constructor() { }

  ngOnInit(): void {
    
    
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  paras: any[] = [
    'LEED Platinum with 82 Points, Sustainability, Energy conservation, Compliance with ACCORD were of particular importance to the project and a priority for the client.', 'Building massing unit sizes and operating parameters have been selected to exceed compliance criteria and to enhance the operational energy efficiency', 'Through a combination of energy efficient technologies and innovative solutions significant reductions in energy usage against conventional RMG Unit were achieved. This included a reduction of energy use of 65% and a reduction of water consumption of 50%.'
  ];
  images = [
    { path: '../assets/img/ibm.png' },
    { path: '../assets/img/apo.png' },
    { path: '../assets/img/ast.png' }
  ]
  constructor() { }

  ngOnInit(): void {
    // if (Number(document.querySelector('carousel')?.clientWidth.toString()) >= 400) {
    //   console.log('yes');
    //   document.getElementsByClassName('threeCarousel carousel')[0].classList.add('width550')
    //   // document.querySelector('carousel')?.setAttribute('width', '550px')
    // } else {

    // }
  }

}

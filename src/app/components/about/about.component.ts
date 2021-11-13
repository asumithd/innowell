import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  missions: any[] = [
    { icon: 'fas fa-hand-holding-heart', name: 'Care', type: 'Provide Challenging and joyful working Environment' },
    { icon: 'fas fa-user-cog', name: 'Develop', type: 'Nurture young talents' },
    { icon: 'fas fa-fist-raised', name: 'Empower', type: 'Empower talents with innovative process & standards' }
  ]
  ourValues: any[] = [
    { icon: 'fas fa-hand-holding  fas fa-users', name: 'People', description: 'Our Organisational Success depends on our People. We, at Innowell,have strong commitment to their development, and well-beings. We give challenging opportunity to learn. offer career progressionwithin, and provide safe work place.' },
    { icon: 'fas fa-award', name: 'Customer Excellence', description: 'Adding value to customer is our business, we continuously explore customer current desires and anticipate customer future desires.our customer centric approach with passion is unique that diffentiate us from the competitors' },
    { icon: 'fas fa-lightbulb', name: 'Innovation', description: 'Sustainable and affodable is our theme on innovation.On process or service or designs, we thrive making a meaningful change.Innovation is part of our daily work systems. We have supportive environment for innovation and intelligent risk taking.' },
    { icon: 'fas fa-shield-virus', name: 'Integrity', description: 'It is most valued commitment at all level in our Organisation. Both internal compliance & external compliance. We uphold morale priciples, and stress ethical behaviour & transparency in all the stake-holder transaction including our Clients, Associates, Vendors, and our team members.' },
    { icon: 'fas fa-search', name: 'Learning', description: 'The priciple of continuous learning enhances our peoples capability productivity and effectiveness. This interns results in enhanced value to our Customers Development of new & improved processes and business models. In addition to all above we fulfil our Societal responsibilities by improved performance.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  contacts: any[] = [
    { company: 'Company name', name: 'Innowell Engineering International Pvt Ltd', tinno: 'CIN No: U74900TN2013PTC091184', members: ['Gunasekaran R, DIN AAAAAAA', 'Renugadevi R DIN AAAAAAA', 'Sankareswari G, DIN AAAAAAA', 'Sengathirselven K, DIN AAAAAAA'] },
    { company: 'Company name', name: 'Innowell BIM Solutions Pvt Ltd', tinno: 'CIN No: U74900TN2015PTC03416', members: ['Gunasekaran R, DIN AAAAAAA', 'Renugadevi R DIN AAAAAAA', 'Sankareswari G, DIN AAAAAAA', 'Sengathirselven K, DIN AAAAAAA'] },
  ]
  peoples: any[] = [
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Ferno Susai A', designation: 'Founder & CMO' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Gunasekaran Raju', designation: 'Founder & COO' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Sengathir Selvan K', designation: 'Head - MEP Design' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Ferno Susai A', designation: 'Founder & CMO' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Gunasekaran Raju', designation: 'Founder & COO' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Sengathir Selvan K', designation: 'Head - MEP Design' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Ferno Susai A', designation: 'Founder & CMO' },
    { img: 'missionbg.jpg', description: ['Guna is the CCO at Innowell and Seves on Its Board of Directors.', 'Prior to joining innowell Guna was Partnered with Airdesign Engineered Solutions Between 2008 and 2013.', 'Guna worked withHonywell, most recently as integrated Team Leader in Canada for North American (West)', 'BMS Remote Engineering Project He was instrumental in establishing West Regional business & Team.', 'Pervious to his work at Honeywell Guna served in AC Project Division, Bluestar Ltd India Guna holds a Beachelor of Science degree in Engineering Technology from Birla institute of Engineering & Technology india, and a Diploama in Refrigeration & Air-Conditioning from PACR Polytechnic College, Rajapalayam India.'], name: 'Gunasekaran Raju', designation: 'Founder & COO' }
  ]
  slectedPeople: any = {}
  hideDiv: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  readMore(index: any) {
    this.hideDiv = true;
    this.slectedPeople = this.peoples.filter((element, i) => i === index)[0];
    setTimeout(() => {
      document.getElementById('divToScroll')?.scrollIntoView()
    }, 0);

  }
  hideSection() {
    this.hideDiv = false;
  }

}

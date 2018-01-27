import {Component, Input} from '@angular/core';
import {Message} from "../../model/message";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-apptitle',
  templateUrl: './apptitle.component.html',
  styleUrls: ['./apptitle.component.css']
})
export class ApptitleComponent {
  title = 'Messanger';

  userData = [
    {
      firstName: 'paweł',
      secondName: 'eliasz',
      city: 'lomza',
      street: 'nowhere'
    },
    {
      firstName: 'paweł1',
      secondName: 'eliasz1',
      city: 'lomza',
      street: 'nowhere'
    },
    {
      firstName: 'paweł2',
      secondName: 'eliasz2',
      city: 'lomza',
      street: 'nowhere'
    }
  ];

  goToNewCity(city) {
    return this.userData.map(e => e.city = city);
  }

}

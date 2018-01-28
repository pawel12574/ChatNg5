import {Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  tempusername = '';

  showUsername(event) {
    this.tempusername = event;
    console.log(event);
  }

  // name = 'Paweł';
  // surname = 'Eliasz';
  // city = 'łomża'
  // nowaZmienna = this.highLight`Mamna imię ${this.name}, na nazwisko ${this.surname} i pochodzę z ${this.city}`;

  // highLight(param1, ...param2) {
  //   console.log('param1', param1);
  //   console.log('param2', param2);
  //   let newText = '';
  //
  //   for (let i = 0; i < param1.length; i++) {
  //     newText += `${param1[i]} + ${(param2[i] || '').toUpperCase()}`;
  //   }
  //
  //   return newText;
  // }


}

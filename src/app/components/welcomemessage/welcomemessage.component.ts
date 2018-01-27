import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomeMessageComponent {
  name = 'Paweł';

}

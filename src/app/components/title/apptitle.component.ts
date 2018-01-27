import {Component, Input} from '@angular/core';
import {Message} from "../model/message";


@Component({
  selector: 'app-apptitle',
  templateUrl: './apptitle.component.html',
  styleUrls: ['./apptitle.component.css']
})
export class ApptitleComponent {

  @Input() message: Message;


}

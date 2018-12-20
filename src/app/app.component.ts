import { Component,Inject } from '@angular/core';
import { MessageService } from './message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello todo';

  constructor (@Inject('MessageService') public messageService,@Inject('api') public api){}

  myUpdate(value,msg){
    console.log(value.text)
    this.messageService.update(value.text,msg.id);
  }
}

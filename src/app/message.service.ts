import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message = "from messageService";

  messages= [
    {id:0,text:'message0'},
    {id:1,text:'message1'},
    {id:2,text:'message2'}
  ];

  update(value,id){
    this.messages = this.messages.map(item => item.id == id ? {id,text:value} : item)
  }
}

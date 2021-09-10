import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {
    class: 'contact-routed',
  },
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const message = `
    
    Lähettäjä: ${this.name}
    Lähettäjän sähkoposti: ${this.email}
    
    ${this.message}

    `;

    alert('Your message has been sent!');
    console.log(message);
  }
}

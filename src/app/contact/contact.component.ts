import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {
    class: 'contact-routed',
  },
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  contactForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    });
  }
  onSubmit(): void {
    console.log(this.contactForm);
  }
}

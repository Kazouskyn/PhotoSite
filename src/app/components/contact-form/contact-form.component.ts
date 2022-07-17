import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  formTypes: string[] = ["Business Inquiries", "Customer Service"];
  formType: string = "Business Inquiries";
  fName: string;
  lName: string;
  email: string;
  subject: string;
  message: string;

  constructor(private contactService: ContactService) {    
   }

  ngOnInit(): void {
  }

  submitForm(){
    this.contactService.FormInterface.fName = this.fName;
    this.contactService.FormInterface.lName = this.lName;
    this.contactService.FormInterface.email = this.email;
    this.contactService.FormInterface.subject = this.subject;
    this.contactService.FormInterface.message = this.message;

    console.log('Submit:', this.contactService.FormInterface);
  }
}

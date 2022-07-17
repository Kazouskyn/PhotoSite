import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  FormInterface = {
    fName: '',
    lName: '',
    email: '',
    subject: '',
    message: ''
  }
  constructor() { }
}

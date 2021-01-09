import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MailformComponent implements OnInit {


  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  sendMail() { 
    console.log("He made it all up really!");
  }

}

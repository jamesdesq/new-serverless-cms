import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MailformComponent implements OnInit {


  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  sendMail() { 
    
    const message = { 
      'name': this.contactForm.get('name').value,
      'email': this.contactForm.get('email').value,
      'message': this.contactForm.get('message').value,
    }

    this.http.sendMessage(message).subscribe({
        next: data => {
            console.log(data);
            this.router.navigate(['/thanks']);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
  }

  get name() { return this.contactForm.get('name'); }

  get email() { return this.contactForm.get('email'); }

  get message() { return this.contactForm.get('message'); }

}

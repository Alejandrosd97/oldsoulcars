import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup

  enviar() {
    console.log(this.contactForm)
  }

  hasErrors(controlName: string, errorType: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
  }

  constructor(private miForm: FormBuilder) {
    this.contactForm = this.miForm.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required]
    })
  }
}

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './client-add-details.component.html',
  styleUrl: './client-add-details.component.css'
})
export class ClientAddDetailsComponent {


  clientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl('',[Validators.required]),
    address: new FormGroup({
      street: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required])
    })
  });

  onSubmit() {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-client-details-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client-details-edit.component.html',
  styleUrl: './client-details-edit.component.css'
})
export class ClientDetailsEditComponent {
  clientData:any= {
    name: '',
    phone: '',
    email: '',
    company: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: ''
    }
  };
  onSubmit(clientEditform: NgForm) {
    if (clientEditform.valid) {
      console.log('Form submitted successfully!');
      console.log(this.clientData);
    } else {
      console.log('Form is invalid!');
    }
  }
}

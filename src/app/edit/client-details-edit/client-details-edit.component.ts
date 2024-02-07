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
  onSubmit(form:any) {
    if (form.valid) {
      // Form is valid, you can now handle the submission logic
      console.log('Form submitted successfully!');
      console.log('Client Data:', this.clientData);

      // You can perform additional logic here, such as sending the data to a server, etc.

    } else {
      // Form is invalid, show an error or take appropriate action
      console.log('Form is invalid. Please check the fields.');
    }
  }
}

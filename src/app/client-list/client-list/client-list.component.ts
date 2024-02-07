import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface data{
  id:number
  name:string,
  phone:number,
  email:string,
  company:string,
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
}
}
@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clients:data[]=[
    {
      id: 1,
      name: 'John Doe',
      phone: 1234567890,
      email: 'john@example.com',
      company: 'ABC Inc.',
      address: {
        street: '123 Main St',
        city: 'City1',
        state: 'State1',
        pincode: '12345'
      }
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: 9876543210,
      email: 'jane@example.com',
      company: 'XYZ Ltd.',
      address: {
        street: '456 Elm St',
        city: 'City2',
        state: 'State2',
        pincode: '54321'
      }
    }
  ];
}

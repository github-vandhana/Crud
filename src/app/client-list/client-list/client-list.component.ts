import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface data{
  id:number
  name:string,
  phone:number,
  email:string,
  location:string,

  company:string,
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
      location: 'City1',
      company: 'ABC Inc.'
    },
    {
      id: 2,
      name: ' Doe',
      phone: 9876543210,
      email: 'jane@example.com',
      location: 'City2',
      company: 'XYZ Ltd.'
    },
  ];


}

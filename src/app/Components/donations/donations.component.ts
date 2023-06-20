import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {

  donation = {
    name: '',
    lastName: '',
    donation: 0,
    date: ''
  }

  donationList:any[] = [
    {
      name: 'Andres',
      lastName: 'Campos',
      donation: 20,
      date: 'Jun 22 2023'
    },
    {
      name: 'Marta',
      lastName: 'Campos',
      donation: 20,
      date: 'Jun 22 2023'
    },
    {
      name: 'Tomas',
      lastName: 'RAMOS',
      donation: 20,
      date: 'Jun 22 2023'
    },
  ]

  newArray:any[] = []

  getDonation() {
    // this.donationList = [...this.donationList, this.donation]
    this.donationList.push(this.donation);
    this.newArray = [...this.donationList, this.donation];
    console.log(this.donationList)
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'donacion', 'fecha'];
  dataSource = this.donationList;



}

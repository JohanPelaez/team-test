import { Component, OnInit } from '@angular/core';
import { User, jobTitle } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../services/country/country.service';

@Component({
  selector: 'new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {
  jobTitles = jobTitle;
  countries;
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dob: new FormControl(new Date(), Validators.required),
    country: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    hireDate: new FormControl(new Date(), Validators.required),
    status: new FormControl(true, Validators.required),
    area: new FormControl('Services', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    tipRate: new FormControl(0, Validators.required)
  });
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService
      .getCountries()
      .subscribe(countries => (this.countries = countries));
  }
}

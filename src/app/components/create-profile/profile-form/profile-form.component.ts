import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, Group, Person, ProfileType } from '../../../models/profile';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileType!: ProfileType;
  form!: FormGroup;
  readonly ProfileType = ProfileType;

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state ?? {};
    this.profileType = state['profileType'] ?? ProfileType.Person;
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit(): void {
    const profile: Person | Company | Group = {
      ...this.form.value,
      type: this.profileType,
    };
    this.snackbar.open(`Profile created: ${profile.type} | ${profile.name}, ${profile.address}`)
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      image: new FormControl(),
    });

    if (this.profileType === ProfileType.Person) {
      this.form.addControl('surname', new FormControl());
    } else if (this.profileType === ProfileType.Company) {
      this.form.addControl('ceo', new FormControl());
      this.form.addControl('employees', new FormControl());
    } else if (this.profileType === ProfileType.Group) {
      this.form.addControl('members', new FormControl());
    }
  }

}

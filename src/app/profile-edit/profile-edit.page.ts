import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  Edit_profile:any=FormBuilder;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private fb:FormBuilder,private router: Router,) { }

  ngOnInit() {
    this. Edit_profile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      texadd: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobnoctrl: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      
    });
  }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.Edit_profile.invalid) {
      return;
    }
      console.log(this.Edit_profile.value);
      
  }
}

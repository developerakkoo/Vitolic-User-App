import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {
  create_profile: FormGroup;
  pinCode: number;
  submitted=false;
  constructor(private router: Router,private formBuilder: FormBuilder,private fb: FormBuilder) { }

  ngOnInit() {
    this.create_profile = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      texadd: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobnoctrl: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      
    });
  }

  saveProfile(){
    this.router.navigate(['tabs', 'tabs', 'tab1']);
  }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.create_profile.invalid) {
      return;
    }
      console.log(this.create_profile.value);
      
  }
}

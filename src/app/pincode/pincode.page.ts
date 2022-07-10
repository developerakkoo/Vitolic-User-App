import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.page.html',
  styleUrls: ['./pincode.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PincodePage implements OnInit {
  Select_LocationForm: FormGroup;
  pinCode: number;

  constructor(private router: Router,private formBuilder: FormBuilder,private fb: FormBuilder) { }

  ngOnInit() {
    this.Select_LocationForm = this.formBuilder.group({
      pincdctrl: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })
  }
  doSubmit() {
    console.log(this.Select_LocationForm.value);
    console.log(this.pinCode);
  }
  pincodeSelect(){
    this.router.navigate(['create-profile']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageServiceService } from '../services/storage-service.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  contactForm:any=FormGroup;
  form: any=FormGroup;
  submitted = false;


  constructor(private router: Router,
    private http: HttpClient,
              private st: StorageServiceService,
              private LoadingCtrl: LoadingController,
              private authService: AuthService,
              public toastController: ToastController,
    private formBuilder: FormBuilder,private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      // name: [null, [Validators.required, Validators.minLength(5)]],
      // dob: [null, [Validators.required]],
      // email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      // password: [null, [Validators.required, Validators.minLength(6)]],
      // confirmPassword: [null, [Validators.required]],
      mobnoctrl: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      
    });
  }

  async login() {
    const loading = await this.LoadingCtrl.create({
      message: "Please wait...", 
      
    });
    loading.present();

    let body = {
     
    }
    this.http.post(environment.API_URL+'/user/login' ,body)
    .subscribe(async (user) => {
      console.log(user['userId']);
      if(user){
       
        
      }
    },(error) => {
      loading.dismiss();
      console.log(error.message);
      
    })
  }

  getOTP(){
    this.router.navigate(['otp']);
  }

  saveDetails() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }




  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}

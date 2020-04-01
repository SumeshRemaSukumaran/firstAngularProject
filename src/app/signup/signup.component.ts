import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  
  authStat: any;
  state: string = '';
  error: any = '';
  email: any = '';
  password: any = '';

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.authStat = this.authService.SignUp(formData.value.email,formData.value.password); 
      if(this.authStat==1){      
      this.authService.postLoginReDirect()
      }  
      else{
      this.error= this.authStat;
      }
         
    }
  }
}

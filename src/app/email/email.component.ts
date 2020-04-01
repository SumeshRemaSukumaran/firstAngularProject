import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { AuthenticationService } from 'src/app/shared/authentication.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  authStat: any;
  state: string = '';
  error: any;
  email: any;
  password: any;
  constructor(private authService: AuthenticationService,
   private router: Router) {
   if(this.authService.IsAuthorized())
   this.router.navigateByUrl('/members');
   }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    this.error='';
    if(formData.valid) {
      console.log(formData.value);
      this.authStat = this.authService.SigninWithEmailandPassword(formData.value.email,formData.value.password);      
      
      if(this.authStat==1){      
        this.authService.postLoginReDirect()
        }  
        else{
          if(this.authStat==false){
            this.error='Please try again!'
          }
          else{
            this.error= this.authStat;
          }       
        }
    }
  }
}

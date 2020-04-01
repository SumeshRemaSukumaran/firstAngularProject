import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})

export class LoginComponent implements OnInit {

  error: any;
    constructor(
      public authService: AuthenticationService) {
        
       }
 
  ngOnInit() {}

}

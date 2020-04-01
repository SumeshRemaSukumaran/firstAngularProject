import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any = '';
  state: string = '';
  constructor(private authService: AuthenticationService,
   ) { 
    if(this.authService.IsAuthorized()){
     this.authService.getUserDetails();
        console.log(this.name);             
    }
    else{
      this.authService.RedirectToLogin();
    }   
      
    }

  ngOnInit(): void {
  }

  SignOut() {    
    this.authService.SignOut();
  }
}

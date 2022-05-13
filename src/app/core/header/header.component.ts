import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/register/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  get user(): User | undefined | null { 
    return this.authService.user;
  }
 
  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

}

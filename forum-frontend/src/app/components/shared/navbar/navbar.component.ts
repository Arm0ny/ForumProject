import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../../interfaces/user-interface";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  activeUser?: UserInterface;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.activeUserOf.subscribe(
      res => this.activeUser = res
    )
  }
}

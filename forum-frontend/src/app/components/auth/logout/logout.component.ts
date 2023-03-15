import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
})
export class LogoutComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.logout().subscribe()
  }
}

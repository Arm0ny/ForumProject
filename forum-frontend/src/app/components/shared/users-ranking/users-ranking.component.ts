import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { UserInterface } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-users-ranking',
  templateUrl: './users-ranking.component.html',
  styleUrls: ['./users-ranking.component.sass'],
})
export class UsersRankingComponent implements OnInit {
  users?: UserInterface[];
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.index().subscribe((res) => (this.users = res));
  }
}

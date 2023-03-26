import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { AuthService } from '../../../services/auth/auth.service';
import { UserInterface } from '../../../interfaces/user-interface';
import { Md5 } from 'ts-md5';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {map} from "rxjs";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.sass'],
})
export class CreateProfileComponent {
  constructor(
    private fireStorageService: AngularFireStorage,
    private authService: AuthService,
    private router: Router
  ) {}
  activeUser$ = this.authService.activeUserOf;
  profileForm = new FormGroup({
    profileImage: new FormControl(null, Validators.required),
  });

  ref!: AngularFireStorageReference;
  task!: AngularFireUploadTask;

  upload(event: Event, user : UserInterface) {
    let input = <HTMLInputElement>event.target;
    if (input.files === null) {
      return;
    }
    this.ref = this.fireStorageService.ref(`profile-images/${Md5.hashStr(user.name)}`);
    this.task = this.ref.put(input.files[0]);
  }

  onSubmit(user : UserInterface) {
    if (this.profileForm.valid) {
      this.authService
        .updateUser(user.id, {
          profile_image: Md5.hashStr(user.name),
        })
        .subscribe(
          (res) => {
            this.router.navigate(['/profile']);
            console.log(res);
          },
        );
    }
  }
}

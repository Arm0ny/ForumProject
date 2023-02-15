import {Component, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {AuthService} from "../../../services/auth/auth.service";
import {UserInterface} from "../../../interfaces/user-interface";
import {Md5} from "ts-md5";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.sass']
})
export class CreateProfileComponent implements OnInit {
  constructor(private fireStorageService: AngularFireStorage, private authService : AuthService, private router : Router) { }
  user? : UserInterface
  profileForm = new FormGroup({
  profileImage : new FormControl(null, Validators.required)
  })
  ngOnInit() {
    this.authService.getUser()
      .subscribe(
        res => this.user = res,
        err => console.log(err)
      )
  }


  ref!: AngularFireStorageReference
  task!: AngularFireUploadTask

  imageType! : string

  upload(event: Event) {
    let input = (<HTMLInputElement>event.target)
    if (input.files === null || !this.user) {
      return
    }
    const id = Md5.hashStr(this.user.name)
    this.ref = this.fireStorageService.ref(`profile-images/${id}`)
    console.log(input.files[0])
    this.task = this.ref.put(input.files[0])
    this.imageType = `.${input.files[0].type.split("/")[1]}`

  }

  onSubmit(){
    if(this.profileForm.valid && this.user){
      this.authService
        .updateUser(
          this.user.id,
          {profile_image : Md5.hashStr(this.user.name) + '.' + this.imageType})
        .subscribe(
          res => {
            this.router.navigate(['questions'])
            console.log(res)
          },
          err => console.log(err))
    }
  }
}

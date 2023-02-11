import { Component } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.sass']
})
export class CreateProfileComponent {
  constructor(private fireStorageService: AngularFireStorage) {
  }

  ref!: AngularFireStorageReference
  task!: AngularFireUploadTask

  upload(event: Event) {
    let input = (<HTMLInputElement>event.target)
    if (input === null || input.files === null) {
      return
    }
    let date = new Date().toString()
    const id = date.replace(' ', '_')
    this.ref = this.fireStorageService.ref(id);
    this.task = this.ref.put(input.files[0]);

  }
}

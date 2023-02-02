import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-editor-details',
  templateUrl: './editor-details.component.html',
  styleUrls: ['./editor-details.component.sass']
})
export class EditorDetailsComponent implements OnInit{
  editorForm?: FormGroup
  writerContent? : string;
  markedString = ''

  ngOnInit() {
    this.editorForm = new FormGroup({
      title : new FormControl('', Validators.required),
      markedString: new FormControl('', Validators.required)
    })
  }

  onSendMarkedString(markedString: string) {
    this.markedString = markedString
  }
}

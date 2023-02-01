import {Component} from '@angular/core';

@Component({
  selector: 'app-editor-details',
  templateUrl: './editor-details.component.html',
  styleUrls: ['./editor-details.component.sass']
})
export class EditorDetailsComponent {
  writerContent? : string;
  markedString = ''


  onSendMarkedString(markedString: string) {
    this.markedString = markedString
  }
}

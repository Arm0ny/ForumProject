import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {marked} from "marked";

@Component({
  selector: 'app-editor-reader',
  templateUrl: './editor-reader.component.html',
  styleUrls: ['./editor-reader.component.sass']
})
export class EditorReaderComponent implements OnChanges{
  @Input() markedString = ''
  readerContent? : string;

  ngOnChanges(){
    this.readerContent = marked(this.markedString)
  }

}

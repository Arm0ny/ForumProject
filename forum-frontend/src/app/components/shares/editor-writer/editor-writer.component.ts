import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-editor-writer',
  templateUrl: './editor-writer.component.html',
  styleUrls: ['./editor-writer.component.sass']
})
export class EditorWriterComponent {
   @Output() sendMarkedString = new EventEmitter<string>()

  onInput(event: Event) {
    this.sendMarkedString.emit((<HTMLInputElement>event.target).value)
  }
}

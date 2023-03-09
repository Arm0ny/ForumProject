import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {CategoriesInterface} from "../../../interfaces/categories-interface";
import {QuestionsService} from "../../../services/questions.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-editor-writer',
  templateUrl: './editor-writer.component.html',
  styleUrls: ['./editor-writer.component.sass']
})
export class EditorWriterComponent implements OnInit{
  constructor(private categoriesService : CategoriesService, private questionsService : QuestionsService) { }
   @Output() sendMarkedString = new EventEmitter<string>()
  writerForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
  });
  categories? : CategoriesInterface[]


    ngOnInit() {
      this.categoriesService.index()
        .subscribe(res => this.categories = res)
    }

  onInput(event: Event) {
    this.sendMarkedString.emit((<HTMLInputElement>event.target).value)
  }

  onSubmit() {
    if(!this.writerForm.valid) {
      return
    }
    let title = this.writerForm.get('title')?.getRawValue()
    let content = this.writerForm.get('content')?.getRawValue()
    let category_id = this.writerForm.get('category')?.getRawValue()


    return this.questionsService.store(title, content, category_id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )

  }
}

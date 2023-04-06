import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../services/categories.service";
import {CategoriesInterface} from "../../../interfaces/categories-interface";
import {QuestionsService} from "../../../services/questions.service";
import {catchError, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {QuestionsInterface} from "../../../interfaces/questionsInterface";

@Component({
  selector: 'app-editor-writer',
  templateUrl: './editor-writer.component.html',
  styleUrls: ['./editor-writer.component.sass'],
})
export class EditorWriterComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  @Output() closeEditor = new EventEmitter<boolean>()
  constructor(
    private categoriesService: CategoriesService,
    private questionsService: QuestionsService,
    private router: Router
  ) {}
  @Output() sendMarkedString = new EventEmitter<string>();

  categories$ = this.categoriesService.categoriesOf();
  @Input() action: string = 'store';
  @Input() question: QuestionsInterface = {
    content: '',
    id: 0,
    points: 0,
    title: '',
  };

  writerForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl(0, Validators.required),
    content: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.writerForm.setValue({
      title: this.question.title,
      category: this.question.category!.id,
      content: this.question.content,
    });
  }

  onInput(event: Event) {
    this.sendMarkedString.emit((<HTMLInputElement>event.target).value);
  }

  onSubmit() {
    if (!this.writerForm.valid) {
      return;
    }
    this.question.title = this.writerForm.get('title')?.getRawValue();
    this.question.content = this.writerForm.get('content')?.getRawValue();
    this.question.category!.id = this.writerForm.get('category')?.getRawValue();
    return this.action === 'store' ? this.onStore() : this.onEdit();
  }

  onStore() {
    this.questionsService
      .store(
        this.question.title,
        this.question.content,
        this.question.category!.id
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => this.router.navigate([`questions`, res.id]));
  }

  onEdit() {
    this.questionsService
      .edit(this.question)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.questionsService.setActiveQuestion(this.question.id);
        this.closeEditor.emit(false)
      });
  }

  ngOnDestroy() {
    this.destroy$.next()
  }
}

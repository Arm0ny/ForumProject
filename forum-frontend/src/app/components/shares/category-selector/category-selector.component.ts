import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';
import { QuestionsService } from '../../../services/questions.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.sass'],
})
export class CategorySelectorComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private questionsService: QuestionsService
  ) {}

  categories?: CategoriesInterface[];

  //Event for sending category to parent component
  @Output() setCategoryEvent = new EventEmitter<number | null>();

  ngOnInit() {
    this.getCategories();
    this.setCategorySubject(null);
  }

  //get the list of available Categories
  getCategories() {
    this.categoriesService.index().subscribe((res) => (this.categories = res));
  }

  setCategorySubject(categoryId: number | null) {
    this.questionsService.setCursor('');
    this.questionsService.setCategory(categoryId);
  }
}

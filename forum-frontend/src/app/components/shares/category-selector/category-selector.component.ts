import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { CategoriesInterface } from '../../../interfaces/categories-interface';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.sass'],
})
export class CategorySelectorComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  categories?: CategoriesInterface[];

  //Event for sending category to parent component
  @Output() setCategoryEvent = new EventEmitter<number | null>();

  ngOnInit() {
    this.getCategories();
  }

  //get the list of available Categories
  getCategories() {
    this.categoriesService.index().subscribe((res) => (this.categories = res));
  }

  //function to emit the @Output event
  setCategory(categoryId: number | null) {
    this.setCategoryEvent.emit(categoryId);
  }
}

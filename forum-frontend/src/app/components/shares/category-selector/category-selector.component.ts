import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../../services/categories.service";
import {CategoriesInterface} from "../../../interfaces/categories-interface";

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.sass']
})
export class CategorySelectorComponent implements OnInit {
  constructor(private categoriesService : CategoriesService){ }

  categories? : CategoriesInterface[]


  ngOnInit() {
    this.getCategories()
  }

  getCategories(){
    this.categoriesService.index()
      .subscribe((res) => this.categories = res)
  }
}

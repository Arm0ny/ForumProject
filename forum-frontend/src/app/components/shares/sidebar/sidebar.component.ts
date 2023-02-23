import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesInterface } from '../../../interfaces/categories-interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  @Output() setCategoryEvent = new EventEmitter<CategoriesInterface>();

  constructor() {}

  ngOnInit(): void {}

  setCategory(category: CategoriesInterface) {
    this.setCategoryEvent.emit(category);
  }
}

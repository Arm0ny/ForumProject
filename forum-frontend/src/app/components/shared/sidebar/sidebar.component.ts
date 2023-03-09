import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesInterface } from '../../../interfaces/categories-interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  @Output() setCategoryEvent = new EventEmitter<number | null>();

  constructor() {}

  ngOnInit(): void {}

  setCategory(categoryId: number | null) {
    this.setCategoryEvent.emit(categoryId);
  }
}

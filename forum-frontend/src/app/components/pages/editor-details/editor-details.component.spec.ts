import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDetailsComponent } from './editor-details.component';

describe('EditorDetailsComponent', () => {
  let component: EditorDetailsComponent;
  let fixture: ComponentFixture<EditorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

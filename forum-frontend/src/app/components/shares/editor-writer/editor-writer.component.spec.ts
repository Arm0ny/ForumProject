import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorWriterComponent } from './editor-writer.component';

describe('EditorWriterComponent', () => {
  let component: EditorWriterComponent;
  let fixture: ComponentFixture<EditorWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

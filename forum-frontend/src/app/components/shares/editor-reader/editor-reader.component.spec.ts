import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorReaderComponent } from './editor-reader.component';

describe('EditorReaderComponent', () => {
  let component: EditorReaderComponent;
  let fixture: ComponentFixture<EditorReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

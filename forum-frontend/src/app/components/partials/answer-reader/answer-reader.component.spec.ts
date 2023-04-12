import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReaderComponent } from './answer-reader.component';

describe('AnswerReaderComponent', () => {
  let component: AnswerReaderComponent;
  let fixture: ComponentFixture<AnswerReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

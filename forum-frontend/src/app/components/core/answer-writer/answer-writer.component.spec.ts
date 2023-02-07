import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerWriterComponent } from './answer-writer.component';

describe('AnswersComponent', () => {
  let component: AnswerWriterComponent;
  let fixture: ComponentFixture<AnswerWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

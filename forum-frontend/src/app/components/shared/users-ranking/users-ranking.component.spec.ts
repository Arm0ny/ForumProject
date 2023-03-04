import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRankingComponent } from './users-ranking.component';

describe('UsersRankingComponent', () => {
  let component: UsersRankingComponent;
  let fixture: ComponentFixture<UsersRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

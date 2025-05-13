import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreKataComponent } from './score-kata.component';

describe('ScoreKataComponent', () => {
  let component: ScoreKataComponent;
  let fixture: ComponentFixture<ScoreKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreKataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

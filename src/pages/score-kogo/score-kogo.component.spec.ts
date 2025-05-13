import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreKogoComponent } from './score-kogo.component';

describe('ScoreKogoComponent', () => {
  let component: ScoreKogoComponent;
  let fixture: ComponentFixture<ScoreKogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreKogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreKogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

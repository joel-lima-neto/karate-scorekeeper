import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreEnbuComponent } from './score-enbu.component';

describe('ScoreEnbuComponent', () => {
  let component: ScoreEnbuComponent;
  let fixture: ComponentFixture<ScoreEnbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreEnbuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreEnbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

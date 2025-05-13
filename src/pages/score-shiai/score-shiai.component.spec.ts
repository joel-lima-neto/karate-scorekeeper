import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreShiaiComponent } from './score-shiai.component';

describe('ScoreShiaiComponent', () => {
  let component: ScoreShiaiComponent;
  let fixture: ComponentFixture<ScoreShiaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreShiaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreShiaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

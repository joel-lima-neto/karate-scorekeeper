import { Component, effect, signal, Signal } from '@angular/core';
import { ShiaiKumiteScore } from '../../models/shiai-kumite-score';
import { PointType } from '../../models/point-type';
import { PunishmentPointAssignmentTarget, PunishmentType } from '../../models/punishment-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-shiai',
  imports: [CommonModule],
  templateUrl: './score-shiai.component.html',
  styleUrl: './score-shiai.component.scss'
})
export class ScoreShiaiComponent {
  timerPaused = signal<boolean>(true);
  scoreAka: ShiaiKumiteScore | null = null;
  scoreShiro: ShiaiKumiteScore | null = null;
  pointTypes: PointType[] = [
    { name: 'IPPON', value: 10 },
    { name: 'WAZA-ARI', value: 4 }
  ];
  punishmentTypes: PunishmentType[] = [
    { name: 'KEIKOKU', value: 2, pointAssignmentTarget: PunishmentPointAssignmentTarget.Self },
    { name: 'SHUI', value: 4, pointAssignmentTarget: PunishmentPointAssignmentTarget.Self },
    { name: 'JOGAI', value: 2, pointAssignmentTarget: PunishmentPointAssignmentTarget.Self },
  ];
  timeSeconds = signal<number>(0);
  timerInterval: any | null = null;
  floatingMenuVisible = signal<boolean>(false);

  constructor() {
    this.scoreAka = new ShiaiKumiteScore();
    this.scoreShiro = new ShiaiKumiteScore();
  }

  toggleTimer() {
    this.timerPaused.update(paused => !paused);
    if (!this.timerPaused()) {
      this.timerInterval = setInterval(() => {
        this.timeSeconds.update(time => time + 1);
      }, 1000);
    } else {
      clearInterval(this.timerInterval);
    }
  }

  resetTimer() {
    this.timeSeconds.set(0);
    if (!this.timerPaused()) {
      this.toggleTimer();
    }
    this.toggleFloatingMenu();
  }

  resetMatch() {
    this.scoreAka = new ShiaiKumiteScore();
    this.scoreShiro = new ShiaiKumiteScore();
    this.resetTimer();
    this.toggleFloatingMenu();
  }

  toggleFloatingMenu() {
    this.floatingMenuVisible.update(visible => !visible);
  }

  get formatedTime() : string {
    const minutes = Math.floor(this.timeSeconds() / 60);
    const seconds = this.timeSeconds() % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  get atoShibaraku() : boolean {
    return this.timeSeconds() >= 60 && this.timeSeconds() <= 62;
  }

  get timeOut() : boolean {
    return this.timeSeconds() >= 90 && this.timeSeconds() <= 92;
  }
}

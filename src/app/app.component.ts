import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sidebarOpen = signal<boolean>(false);

  toggleSidebar(open:boolean | null = null) {
    if (open != null) {
      this.sidebarOpen.set(open);
    } else {
      this.sidebarOpen.update(open => !open);
    }
  }
}

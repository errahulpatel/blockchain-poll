import { PollService } from './poll-service/poll.service';
import { Poll } from './types';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activePoll: Poll = null;
  showForm = false;

  polls = this.ps.getPolls();

  constructor(private ps: PollService) {
    
  }

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}

import { PollService } from './poll-service/poll.service';
import { Poll, PollForm, PollVote } from './types';
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

  constructor(private ps: PollService) {}

  ngOnInit() {
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
    });
  }

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(Poll: PollForm) {
    this.ps.createPoll(Poll);
    this.showForm = false;
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted);
    this.activePoll = null;
  }
}

import { Poll, PollForm, PollVote } from './../types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'Do you like gogs or cates?',
        results: [0, 5, 7],
        options: ['Cates', 'Dogs', 'None'],
        voted: true,
        thumbnail:
          'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
      },
      {
        id: 2,
        question: 'Best Month for summer Holidays?',
        results: [1, 6, 4],
        voted: false,
        options: ['June', 'July', 'August'],
        thumbnail:
          'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      },
    ]).pipe(delay(2000));
  }

  vote(pollVoted: PollVote) {
    console.log(pollVoted);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}

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

  polls: Poll[] = [
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
      id : 2,
      question: 'Best Month for summer Holidays?',
      results: [1, 6, 4],
      voted: false,
      options: ['June', 'July', 'August'],
      thumbnail:
        'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    },
  ];

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}

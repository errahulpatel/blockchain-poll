import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  polls = [
    {
      question: 'Do you like gogs or cates?',
      votes: [0, 5, 7],
      voted: true,
      image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
    },
    {
      question: 'Best Month for summer Holidays?',
      votes: [1, 6, 4],
      voted: false,
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    },
  ];
}

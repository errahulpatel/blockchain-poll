import { Web3Service } from './../blockchain/web3.service';
import { Poll, PollForm, PollVote } from './../types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fromAscii, toAscii } from 'web3-utils';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private web3: Web3Service) {}

  async getPolls(): Promise<Poll[]> {
    const polls: Poll[] = [];

    const totalPolls = await this.web3.call('getTotalPolls');
    const acc = await this.web3.getAccount();
    const voter = await this.web3.call('getVoter', acc);
    const voterNormalized = this.normalizeVoter(voter);
    for (let i = 0; i < totalPolls; i++) {
      const pollRaw = await this.web3.call('getPoll', i);
      const pollNormalized = this.normalizePoll(pollRaw, voterNormalized);
      polls.push(pollNormalized);
    }

    return polls;
    // return of([
    //   {
    //     id: 1,
    //     question: 'Do you like gogs or cates?',
    //     results: [0, 5, 7],
    //     options: ['Cates', 'Dogs', 'None'],
    //     voted: true,
    //     thumbnail:
    //       'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
    //   },
    //   {
    //     id: 2,
    //     question: 'Best Month for summer Holidays?',
    //     results: [1, 6, 4],
    //     voted: false,
    //     options: ['June', 'July', 'August'],
    //     thumbnail:
    //       'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    //   },
    // ]).pipe(delay(2000));
  }

  private normalizeVoter(voter) {
    return {
      id: voter[0],
      voterIds: voter[1].map((vote) => parseInt(vote)),
    };
  }

  private normalizePoll(pollRaw, voter): Poll {
    return {
      id: parseInt(pollRaw[0]),
      question: pollRaw[1],
      thumbnail: pollRaw[2],
      results: pollRaw[3].map((vote) => parseInt(vote)),
      options: pollRaw[4].map((opt) => toAscii(opt).replace(/\u0000/g, '')),
      voted:
        voter.voterIds.length &&
        voter.voterIds.find((votedId) => votedId === parseInt(pollRaw[0])) !=
          undefined,
    };
  }

  vote(pollVoted: PollVote) {
    this.web3.executeTransaction('vote', pollVoted.id, pollVoted.vote);
    // console.log(pollVoted);
  }

  createPoll(poll: PollForm) {
    this.web3.executeTransaction(
      'createPoll',
      poll.question,
      poll.thumbnail || '',
      poll.options.map((opt) => fromAscii(opt))
    );
    // console.log(poll);
  }
}

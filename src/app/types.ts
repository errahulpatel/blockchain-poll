export interface Poll extends PollForm {
  id: number; //12
  results: number[]; // [0,0,0,5,7,2]
  voted: boolean;
}

export interface PollForm {
  question: string; // WHich days of week you like most?
  options: string[]; //["MOnday", "Tuesday", "Wednesday"...]
  thumbnail: string; //https://image.png
}

export interface PollVote {
  id:number;
  vote:number;
}

export interface Voter {
  id: string; //0xJDSDSDDD,
  voted: number[]; // [12]
}



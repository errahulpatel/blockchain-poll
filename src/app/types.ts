export interface Poll {
  id: number; //12
  question: string; // WHich days of week you like most?
  results: number[]; // [0,0,0,5,7,2]
  options: string[]; //["MOnday", "Tuesday", "Wednesday"...]
  thumbnail: string; //https://image.png
}

export interface Voter {
  id: string; //0xJDSDSDDD,
  voted: number[]; // [12]
}

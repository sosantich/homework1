export interface UserData {
  name: { first: string; last: string };
  location: {
    city: string;
    state: string;
  };
  email: string;
  phone: string;
  picture: { large: string };
  dob: { date: string; age: number };
}

export interface UserResult {
  user: UserData;
}

export interface User {
  results: UserResult[];
}

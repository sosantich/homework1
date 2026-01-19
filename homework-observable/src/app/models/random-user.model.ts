export interface RandomUserResponse { results: RandomUser[]; }
export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };


}

export interface User {
  results: Array<{
    name: { title: string; first: string; last: string };
    location: {
      street: { number: number; name: string };
      city: string;
      state: string;
      country: string;
      postcode: string | number;
    };
    email: string;
    phone: string;
    cell: string;
    picture: { large: string; medium: string; thumbnail: string };
    dob: { date: string; age: number };
    login: { uuid: string; username: string };
  }>;
}

export interface ISignUp {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IBook {
  _id: string;
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: object[];
  createdAt?: Date;
}

export interface IReview {
  review: string;
  reviewer: object;
}

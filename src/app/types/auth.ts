export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  email: string;
  password: string;
  name: string;
}

export interface IAuthResponse {
  token: string;
  name: string;
  email: string;
  id: number;
}

export class User{

  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor(){
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
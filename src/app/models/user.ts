export class User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;

  constructor(user: any) {
    this.id = user.id || 0;
    this.first_name = user.first_name || '';
    this.last_name = user.last_name || '';
    this.email = user.email || '';
    this.username = user.username || '';
    this.password = user.password || '';
    this.password_confirmation = user.password_confirmation || '';
  }
}

export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;

  constructor(user: any) {
    this.id = user.id || 0;
    this.first_name = user.first_name || '';
    this.last_name = user.last_name || '';
    this.email = user.email || '';
    this.username = user.username || '';
  }
}

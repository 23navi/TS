interface UserProp {
  name?: string;
  age?: number;
}

export class User {
  constructor(private user: UserProp) {}

  get(propName: string): string | number {
    return this.user[propName];
  }

  set(update: UserProp): void {
    Object.assign(this.user, update);
  }
}

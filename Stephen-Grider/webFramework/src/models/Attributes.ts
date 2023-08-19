class Attribute<T extends object> {
  constructor(private user: T) {}

  // is we did user.get("id"), we will get this user's id
  get(propName: string): string | number {
    return this.user[propName]!;
  }

  set(update: T): void {
    Object.assign(this.user, update);
  }
}
export { Attribute };

const a = "navi";

class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

// creating decorator

function testDecorator(target: any, key: string): void {
  console.log({ target });
  console.log({ key });
}

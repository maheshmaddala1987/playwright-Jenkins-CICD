const words: string[] = ["typescript", "is", "great"];
const sentence: string = words.join(" "); // "typescript is great"

console.log(sentence);

const backToWords: string[] = sentence.split(" ");

console.log(backToWords);

interface UserProfile {
  username: string;
  bio?: string; // optional - may be undefined
}

const profile: UserProfile = { username: "dev_jane" }; 
console.log(profile);

abstract class Shape {
  abstract getLabel(): string;
}

class Circle extends Shape {
  getLabel(): string {
    return "Circle";
  }
}

let circle = new Circle();
const res = circle.getLabel();
console.log(res)



class User {
  private _email: string = "";

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (!value.includes("@")) {
      throw new Error("Invalid email format");
    }
    this._email = value.toLowerCase();
  }
}

const user = new User();
user.email = "TEST@EXAMPLE.COM";
console.log(user.email); // "test@example.com"
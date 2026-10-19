enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

function printStatus(status: Status) {
  console.log(status);
}

printStatus(Status.Approved); // "APPROVED"


enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}




// Option A: String enum
enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

type ThemeUnion = "light" | "dark";

function setTheme(theme: ThemeEnum) { /* ... */ }
setTheme(ThemeEnum.Light); // Error! Must use ThemeEnum.Light

function setThemeUnion(theme: ThemeUnion) { /* ... */ }
setThemeUnion("light"); // Valid! Plain strings work directly

// Option B: String literal union built on the TypeScript string type


const enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}


function logAndReturn <T extends string>(value: T ): T{
    console.log(`value: ${value}`);
    return value;
}

const val = logAndReturn("mahesh");
console.log(val);


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userr = { name: "Aditi", age: 29 };
const namee = getProperty(userr, "name");
console.log(namee);
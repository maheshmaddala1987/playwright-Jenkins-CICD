
const retryCounts: number[] = [0, 1, 2, 3];
const isHeadlessFlags: boolean[] = [true, false, true];
const testEnv: string[] =['dev','uat','test'];

testEnv.push('staging');

console.log(testEnv)

const browserNames: Array<string> = ["chromium", "firefox", "webkit"];
const retryCount: Array<number> = [0, 1, 2, 3];


// Both are valid and equivalent
let statusCodes: (number | string)[] = [200, "OK", 404, "Not Found"];
let statusCodesAlt: Array<number | string> = [200, "OK", 404, "Not Found"];


const environments = ["dev", "qa", "staging", "prod"]; 
// inferred as string[]

const timeouts = [5000, 10000, 30000]; 
// inferred as number[]


let results = []; // starts as any[] under the hood, but TypeScript tracks usage
results.push("passed");
results.push("failed");
// TypeScript now treats results as string[]

results.push(200); 
// Error once you try to read it as string[] in a strict context
console.log(results)


//Union Type Arrays
let mixedResults: (string | number)[] = ["passed", 200, "failed", 500];

function logResult(result: string | number): void {
  if (typeof result === "string") {
    console.log(`Status: ${result}`);
  } else {
    console.log(`Code: ${result}`);
  }
}


mixedResults.forEach(logResult);
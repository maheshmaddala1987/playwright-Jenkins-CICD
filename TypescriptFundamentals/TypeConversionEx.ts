const num = 42;

const a:string  = String(num);     // "42" - explicit, safe, recommended
console.log('------- String approach ----------- :' + a);

const b: string = num.toString();   // "42" - works, but fails on null/undefined
console.log('------- toString approach ----------- :' + b);



const c:string = `${num}`;    // "42" - template literal conversion
console.log('------- assign string variable approach ----------- :' + c);


const d:string = num + "";     // "42" - works, but considered poor style
console.log('------- add empty string at the end approach ----------- :' + d);



// Literal String
const count:number = 10;
const message = `User ${name} has ${count} new messages.`;
console.log('Literal string is : ' + message)


//Template Literal Types Are Case-Sensitive
type Greeting = `Hello, ${string}!`;



console.log(String(null));

console.log(String(undefined));

//const s:string = (null as any).toString();   // Runtime error: Cannot read properties of null
//console.log(s);


// =============== parsing string into Numbers ========================

const input:string = "42";

const asNumber:number =  Number(input);
console.log(asNumber)

const asInt: number = parseInt(input);
console.log(asInt)

const asFloat : number = parseFloat(input);
console.log(asFloat)


// as string 
/*function getElementText(id: string): string {
  const el = document.getElementById(id);
  return (el?.textContent ?? "") as string; // technically redundant here, but shown for illustration
}

getElementText("123");*/

//Non-null assertion
function processs(value: string | undefined) {
  const safe: string = value!; // asserts value is definitely not undefined
  console.log(safe.toUpperCase());
}



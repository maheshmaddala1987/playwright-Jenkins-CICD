//https://qatribe.in/typescript-string-type/


const text: string = "TypeScript";

console.log(text.length);

console.log(text.charAt(0));

console.log('T'.charCodeAt(0));

const s:string ='Hello';

console.log(s.at(-1));

console.log(s.concat('Mahesh'));

console.log(s.includes('H'));

console.log(s.startsWith('H'));

console.log(s.endsWith('o'));

console.log(s.indexOf('H'));

console.log(s.indexOf('w'));

console.log(s.lastIndexOf('o'));

console.log('++++++++++++++   slice    +++++++++++++++++')

console.log(s.slice(3));
console.log(s.slice(1,3));
console.log(s.slice(-5));

console.log('---------------- substring -------------------')

console.log(s.substring(1,4));

console.log('---------------- split -------------------')

console.log("this is typescript program".split(","));

const ss:string = 'Hello Mahesh';

console.log(ss.split(""));

console.log('---------------- replace , replaceAll -------------------')

console.log(ss.replace('Mahesh','prasanth'));

const st:string ='a_b_c';
console.log(st.replaceAll('_','-'));


console.log('&&&&&&&&&&&&&&&&&&&&&&&& generic functions &&&&&&&&&&&&&&&&&&&&&&&&&&&')

console.log("hello".toUpperCase())

console.log("MAHESH".toLowerCase());

console.log("  hello  ".trim());

console.log("    hello     ".trimStart());
console.log("     hello       ".trimEnd());

console.log("ab".repeat(3));

console.log("5".padStart(3, "0"));

console.log("5".padEnd(3, "0"));

console.log("Hello World".search(/World/));

console.log("café".normalize("NFC"));

console.log("apple".localeCompare("banana"))

console.log((42).toString());


const hi:string = "mahesh";
console.log(hi.valueOf());


for (const char of hi) {
  console.log(char); 
}

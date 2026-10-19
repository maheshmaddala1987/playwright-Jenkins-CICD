//https://qatribe.in/typescript-map-definition-syntax-use-cases-vs-objects/



const envConfig = new Map<string, string>([
  ['dev', 'https://dev.myapp.com'],
  ['qa', 'https://qa.myapp.com'],
  ['staging', 'https://staging.myapp.com'],
  ['prod', 'https://myapp.com'],
]);


const studentmap = new Map<string,String>();

studentmap.set('studentId','123');
studentmap.set('name','mahesh');
studentmap.set('gender','male');
studentmap.set('address','Bangalore');


console.log(studentmap)

console.log(Object.keys(studentmap).length);

console.log(studentmap.get('name'));
console.log(studentmap.has('studentId'));
console.log(studentmap.delete('address'));
console.log(studentmap.delete('marks'));
//console.log(studentmap.clear())
console.log(studentmap.size);

// Keys 

for(const studentDetails of studentmap.keys()){
    console.log(studentDetails);
}

//values

for(const studentData of studentmap.values()){
    console.log(studentData)
}


//keys and values

for(const[studentdetails, studentData] of studentmap.entries()){
    console.log(`${studentdetails}: ${studentData}`);
}

//of 
for(const[studentdetails, studentData] of studentmap){
    console.log(`${studentdetails}: ${studentData}`);
}

//for each

studentmap.forEach((status, suiteName) => {
  console.log(`${suiteName}: ${status}`);
});


const entriesArray = [...studentmap]; 
console.log(entriesArray)
// [['login-suite', 'passed'], ['checkout-suite', 'failed'], ['search-suite', 'skipped']]

const keysArray = [...studentmap.keys()];
// ['login-suite', 'checkout-suite', 'search-suite']
console.log(keysArray)

const valuesArray = [...studentmap.values()];
console.log(valuesArray);


const resultObj = { login: 'passed', checkout: 'failed' };
console.log(JSON.stringify(resultObj));

const resultMap = new Map([['login', 'passed'], ['checkout', 'failed']]);
console.log(JSON.stringify(resultMap));

// Map to plain object
const asObject = Object.fromEntries(resultMap);
console.log(JSON.stringify(asObject));
// '{"login":"passed","checkout":"failed"}'

// Map to array of pairs (useful if you need to round-trip back to a Map later)
const asArray = [...resultMap];
console.log(JSON.stringify(asArray));
// '[["login","passed"],["checkout","failed"]]'

// Rebuilding the Map from that array
const rebuiltMap = new Map(JSON.parse(JSON.stringify(asArray)));



const formFieldValues: Record<string, string> = {};
formFieldValues['toString'] = 'user typed this as a field name';

console.log(formFieldValues.toString); 
// 'user typed this as a field name' — okay, worked here because we overwrote it directly

console.log(formFieldValues.hasOwnProperty('toString')); 
// true, correctly, but this kind of check gets fragile fast

// Now imagine someone does this instead:
const dangerousData = JSON.parse('{"__proto__": {"isAdmin": true}}');
const merged = { ...formFieldValues, ...dangerousData };
// depending on how this merge happens, this can be a genuine security issue
// known as prototype pollution



//Checking for Key Existence
const obj = { name: 'Ajit' };

console.log('name' in obj); // true — but 'in' also checks inherited properties
console.log('toString' in obj); // true! toString is inherited from Object.prototype

console.log(obj.hasOwnProperty('name')); // true, correctly scoped to own properties
console.log(obj.hasOwnProperty('toString')); // false, correctly excludes inherited stuff





console.log('------------------- convert map to obj & obj -> Map & Array -> Map & Map -> Array -----------------------')



// Object → Map
const objj = { login: 'passed', checkout: 'failed', search: 'passed' };
const map = new Map(Object.entries(objj));
console.log(map)

// Map → Object
const map2 = new Map([['login', 'passed'], ['checkout', 'failed']]);
const obj2 = Object.fromEntries(map2);
console.log(obj2)

// Map → Array of entries
const entriesArrayy = Array.from(map2); 
console.log(entriesArrayy)
// or: const entriesArray = [...map2];

// Array of entries → Map
const rebuiltMapp = new Map(entriesArrayy);
console.log(rebuiltMapp)

// Map → Array of just keys
const keysArrayy = Array.from(map2.keys());
console.log(keysArrayy)

// Map → Array of just values
const valuesArrays = Array.from(map2.values());
console.log(valuesArrays)



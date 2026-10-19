

interface User {
  name: string;
  age: number;
  isActive: boolean;
  id: number;
}

function generateId(): number{
  return 123;
}

/*function createUser(name: string, age: number, isActive: boolean = true): User {
  return { name, age, isActive, id: generateId(), _email: "", email: "" };
}*/


function calculateProcessingFee(
  amount: number,
  currency: string,
  isPremiumAccount: boolean): number 
  {
  const baseFeeRate = isPremiumAccount ? 0.015 : 0.025;
  const fee = amount * baseFeeRate;
  return currency === 'INR' ? Math.round(fee) : Number(fee.toFixed(2));
}

function buildTestConfig(
  environment: string,
  baseUrl: string = environment === 'prod' ? 'https://app.example.com' : 'https://staging.example.com',
  timeout: number = 30000
) {
  return { environment, baseUrl, timeout };
}

function logTestStep(stepName: string, ...details: string[]): void {
  console.log(`[${new Date().toISOString()}] ${stepName}: ${details.join(', ')}`);
}

//const result = createUser("mahesh",25,true);
//console.log(result);

const money:number = calculateProcessingFee(12,'',true);
console.log(money);


const testConfig = buildTestConfig("dev",'prod');
console.log(testConfig);

logTestStep('this is mahesh');
logTestStep('mahesh','username = prasanth','environment = staging');
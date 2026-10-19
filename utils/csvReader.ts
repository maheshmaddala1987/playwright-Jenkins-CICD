import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Define an interface for strong TypeScript typing
/*interface LoginTestData {
  username: string;
  password: string;
  expectedStatus: string;
}

// 1. Read and parse the CSV file synchronously
const records: LoginTestData[] = parse(
  fs.readFileSync(path.join(__dirname, 'test-data.csv')), 
  {
    columns: true,           // Treats the first row as headers/keys
    skip_empty_lines: true,  // Ignores blank lines in your CSV file
    trim: true               // Trims whitespaces from values
  }
);
*/

export function readCSV(filePath: string){

    // const fullPath = path.resolve(filePath);
    // console.log ('Full File Path ', fullPath)

    const fileContent = fs.readFileSync(filePath);

    const records = parse(fileContent,{
        columns:true,
        skip_empty_lines: true,
        trim: true  
    });
    return records;
}
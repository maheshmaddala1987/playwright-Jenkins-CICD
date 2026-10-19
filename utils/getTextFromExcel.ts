/*import * as xlsx from 'xlsx';
import path from 'path';

export function readExcelDataa(filePath: string, sheetName?: string): Record<string, unknown>[] {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(__dirname, '.testdata.', filePath);
  const fullpath = xlsx.readFile(absolutePath);
  
  // Use the provided sheet name or default to the first sheet
  const name = sheetName ?? fullpath.SheetNames[0];
  const worksheet = fullpath.Sheets[name];

  // Convert sheet to an array of objects with dynamic/unknown keys
  const rows: Record<string, unknown>[] = xlsx.utils.sheet_to_json(worksheet);
  return rows;
}
*/
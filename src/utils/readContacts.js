import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const readContacts = async () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) {
      console.error('Data is not an array:', contacts);
      return [];
    }
    return contacts;
  } catch (error) {
    console.error('Oops, an error occurred while reading a file😢', error);
    return [];
  }
};
console.log('Successful contact reading!😉');

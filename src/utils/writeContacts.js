import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    fs.writeFileSync(PATH_DB, data, 'utf-8');
    console.log('Contacts successfully written to file!😉');
  } catch (error) {
    console.error('Oops, an error occurred while written a file😢', error);
  }
};

import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts(PATH_DB);
    return contacts;
  } catch (error) {
    console.error('An error occurred while getting  contacts:😢', error);
    return [];
  }
};

getAllContacts([]);
console.log('Successful retrieval of all contacts!😉');

import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts.length;
  } catch (error) {
    console.error('Oops, an error occurred while reading of contacts😢', error);
    return 0;
  }
};

export const totalContacts = await countContacts();
console.log(`Total contacts: ${totalContacts}`);

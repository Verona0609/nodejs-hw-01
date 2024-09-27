import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('An error occurred while getting  contacts:😢', error);
    return [];
  }
};

getAllContacts().then((contacts) => {
  console.log('Successful retrieval of all contacts!😉', contacts);
});

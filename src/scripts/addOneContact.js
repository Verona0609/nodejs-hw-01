import { readContacts } from '../utils/readContacts.js';
/* import { PATH_DB } from '../constants/contacts.js'; */
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
    console.log('New contact added successfully!😉');
  } catch (error) {
    console.error('An error occurred while adding a contact😢:', error);
  }
};

addOneContact(1);

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts === 0) {
      console.log('No contacts to remove');
      return;
    }
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('All contacts have been removed!👍');
  } catch (error) {
    console.error('Failed to delete all contacts.😢', error);
  }
};

removeAllContacts();

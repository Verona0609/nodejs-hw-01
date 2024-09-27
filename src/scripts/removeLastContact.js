import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is not an array.');
    }

    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Last contact deleted successfully!🙂');
    } else {
      console.log('No contacts to delete!😕');
    }
  } catch (error) {
    console.error('Failed to delete a last contact.😢', error);
  }
};

removeLastContact();

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (numContact) => {
  try {
    const existingContacts = await readContacts();

    const newContact = [];

    for (let i = 0; i < numContact; i++) {
      const contact = createFakeContact();
      newContact.push(contact);
    }

    const updatedContacts = [...existingContacts, ...newContact];

    await writeContacts(updatedContacts);
    console.log('Successful contacts generete!😉');
  } catch (error) {
    console.error(
      'Oops, an error occurred while genereting of contacts😢',
      error,
    );
  }
};

generateContacts(4);

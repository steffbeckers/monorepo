import { signalStore } from '@ngrx/signals';
import { ContactsService } from '@steffbeckers/crm/data-access';
import { withEntitiesList } from '@steffbeckers/shared/data-access';
import { Contact } from './contact.model';

export const ContactsStore = signalStore(
  withEntitiesList<Contact, ContactsService>(ContactsService, {
    initialState: {
      sorting: 'FirstName ASC',
    },
    pageTitle: 'CRM::Contacts',
    persistence: {
      name: 'contacts',
    },
  })
);

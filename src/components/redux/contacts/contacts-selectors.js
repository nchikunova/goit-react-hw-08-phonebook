import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
   getContacts,
   getLoading,
   getError,
   getFilter,
   getFilteredContacts,
};

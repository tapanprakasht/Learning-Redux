export const addContact = contact => {
  console.log("addContact action" + contact);
  return {
    type: "ADD_CONTACT",
    payload: contact
  };
};

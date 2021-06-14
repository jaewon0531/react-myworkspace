const initialState = [];

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_CONTACT_SUCCEEDED":
      return state.filter((contact) => contact.id !== action.payload);
    case "MODIFY_CONTACT_SUCCEEDED":
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );
    case "FETCH_CONTACTLIST_SUCCEEDED":
      return [...action.payload];
    default:
      return state;
  }
};

export default contact;
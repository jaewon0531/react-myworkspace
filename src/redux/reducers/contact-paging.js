const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_CONTACT_SUCCEEDED": {
      const newState = { ...state };

      newState.content = state.content.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );

      return newState;
    }

    case "FETCH_CONTACTLIST_PAGING_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
      };

    default:
      return state;
  }
};

export default contact;
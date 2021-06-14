const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_TODO_SUCCEEDED": {
      const newState = { ...state };

      newState.content = state.content.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );

      return newState;
    }

    case "FETCH_TODOLIST_PAGING_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
      };

    case "SEARCH_TODOLIST_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        keyword: action.payload.keyword,
        totalElements: action.payload.totalElements,
      };
    default:
      return state;
  }
};

export default todo;
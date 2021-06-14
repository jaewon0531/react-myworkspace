import List from "@material-ui/core/List";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TodoPagination from "./TodoPagination";

const TodoList = () => {
  const data = useSelector((state) => state.todo);
  const { page, size } = useSelector((state) => state.todo);
  console.log("-- todo state in TodoList Component --");
  console.log(data);
  const dispatch = useDispatch();
  const inputSearch = useRef();

  useEffect(() => {
    dispatch({ type: "FETCH_TODOLIST_PAGING" });
  }, [dispatch]);

  const search = (event) => {
    const keyword = inputSearch.current.value;
    dispatch({
      type: "SEARCH_TODOLIST",
      payload: { page, size, keyword },
    });
    inputSearch.current.value = "";
  };

  const change = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      search();
    }
  };

  return (
    <div>
      <List style={{ height: "40vh", overflowY: "auto" }}>
        {data.content.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
      <TodoPagination
        totalElements={data.totalElements}
        page={data.page}
        size={data.size}
        keyword={data.keyword}
      />
      <TextField
        variant="outlined"
        inputRef={inputSearch}
        label="조회"
        onKeyPress={change}
        size="small"
        style={{
          width: "30%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={search}
      >
        입력
      </Button>
    </div>
  );
};

export default TodoList;
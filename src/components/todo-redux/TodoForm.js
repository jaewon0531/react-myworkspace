import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const add = () => {
    const memo = inputRef.current.value;
    dispatch({ type: "ADD_TODO", payload: { memo } });
    inputRef.current.value = "";
  };
  const change = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="할 일 ..."
        onKeyPress={change}
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={add}
      >
        입력
      </Button>
    </div>
  );
};

export default TodoForm;
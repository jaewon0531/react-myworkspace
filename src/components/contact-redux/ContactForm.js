import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const inputName = useRef();
  const inputPhone = useRef();
  const inputMail = useRef();
  const dispatch = useDispatch();

  const add = () => {
    const name = inputName.current.value;
    const phone = inputPhone.current.value;
    const email = inputMail.current.value;
    dispatch({ type: "ADD_CONTACT", payload: { name, phone, email } });
    inputName.current.value = "";
    inputPhone.current.value = "";
    inputMail.current.value = "";
  };
  const change = (event) => {
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputName}
        label="이름"
        onKeyPress={change}
        size="small"
        style={{
          width: "20%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputPhone}
        label="전화번호"
        onKeyPress={change}
        size="small"
        style={{
          width: "40%",
          marginRight: "0.5rem",
        }}
      />
      <TextField
        variant="outlined"
        inputRef={inputMail}
        label="이메일"
        onKeyPress={change}
        size="small"
        style={{
          width: "40%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={() => {
          add();
        }}
      >
        입력
      </Button>
    </div>
  );
};

export default ContactForm;
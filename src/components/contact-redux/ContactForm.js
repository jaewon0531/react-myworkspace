import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {

  const dispatch = useDispatch();

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const add = () => {
    dispatch({
      type: "ADD_PERSONINFO",
      payload: {
        id: new Date().getTime(),
        name: input1.current.value,
        phone: input2.current.value,
        mail: input3.current.value,
      }
    });

    input1.current.value = '';
    input2.current.value = '';
    input3.current.value = '';
  }

  return (
    <div>
      <TextField type='text' label="이름" inputRef={input1} />
      <TextField type='text' label="전화번호" inputRef={input2} />
      <TextField type='text' label="이메일" inputRef={input3} />
      <Button color='primary' onClick={() => { add(); }}>입력</Button>
    </div>
  )
}

export default ContactForm;
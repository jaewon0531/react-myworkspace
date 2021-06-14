import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const ContactTableRow = ({ personInfo }) => {
  const [isEdit, setIsEdit] = useState(personInfo.isEdit);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const dispatch = useDispatch();

  const save = (id) => {
    console.log(id);
    dispatch({
      type: "SAVE_MODEFIED_PERSONINFO",
      payload: {
        id: id,
        name: input1.current.value,
        phone: input2.current.value,
        mail: input3.current.value,
      },
    });
  };

  const remove = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_PERSONINFO",
      payload: id,
    });
  };

  return (
    <TableRow>
      <TableCell scope="row">
        {isEdit ? (
          <TextField inputRef={input1} defaultValue={personInfo.name} />
        ) : (
          personInfo.name
        )}
      </TableCell>

      <TableCell align="center">
        {isEdit ? (
          <TextField inputRef={input2} defaultValue={personInfo.phone} />
        ) : (
          personInfo.phone
        )}
      </TableCell>

      <TableCell align="center">
        {isEdit ? (
          <TextField inputRef={input3} defaultValue={personInfo.mail} />
        ) : (
          personInfo.mail
        )}
      </TableCell>

      <TableCell align="center">
        {!isEdit && (
          <Button color="primary" onClick={() => { setIsEdit(true) }}>수정</Button>
        )}

        {isEdit && (
          <Button color="primary" onClick={() => { remove(personInfo.id); }}>삭제</Button>
        )}

        {isEdit && (
          <Button color="primary" onClick={() => { save(personInfo.id); setIsEdit(false); }}>저장</Button>
        )}

        {isEdit && (
          <Button color="primary" onClick={() => { setIsEdit(false); }}>취소</Button>
        )}

      </TableCell>
    </TableRow>
  );
};

export default ContactTableRow;
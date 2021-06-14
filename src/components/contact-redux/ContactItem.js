import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import DeleteIcon from "@material-ui/icons/Delete";

const ContactItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(contact.isEdit);
  const dispatch = useDispatch();
  const inputName = useRef();
  const inputPhone = useRef();
  const inputMail = useRef();

  const history = useHistory();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const name = inputName.current.value;
    const phone = inputPhone.current.value;
    const email = inputMail.current.value;

    dispatch({ type: "MODIFY_CONTACT", payload: { id, name, phone, email } });
  };
  return (
    <TableRow>
      <TableCell>
        <Button
          onClick={() => {
            remove(contact.id);
          }}
        >
          <DeleteIcon style={{ cursor: "pointer" }} />
        </Button>
      </TableCell>
      <TableCell>
        {!isEdit && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push(`/contacts/${contact.id}`);
            }}
          >
            {contact.name}
          </span>
        )}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.name}
            inputRef={inputName}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.phone}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.phone}
            inputRef={inputPhone}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.email}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.email}
            inputRef={inputMail}
          ></TextField>
        )}
      </TableCell>
      <TableCell style={{ display: "flex" }}>
        {!isEdit && (
          <Button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </Button>
        )}
        {isEdit && (
          <Button
            onClick={() => {
              save(contact.id);
              setIsEdit(false);
            }}
          >
            저장
          </Button>
        )}
        {isEdit && (
          <Button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ContactItem;
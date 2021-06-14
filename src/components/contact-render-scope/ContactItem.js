import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactItem = ({ index, contact, onRemove, onSave }) => {
  const [isEdit, setIsEdit] = useState(contact.isEdit);
  return (
    <TableRow>
      <TableCell>
        <Button
          onClick={() => {
            onRemove(index);
          }}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
      <TableCell>
        {!isEdit && <span>{contact.name}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.name}
            inputProps={{ className: "name" }}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.phone}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.phone}
            inputProps={{ className: "phone" }}
          ></TextField>
        )}
      </TableCell>

      <TableCell>
        {!isEdit && <span>{contact.mail}</span>}
        {isEdit && (
          <TextField
            type="text"
            defaultValue={contact.mail}
            inputProps={{ className: "mail" }}
          ></TextField>
        )}
      </TableCell>
      <TableCell>
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
              onSave(index);
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
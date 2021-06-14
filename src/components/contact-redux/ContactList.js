import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactPagination from "./ContactPagination";

const ContactList = () => {
  const data = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTLIST_PAGING" });
  }, [dispatch]);

  return (
    <div>
      <TableContainer style={{ height: "45vh", overflowY: "scroll" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>이름</TableCell>
              <TableCell>전화번호</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.content.map((contact) => (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            ))}
          </TableBody>
        </Table>
        <ContactPagination
          totalElements={data.totalElements}
          page={data.page}
          size={data.size}
        />
      </TableContainer>
    </div>
  );
};

export default ContactList;
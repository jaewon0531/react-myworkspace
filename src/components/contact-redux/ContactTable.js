import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer/"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";
import ContactTableRow from "./ContactTableRow";

const ContactTable = () => {

  const contactList = useSelector((state) => state.contact);

  return (
    <div>
      <TableContainer component={Paper}>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell align="center">전화번호</TableCell>
              <TableCell align="center">이메일</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contactList.map((personInfo) => (
              <ContactTableRow Key={personInfo.id} personInfo={personInfo} />
            ))}
          </TableBody>

        </Table>

      </TableContainer>
    </div>
  );
};

export default ContactTable;
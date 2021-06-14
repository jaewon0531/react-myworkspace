import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import { Box, Button, Divider, Typography } from "@material-ui/core";

import { useParams, useHistory } from "react-router-dom";

import ContactComment from "./ContactComment";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

const ContactDetail = () => {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const contact = useSelector(
    (state) => state.contact.filter((contact) => contact.id === parseInt(id))[0]
  );

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Typography variant="h3">Contact</Typography>
            <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
            <Box style={{ padding: "1rem" }}>{contact.fname}</Box>
            <Box style={{ display: "flex", direction: "rtl" }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => {
                  history.push("/contacts");
                }}
              >
                목록
              </Button>
            </Box>
          </Paper>
          {contact.comments && (
            <Paper style={{ marginTop: "2rem" }} className={classes.paper}>
              <List>
                {contact.comments.map((comment, index) => (
                  <ContactComment key={index} index={index} comment={comment} />
                ))}
              </List>
            </Paper>
          )}
        </Grid>
        <Hidden xsDown>
          <Grid item sm={1} md={2} lg={3} />
        </Hidden>
      </Grid>
    </>
  );
};

export default ContactDetail;
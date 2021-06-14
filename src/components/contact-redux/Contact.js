import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "100px",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={1} lg={3}></Grid>
        <Grid item sm={12} md={10} lg={7}>

          <Paper />
          <Paper className={classes.paper}>

            <ContactForm />
            <ContactTable />

          </Paper>
        </Grid>
        <Grid item md={1} lg={2}></Grid>

      </Grid>
    </div>
  );
};

export default Contact;
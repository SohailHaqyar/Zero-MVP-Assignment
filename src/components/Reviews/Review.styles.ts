import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100vh",
      width: "100%",
      paddingTop: "22%",
    },

    button: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      background: "#F6EFD9",
      color: "#000",
      display: "flex",
      alignItems: "center",
      fontSize: 18,
      padding: 14,
      borderRadius: 40,
    },
    icon: {
      fontSize: 48,
      color: palette.primary.main,
      marginRight: 10,
    },
  })
);

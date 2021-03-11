import {
  Button,
  CircularProgress,
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {
      marginTop: 20,
      paddingTop: 20,
      height: "40vh",
    },

    form: {
      display: "flex",
      alignItems: "center",
    },

    product_image: {
      width: 100,
      height: 140,
    },

    product_detail: {
      marginLeft: 14,
      "& h2": {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: "'Noto Sans JP'",
      },
      "& span": {
        color: "limegreen",
        fontSize: 19,
      },
    },
  })
);

export const StyledHeader = withStyles({
  root: {
    fontSize: 28,
    fontWeight: 400,
    marginBottom: 10,
    lineHeight: 1.5,
    width: "90%",
    letterSpacing: 0.1,
    fontFamily: "'Noto Sans JP'",
  },
})(Typography);

export const StyledCircularProgress = withStyles({
  root: {
    marginLeft: 10,
  },
})(CircularProgress);

export const DisappearingBtn = withStyles({
  root: { display: "none" },
})(Button);

export const StyledInfoButton = withStyles({
  root: {
    color: "#6085ff",
    fontSize: 13,
    fontFamily: "'Noto Sans JP'",
    borderBottom: "1px solid #6085ff",
    "&:hover": {
      cursor: "pointer",
    },
  },
})(Box);

export const StyledProductWrapper = withStyles({
  root: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
  },
})(Box);

export const StyledProduct = withStyles({
  root: {
    display: "flex",
    marginLeft: 48,
  },
})(Box);

export const StyledProductError = withStyles({
  root: {
    display: "flex",
    marginTop: 25,
    alignItems: "center",
  },
})(Box);

export const StyledErrorText = withStyles({
  root: {
    marginLeft: 10,
    fontFamily: "'Noto Sans JP'",
    fontSize: 22,
    color: "red",
  },
})(Box);

import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    container: {
      paddingTop: "5%",
    },

    logo: {
      position: "absolute",
      top: 0,
      right: "83%",
      width: "180px",
      height: "100px",
    },

    iconWrapper: {
      position: "absolute",
      bottom: 22,
      left: "50%",
      right: "50%",
    },
  })
);

export const StyledSubTitle = withStyles({
  root: {
    fontSize: 38,
    fontFamily: "'Noto Sans JP'",
    fontWeight: 500,
    lineHeight: 1.8,
    marginBottom: 10,
  },
})(Typography);
export const StyledTitle = withStyles({
  root: {
    color: "#FECC2F",
    fontSize: 52,
    fontFamily: "'Noto Sans JP'",
    fontWeight: 500,
    marginTop: 48,
    marginBottom: 30,
  },
})(Typography);

export const StyledArroDownIcon = withStyles({
  root: {
    fontSize: 58,
    color: "black",
    borderRadius: "50%",
    border: "2px solid #000",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.15)",
      cursor: "pointer",
    },
  },
})(KeyboardArrowDown);

import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import useAlertStyles from "./Alert.styles";
interface AlertProps {
  children: React.ReactChild;
}
export const Alert: React.FC<AlertProps> = ({ children }) => {
  const styles = useAlertStyles();
  return (
    <div className={styles.root}>
      <ErrorIcon className={styles.icon} />
      <span>{children}</span>
    </div>
  );
};

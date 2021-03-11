import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  btnContent: string;
}
export const CustomDialog: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  title,
  content,
  btnContent,
}) => {
  return (
    <Dialog
      open={isOpen}
      style={{ padding: "28px" }}
      onClose={() => {
        setIsOpen(!isOpen);
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          color="primary"
        >
          {btnContent}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

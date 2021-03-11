import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";

import useProductStyles, {
  DisappearingBtn,
  StyledCircularProgress,
  StyledInfoButton,
} from "../Product.styles";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  asinState: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => React.Dispatch<React.SetStateAction<boolean>>;
}
export const ASINForm: React.FC<Props> = ({
  onChange,
  onSubmit,
  value,
  asinState,
  isOpen,
  setIsOpen,
}) => {
  const styles = useProductStyles();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <StyledInfoButton onClick={handleClick}>see how</StyledInfoButton>
            </InputAdornment>
          ),
        }}
      />
      {asinState === "loading" && <StyledCircularProgress />}
      <DisappearingBtn type="submit" />
    </form>
  );
};

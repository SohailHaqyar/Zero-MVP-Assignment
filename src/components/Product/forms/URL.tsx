import { TextField } from "@material-ui/core";
import React from "react";

import useProductStyles, {
  DisappearingBtn,
  StyledCircularProgress,
} from "../Product.styles";
interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  urlState: string;
}
export const URLForm: React.FC<Props> = ({
  onChange,
  onSubmit,
  value,
  urlState,
}) => {
  const styles = useProductStyles();
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
      />
      {urlState === "loading" && <StyledCircularProgress />}
      <DisappearingBtn type="submit" />
    </form>
  );
};

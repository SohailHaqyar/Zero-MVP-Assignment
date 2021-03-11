import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { StyledHeader } from "../Product/Product.styles";
import useReviewStyles from "./Review.styles";

interface Props {
  urlValidationStatus: string;
  asinValidationStatus: string;
}

export const Review: React.FC<Props> = ({
  asinValidationStatus,
  urlValidationStatus,
}) => {
  const [firstBox, setFirstBox] = useState("");
  const [secondBox, setSecondBox] = useState("");

  let isValid;
  if (asinValidationStatus === "valid" || urlValidationStatus === "valid")
    isValid = true;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Alrighty then.");
  };
  const styles = useReviewStyles();
  return (
    <form className={styles.container} id="review" onSubmit={handleSubmit}>
      <Grid container spacing={6} style={{ height: "70%" }}>
        <Grid item xs={6}>
          <StyledHeader style={{ height: "20%" }}>
            What made you pick this product from the search results?
          </StyledHeader>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={14}
            value={firstBox}
            disabled={!isValid}
            onChange={(e) => setFirstBox(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <StyledHeader style={{ height: "20%" }}>
            Looking at the product detail page, what grabes your attention the
            most ? What do you like about this product?
          </StyledHeader>
          <TextField
            fullWidth
            value={secondBox}
            onChange={(e) => setSecondBox(e.target.value)}
            variant="outlined"
            margin="normal"
            multiline
            rows={14}
            disabled={!isValid}
          />
        </Grid>
      </Grid>
      <div className={styles.button}>
        <Button
          color="primary"
          variant="contained"
          disableElevation
          style={{ width: "35%" }}
          disabled={!isValid}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

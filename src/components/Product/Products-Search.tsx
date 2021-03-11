import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { CustomDialog } from "../Dialog/Dialog";
import { ASINForm, URLForm } from "./forms";
import { Product } from "./Product";
import useProductStyles, { StyledHeader } from "./Product.styles";

const validURL =
  "https://www.amazon.com/One-Womens-Petite-Multivitamins-Count/dp/B004XSOJ02";

const validAsin = "B004QQ9LVS";

interface Props {
  urlValidationStatus: string;
  setUrlValidationStatus: React.Dispatch<React.SetStateAction<string>>;
  asinValidationStatus: string;
  setAsinValidationStatus: React.Dispatch<React.SetStateAction<string>>;
}
export const ProductsSearch: React.FC<Props> = ({
  urlValidationStatus,
  setUrlValidationStatus,
  asinValidationStatus,
  setAsinValidationStatus,
}) => {
  const [url, setUrl] = useState("");
  const [asin, setAsin] = useState("");
  const styles = useProductStyles();

  const [urlState, setUrlState] = useState("initial");
  const [asinState, setAsinState] = useState("initial");

  const [isOpen, setIsOpen] = useState(false);

  const handleURLSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUrlState("loading");
    setTimeout(() => {
      if (url === validURL) {
        setUrlValidationStatus("valid");
      } else {
        setUrlValidationStatus("invalid");
      }
      setUrlState("completed");
      setUrl("");
    }, 3000);
  };

  const handleASINSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAsinState("loading");

    setTimeout(() => {
      if (asin === validAsin) {
        setAsinValidationStatus("valid");
      } else {
        setAsinValidationStatus("invalid");
      }
      setAsinState("completed");
      setAsin("");
    }, 3000);
  };

  const returnASINForm = () => {
    if (urlValidationStatus === "invalid") {
      return (
        <Grid item xs={6}>
          <StyledHeader style={{ width: "70%" }}>
            OR Try to find manually the ASIN
          </StyledHeader>
          <ASINForm
            onChange={(e) => setAsin(e.target.value)}
            onSubmit={handleASINSubmit}
            value={asin}
            asinState={asinState}
            isOpen={isOpen}
            setIsOpen={setIsOpen as any}
          />
          {asinState === "completed" && (
            <Product isValid={asinValidationStatus} />
          )}
        </Grid>
      );
    } else return;
  };

  return (
    <div className={styles.wrapper}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <StyledHeader>
            Paste here the URL of the product that you choose!
          </StyledHeader>

          <URLForm
            onChange={(e) => setUrl(e.target.value)}
            onSubmit={handleURLSubmit}
            value={url}
            urlState={urlState}
          />
          {urlState === "completed" && (
            <Product isValid={urlValidationStatus} />
          )}
        </Grid>
        {returnASINForm()}
      </Grid>

      <button type="submit" style={{ display: "none" }}>
        Submit
      </button>
      <CustomDialog
        btnContent="Um Awkard."
        isOpen={isOpen}
        setIsOpen={setIsOpen as any}
        title="What country is growing the fastest?"
        content="Ireland. It's Dublin everyday"
      />
    </div>
  );
};

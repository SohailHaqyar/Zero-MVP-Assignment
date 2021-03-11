import { Container } from "@material-ui/core";
import React, { useState } from "react";
import useAppStyles, {
  StyledArroDownIcon,
  StyledSubTitle,
  StyledTitle,
} from "./App.styles";
import { Alert, ProductsSearch, Review } from "./components";
import Logo from "./images/Assesment-Logo.png";
const App = () => {
  const [urlValidationStatus, setUrlValidationStatus] = useState("");
  const [asinValidationStatus, setAsinValidationStatus] = useState("");

  const styles = useAppStyles();

  return (
    <Container className={styles.container} maxWidth="lg">
      <img src={Logo} alt="Logo" className={styles.logo} />
      <StyledTitle variant="h1">2nd Step</StyledTitle>
      <StyledSubTitle variant="h2">
        Go to Amazon.com and search the word{" "}
        <span style={{ color: "#194df8", userSelect: "none" }}>sleep aid</span>{" "}
        and pick the product that is most appealing to you
      </StyledSubTitle>
      <Alert>
        As this is for market research please do not select our products
      </Alert>
      <ProductsSearch
        urlValidationStatus={urlValidationStatus}
        setUrlValidationStatus={setUrlValidationStatus}
        asinValidationStatus={asinValidationStatus}
        setAsinValidationStatus={setAsinValidationStatus}
      />
      <a href="#review" className={styles.iconWrapper}>
        <StyledArroDownIcon />
      </a>
      <Review
        urlValidationStatus={urlValidationStatus}
        asinValidationStatus={asinValidationStatus}
      />
    </Container>
  );
};

export default App;

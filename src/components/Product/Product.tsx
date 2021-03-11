import { Typography } from "@material-ui/core";
import useProductStyles, {
  StyledErrorText,
  StyledProduct,
  StyledProductError,
  StyledProductWrapper,
} from "./Product.styles";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

interface Props {
  isValid: string;
}
export const Product: React.FC<Props> = ({ isValid }) => {
  const styles = useProductStyles();
  if (isValid === "valid") {
    return (
      <StyledProductWrapper>
        <img
          src="https://cherryplus.com/wp-content/uploads/cherry-plus-kirsche-konzentrat-vorteile.jpg"
          className={styles.product_image}
        />
        <StyledProduct>
          <CheckCircleIcon style={{ fontSize: 48, color: "limegreen" }} />
          <div className={styles.product_detail}>
            <Typography variant="h2">Cherry Plus Concentrate</Typography>
            <span>This is a Valid product</span>
          </div>
        </StyledProduct>
      </StyledProductWrapper>
    );
  } else {
    return (
      <StyledProductError>
        <ErrorIcon style={{ fontSize: 48, color: "red" }} />
        <StyledErrorText>
          Sorry we didn't find product information at this URL
        </StyledErrorText>
      </StyledProductError>
    );
  }
};

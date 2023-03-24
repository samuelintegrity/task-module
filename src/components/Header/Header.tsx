import { Typography } from "@mui/material";
import {ReactNode} from "react"
import { Container } from "./Header.style";

interface Props {
  children: ReactNode;
}

const Header = ({children}: Props) => {
  return (
    <Container>
      <Typography>{children}</Typography>
    </Container>
  );
};

export default Header;

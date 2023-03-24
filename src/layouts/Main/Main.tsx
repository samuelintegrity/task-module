import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./Main.style";

interface Props {
  children: ReactNode[] | ReactNode;
}

const Main = ({ children }: Props) => {
  let location = useLocation();

  useEffect(() => {
    window.eventBus.sendMessage({ type: "router-location-change", appName: "/tasks", data: location });
  }, [location]);

  return <Container>{children}</Container>;
};

export default Main;

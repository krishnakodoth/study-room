import { Layout } from "antd";
import { styled } from "styled-components";
import AppLogo from "./AppLogo";
import AppName from "./AppName";

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <StickyHeader>
        <div className="appLogoWrapper">
          <AppLogo />
          <AppName />
        </div>
      </StickyHeader>
  )
}

const StickyHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: "100%";
  display: flex;
  align-items: "center",
`;
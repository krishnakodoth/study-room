import styled from "styled-components";
import { Spin } from "antd";

const Spinner = () => {
  return (
    <SpinContainer> <Spin /> </SpinContainer>
  )
}

const SpinContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default Spinner
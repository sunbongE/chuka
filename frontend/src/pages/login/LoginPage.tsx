import logo from "/img/img_main_logo.png";
import styled from "styled-components";
import { colors } from "@styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 5px;
`;

export const Highlight = styled(Text)`
  color: ${colors.mainPink};
`;

export const FlexRow = styled.div`
  display: flex;
`;

const LoginPage = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Text>특별한 날,</Text>
      <FlexRow>
        <Text>함께</Text>
        <Highlight>축하</Highlight>
        <Text>해요</Text>
      </FlexRow>
    </Container>
  );
};

export default LoginPage;

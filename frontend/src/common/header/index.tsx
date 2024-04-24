import { colors } from "@/styles/theme";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

type HeaderType = {
  children: string;
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.span`
  color: ${colors.black};
  font-weight: 400;
  flex-grow: 1;
  text-align: center;
`;

const Icon = styled(IoIosArrowBack)`
  font-size: 24px;
  cursor: pointer;
`;

const index = (props: HeaderType) => {
  const { children } = props;
  const handleBack = () => {
    console.log("뒤로가기");
    window.history.back();
  };

  return (
    <Wrapper>
      <Icon onClick={handleBack} />
      <Header>{children}</Header>
    </Wrapper>
  );
};

export default index;

import { colors } from "@/styles/theme";
import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding-left: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button<{ $active: boolean }>`
  width: 80px;
  height: 32px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.$active ? colors.mainPink : colors.inputGray)};
  color: ${(props) => (props.$active ? colors.mainPink : colors.inputGray)};
  font-size: 1em;
`;
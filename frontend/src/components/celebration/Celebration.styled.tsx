import styled from "styled-components";
import { colors } from "@styles/theme";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  row-gap: 0.5em;
  column-gap: 1em;
`;

export const ThemeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5em;
`;

export const Button = styled.button<{ $active: boolean }>`
  background-color: ${colors.white};
  border: 2px solid
    ${(props) => (props.$active ? colors.mainPink : colors.gray)};
  color: ${(props) => (props.$active ? colors.mainPink : colors.gray)};
  border-radius: 0.7em;
  font-size: 0.9em;
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IsPublicButton = styled.button<{ $active: boolean }>`
background-color: ${(props) => (props.$active ? colors.mainPink : colors.white)};
border: 2px solid ${colors.mainPink};
color: ${(props) => (props.$active ? colors.white : colors.mainPink)};
border-radius: 0.7em;
font-size: 0.9em;
width: 100px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
`;

export const PublicWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1em;
    margin-right: 7.5em;
    margin-bottom: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 60px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const P = styled.p`
  color: ${colors.gray};
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const ImgPreview = styled.img`
  display: block;
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  max-height: 100vh;
  width: 30%;
  height: auto;
`;

export const ThemeButton = styled.button<{ $active: boolean }>`
  background-color: ${colors.white};
  border: 2px solid
    ${(props) => (props.$active ? colors.mainPink : colors.gray)};
  color: ${(props) => (props.$active ? colors.mainPink : colors.gray)};
  border-radius: 0.7em;
  font-size: 0.9em;
  width: 150px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThemeImg = styled.img`
  width: 90%;
  height: 70%;
  border-radius: 1em;
  margin-bottom: 2px;
`;

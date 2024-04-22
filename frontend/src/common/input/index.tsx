import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/theme";

type InputType = {
  //   width?: string;
  //   height?: string;
  value: string;
  id: string;
  placeholder: string;
  //   fontSize?: string;
  onChange: (value: string) => void;
  onKeyUp: (value: string) => void;
};

const Input = styled.input<InputType>`
  /* width: ${(props) => (props.width ? props.width : "339px")}; */
  /* height: ${(props) => (props.height ? props.height : "36px")}; */
  /* font-size: 1em; */
`;

const index = (props: InputType) => {
  const { value, id, placeholder, onChange, onKeyUp } = props;

  return (
    <>
      <Input />
    </>
  );
};

export default index;

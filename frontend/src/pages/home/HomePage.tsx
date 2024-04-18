import React from 'react';
import Button from '@components/atoms/button'
import styled from "styled-components"
import { colors } from "@styles/theme"

const Container = styled.div`
  display: flex;
  width: 100%;
  height:  100vh;
  background-color: ${colors.gray01} ;


`

const Wrap = styled.div`
  display: flex;

`




const HomePage = () => {
    return (
        <div>
            {/* <Button onClick={()=> (console.log('확인'))}>확인</Button> */}
            {/* <Button text='확인' onClick={()=> (console.log('확인'))}></Button> */}
            <Button children={'확인'} onClick={() => console.log('확인')}></Button>
        </div>
    );
};

export default HomePage;
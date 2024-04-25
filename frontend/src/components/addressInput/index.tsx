import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode'

const Container = styled.div`
    width: 100vw;
    height: 300px;
    background-color: #fff;

`





const index = () => {

    const [addressData, setAddressData] = useState({
        zonecode: '',
        roadAddress:''
    })

    const onCompletePost = (data:any) => {
        console.log(data);
        setAddressData((prevData) => ({...prevData, zonecode: data.zonecode}))
        setAddressData((prevData) => ({...prevData, roadAddress: data.roadAddress}))
        console.log(addressData);
    }




    return (
        <Container>
            <DaumPostcode onComplete={onCompletePost}/>
        </Container>
    );
};

export default index;
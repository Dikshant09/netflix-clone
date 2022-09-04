import React from 'react'
import styled from 'styled-components';
import { TiTick } from 'react-icons/ti';

const SignUp = () => {
  return (
    <Container>
        <div className='gello'>SignUp</div>
        <TiTick  className='tick'/>
    </Container>
  )
}

const Container = styled.div`
    .gello{
        padding: 20px;
    }
    
    .tick{
        color: red;
    }
`;

export default SignUp;
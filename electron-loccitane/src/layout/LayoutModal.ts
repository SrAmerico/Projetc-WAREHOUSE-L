import React from 'react';
import styled from 'styled-components';

export const Divisao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100dvh;
    
`;

export const Container1 = styled.div`
    width: 70px;
    transition: 300ms ease-in;
    overflow: hidden;

    &.open{
      width: 235px;
    }
    &.close{
      width: 70px;
    }
`;

export const Container2 = styled.div`
    width: 94.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 300ms ease-in;

    &.open{
      width: 80%;
    }
    &.close{
      width: 94.5%;
    }
`;

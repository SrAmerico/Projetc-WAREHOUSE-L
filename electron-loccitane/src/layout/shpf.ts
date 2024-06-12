//sidebar, header, page e footer.

import styled from "styled-components";

export const Divisao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100dvh;
    
`;

export const Container1 = styled.div`
    .container1{
    width: 15px;
    transition: 300ms
     ease-in;
    }

    .container1.open{
    width: 235px;
    }
    .container1.close{
    width: 70px;
    }
`;

export const Container2 = styled.div`
    .container2{
    width: 94.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 300ms ease-in;
    }
    .container2.open{
    width: 80%;
    }
    .container2close{
    width: 94.5%;
    }
`;


/*

<Divisão>
<Container1>conteudo da sidebar</>
<Container2>conteuda header, footer e page</>
</Divisão>

*/
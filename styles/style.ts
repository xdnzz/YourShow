import styled from 'styled-components';

export const ContainerMain = styled.div`
 padding: 0 2rem;
 background: #181620;
 display:flex;
 justify-content: center;
 width: 100%;
 span {
     font-size: 3rem;
 }

`;

export const Container = styled.div`
margin: 0 100px 30px 0px;
span {
        color: #FFF;
        cursor: pointer;
    }
button {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 30px;
    margin: 10px 426px 0px 0px;
    z-index: 9999;
    cursor: not-allowed;
}
`;

export const DisplayDataMvoe = styled.div `
width: 400px;

div{
    position:fixed; 
    display:flex;
}
`;

export const DescriptionShow = styled.div`
width: 400px;
height: 200px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
text-align: center;
color: #fff;
`;
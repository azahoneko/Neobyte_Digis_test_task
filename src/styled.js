import styled from '@emotion/styled'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
`;

export const Header = styled.header`
    flex: 0 0 92px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.footer`
    flex: 0 0 92px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    flex: 1;
    overflow:auto;
    color: dimgrey;
`;

export const Label = styled.label`
    margin-right: 20px;
`;
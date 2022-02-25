import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: 'Neucha', cursive;
    background:${({ theme: { colors } }) => colors.primary.main}
    
}
`;

export const Container = styled.div`
	max-width: 1200px;
	padding: 10px;
	margin: 0 auto;
	height: 100%;
`;

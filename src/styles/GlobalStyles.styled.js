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
h3,h2,h1,h4,h5,h6{
    margin-bottom:0;
}
.mt-md{
    margin-top:30px;
}
.cursor{
    cursor:pointer;
}
.text-light{
color:${({ theme: { colors } }) => colors.light};
}

`;

export const Container = styled.div`
	max-width: 1200px;
	padding: 10px;
	margin: 0 auto;
	height: 100%;
`;

import styled from "styled-components";
export const Button = styled.button`
	outline: none;
	border: none;
	padding: 10px 15px;
	cursor: pointer;
	background: ${({ color, theme }) =>
		color ? theme.colors[color] : theme.colors.primary.main};
	color: #fff;
	border-radius: 4px;
`;

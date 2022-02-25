import styled from "styled-components";
export const TaskCategory = styled.div`
	padding: 1rem;
	background: ${({ color, theme }) =>
		color ? theme.colors[color] : theme.colors.primary.shade};
	border-radius: 4px;
	width: 100%;
`;

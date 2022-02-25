import styled from "styled-components";
export const HeaderStyle = styled.header`
	height: 50px;
	background: ${({ theme: { colors } }) => colors.primary.shade};
	color: #fff;
`;

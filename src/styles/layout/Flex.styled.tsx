import styled from "styled-components";

interface propsTypes {
	direction?: string;
	align?: string;
	justify?: string;
	width?: string;
	height?: string;
}
export const Flex = styled.div<propsTypes>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	align-items: ${({ align }) => align || "flex-start"};
	justify-content: ${({ justify }) => justify || "flex-start"};
	width: ${({ width }) => width || ""};
	height: ${({ height }) => height || ""};
	gap: 15px;
`;

import styled from "styled-components";
export const InputField = styled.input`
	border: ${({ theme }) => `1px solid ${theme.colors.primary.main}`};
	outline: none;
	border-radius: 4px;
	margin-bottom: 12px;
	padding: 12px;
	width: 100%;
	placeholder: ${({ placeholder }) => (placeholder ? placeholder : "")};
`;

export const TextArea = styled.textarea`
	border: ${({ theme }) => `1px solid ${theme.colors.primary.main}`};
	outline: none;
	border-radius: 4px;
	margin-bottom: 12px;
	padding: 12px;
	width: 100%;
	placeholder: ${({ placeholder }) => (placeholder ? placeholder : "")};
`;

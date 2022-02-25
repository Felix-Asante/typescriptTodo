import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle.styled";
import { Container } from "../styles/GlobalStyles.styled";
import { Flex } from "../styles/layout/Flex.styled";
import { Button } from "../styles/Button";
import { AppstoreAddOutlined } from "@ant-design/icons";
export default function Header() {
	return (
		<HeaderStyle>
			<Container>
				<Flex align="center" justify="space-between" width="100%" height="100%">
					<h2>Taskify</h2>
					<Button color="danger">
						<span>
							<AppstoreAddOutlined /> Add Task
						</span>
					</Button>
				</Flex>
			</Container>
		</HeaderStyle>
	);
}

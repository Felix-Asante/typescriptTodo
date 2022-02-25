import React from "react";
import { StyledTaskCard } from "../styles/StyledTaskCard";
import { taskType } from "../App";
import { Flex } from "../styles/layout/Flex.styled";
import { DeleteOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
export default function TaskCard({ title, description, isDone }: taskType) {
	return (
		<StyledTaskCard>
			<Flex align="center" justify="space-between">
				<h2>{title}</h2>
				<div className="icons">
					<DeleteOutlined className="cursor" />
					<CheckOutlined className="cursor" />
					<EditOutlined className="cursor" />
				</div>
			</Flex>
			<p>
				{description.length > 200
					? description.substring(0, 200).concat("...")
					: description}{" "}
			</p>
		</StyledTaskCard>
	);
}

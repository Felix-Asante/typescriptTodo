import React, { useState, useRef } from "react";
import Header from "./components/Header";
import { Container, GlobalStyles } from "./styles/GlobalStyles.styled";
import { Flex } from "./styles/layout/Flex.styled";
import { TaskCategory } from "./styles/TaskCategory";
import { Modal } from "antd";
import { Button } from "./styles/Button";
import { InputField, TextArea } from "./styles/InputField.styled";

interface taskType {
	title: string;
	description: string;
}
function App() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [task, setTask] = useState<taskType[]>();

	const descriptionRef = useRef(null);
	const titleRef = useRef(null);
	// CLOSE MODAL
	const handleCancel = () => {
		setShowModal(false);
	};
	// OPEN MODEL

	const modelHandler = () => setShowModal(true);
	const handleOk = () => {};
	return (
		<React.Fragment>
			<GlobalStyles />
			<Header showModal={modelHandler} />
			<div className="mt-md">
				<Container>
					<Flex justify="space-between">
						<TaskCategory color="secondary">
							<h3>Active Tasks</h3>
						</TaskCategory>
						<TaskCategory>
							<h3>In Progress</h3>
						</TaskCategory>
						<TaskCategory color="danger">
							<h3>Completed</h3>
						</TaskCategory>
					</Flex>
				</Container>
			</div>

			<Modal
				visible={showModal}
				title="Create new task"
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button color="danger" onClick={handleOk}>
						Add task
					</Button>,
				]}
			>
				<label>Task title</label>
				<InputField ref={titleRef} />
				<label>Task description</label>
				<TextArea ref={descriptionRef} />
			</Modal>
		</React.Fragment>
	);
}

export default App;

import React, { useRef } from 'react';
import Todo from '../models/Todo';

type NewTodoProps = {
	onNewTodo: (todo: Todo) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onNewTodo }) => {
	const titleRef = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
				event.preventDefault();
				// const title = Array.from[...event.currentTarget.elements].find(
				// 	($el: HTMLInputElement) => $el.name === 'title'
				// ).value;
				// onNewTodo(
				// 	new Todo(
				// 		(event.currentTarget.elements.namedItem(
				// 			'title'
				// 		) as HTMLInputElement).value
				// 	)
				// );
				onNewTodo(new Todo(titleRef.current!.value));
				event.currentTarget.reset();
			}}
		>
			<input
				type="text"
				name="title"
				ref={titleRef}
				placeholder="What you need to do?"
			/>
			<button type="submit">Save</button>
		</form>
	);
};

export default NewTodo;
